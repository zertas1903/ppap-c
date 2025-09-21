import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [hasSession, setHasSession] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setHasSession(!!data.session); setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setHasSession(!!s)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  if (loading) return <div style={{padding:20}}>Yükleniyor…</div>
  if (!hasSession) return <AuthScreen />
  return <>{children}</>
}

function AuthScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMsg(error ? error.message : '')
  }
  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password })
    setMsg(error ? error.message : 'Kayıt tamam. (E-posta doğrulaması açıksa mailine bak)')
  }

  return (
    <div style={{maxWidth:420, margin:'60px auto', display:'grid', gap:8, fontFamily:'ui-sans-serif'}}>
      <h2>Giriş yap</h2>
      <input placeholder="E-posta" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Şifre" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <div style={{display:'flex', gap:8}}>
        <button onClick={signIn}>Giriş</button>
        <button onClick={signUp}>Kayıt Ol</button>
      </div>
      <small style={{color:'#666'}}>{msg}</small>
    </div>
  )
}
