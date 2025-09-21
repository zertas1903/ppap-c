import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [session, setSession] = useState<any>(null)
  const [title, setTitle] = useState('')
  const [items, setItems] = useState<any[]>([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password })
    setStatus(error ? error.message : 'Kayıt tamam. (E-posta doğrulaması açıksa mailini kontrol et)')
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setStatus(error ? error.message : '')
  }

  async function signOut() {
    await supabase.auth.signOut()
    setItems([])
  }

  async function loadItems() {
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error) setItems(data || [])
  }

  async function addItem() {
    if (!session) return setStatus('Önce giriş yapmalısın.')
    setStatus('Kaydediliyor…')
    const { error } = await supabase.from('items').insert([{ title }])
    if (error) setStatus(error.message)
    else {
      setTitle('')
      setStatus('OK')
      loadItems()
    }
  }

  useEffect(() => { if (session) loadItems() }, [session])

  return (
    <div style={{ maxWidth: 520, margin: '40px auto', fontFamily: 'ui-sans-serif' }}>
      <h2 style={{ marginBottom: 12 }}>PPAPedia Mini • Auth + Kayıt</h2>

      {!session ? (
        <div style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
          <input placeholder="E-posta" value={email} onChange={e=>setEmail(e.target.value)} />
          <input placeholder="Şifre" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={signIn}>Giriş Yap</button>
            <button onClick={signUp}>Kayıt Ol</button>
          </div>
          <small style={{ color:'#666' }}>{status}</small>
        </div>
      ) : (
        <>
          <p>Hoş geldin: <b>{session.user.email}</b></p>
          <button onClick={signOut}>Çıkış</button>
          <hr />
          <h3>Yeni Kayıt Ekle</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <input placeholder="Başlık" value={title} onChange={e=>setTitle(e.target.value)} />
            <button onClick={addItem}>Ekle</button>
          </div>
          <h3 style={{ marginTop: 24 }}>Kayıtlarım</h3>
          <ul>
            {items.map(i => <li key={i.id}>{i.title} — {new Date(i.created_at).toLocaleString()}</li>)}
          </ul>
          <small style={{ color:'#666' }}>{status}</small>
        </>
      )}
    </div>
  )
}
