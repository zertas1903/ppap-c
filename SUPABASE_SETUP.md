# 🚀 Canlı Moda Geçiş Rehberi - Supabase Kurulumu

## 📋 Adım 1: Supabase Hesabı Oluşturun

1. **[Supabase.com](https://supabase.com)** adresine gidin
2. **"Start your project"** butonuna tıklayın
3. **GitHub** hesabınızla giriş yapın
4. **"New Project"** butonuna tıklayın

## 🏗️ Adım 2: Yeni Proje Oluşturun

1. **Organization** seçin (kişisel hesabınız)
2. **Project Name**: `ppapedia-db` (veya istediğiniz isim)
3. **Database Password**: Güçlü bir şifre oluşturun (kaydedin!)
4. **Region**: `Europe (eu-central-1)` seçin (Türkiye'ye en yakın)
5. **"Create new project"** butonuna tıklayın

⏳ **Bekleme süresi**: 2-3 dakika

## 🔑 Adım 3: API Anahtarlarını Alın

Proje oluşturulduktan sonra:

1. Sol menüden **"Settings"** → **"API"** seçin
2. Aşağıdaki bilgileri kopyalayın:

```
Project URL: https://your-project-id.supabase.co
anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📝 Adım 4: Environment Variables Ayarlayın

1. Projenizde `.env` dosyası oluşturun (yoksa)
2. Aşağıdaki bilgileri ekleyin:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Önemli**: `your-project-id` kısmını kendi proje ID'nizle değiştirin!

## 🗄️ Adım 5: Veritabanı Tablolarını Oluşturun

1. Supabase Dashboard'da **"SQL Editor"** seçin
2. **"New query"** butonuna tıklayın
3. Aşağıdaki SQL kodunu yapıştırın ve çalıştırın:

```sql
-- AI Analizleri Tablosu
CREATE TABLE IF NOT EXISTS ai_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text,
  analysis_result jsonb,
  confidence integer DEFAULT 0,
  rating integer DEFAULT 0,
  status text DEFAULT 'completed',
  user_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Güvenlik Ayarları
ALTER TABLE ai_analyses ENABLE ROW LEVEL SECURITY;

-- Politikalar
CREATE POLICY "Users can read own analyses"
  ON ai_analyses
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert own analyses"
  ON ai_analyses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = user_id);

-- Görevler Tablosu
CREATE TABLE IF NOT EXISTS tasks (
  id serial PRIMARY KEY,
  title text NOT NULL,
  description text,
  assignee text NOT NULL,
  due_date date,
  priority text DEFAULT 'medium',
  status text DEFAULT 'todo',
  category text,
  estimated_hours integer DEFAULT 8,
  completed_hours integer DEFAULT 0,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Güvenlik Ayarları
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Politikalar
CREATE POLICY "Users can read all tasks"
  ON tasks
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert tasks"
  ON tasks
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
```

## 🔄 Adım 6: Örnek Veri Ekleyin

SQL Editor'da aşağıdaki kodu çalıştırın:

```sql
-- Örnek AI Analizleri
INSERT INTO ai_analyses (title, category, description, analysis_result, confidence, rating, status, user_id) VALUES
(
  'Eksik Baskı Problemi',
  'Plastik Enjeksiyon',
  'Enjeksiyon kalıplama sürecinde malzemenin kalıp boşluğunu tamamen dolduramaması',
  '{
    "problemType": "Plastik Enjeksiyon Hatası",
    "rootCause": "Enjeksiyon basıncının düşük olması, kalıp havalandırmasının yetersizliği",
    "confidence": 89,
    "immediateActions": [
      "Basınç sensörü ile sürekli takip sistemi kurulması",
      "Kalıp havalandırma deliklerinin artırılması"
    ]
  }',
  89,
  5,
  'completed',
  'demo-user'
);

-- Örnek Görevler
INSERT INTO tasks (title, description, assignee, due_date, priority, status, category, estimated_hours, completed_hours, tags) VALUES
(
  'Plastik Enjeksiyon Kalıp Revizyonu',
  'Kalıp parametrelerinin optimizasyonu ve revizyon işlemleri',
  'Ahmet Yılmaz',
  '2025-01-15',
  'high',
  'in_progress',
  'Mühendislik',
  40,
  27,
  ARRAY['kalıp', 'revizyon', 'optimizasyon']
);
```

## ✅ Adım 7: Bağlantıyı Test Edin

1. Uygulamanızı yeniden başlatın: `npm run dev`
2. Sayfayı yenileyin
3. **"Demo modu aktif"** mesajı kaybolmalı
4. **Gerçek veriler** görünmeye başlamalı

## 🎯 Başarı Göstergeleri

✅ **Canlı mod aktif** olduğunda:
- Demo modu mesajı kaybolur
- Gerçek zamanlı güncellemeler çalışır
- Yeni veriler veritabanına kaydedilir
- Sayfa yenilendiğinde veriler korunur

## 🆘 Sorun Giderme

### Problem: "Bağlantı hatası"
**Çözüm**: 
- `.env` dosyasındaki URL ve KEY'leri kontrol edin
- Supabase projesinin aktif olduğundan emin olun

### Problem: "RLS policy violation"
**Çözüm**:
- SQL politikalarını tekrar çalıştırın
- `user_id` alanını kontrol edin

### Problem: "Table doesn't exist"
**Çözüm**:
- SQL tablolarını tekrar oluşturun
- Tablo isimlerini kontrol edin

## 📞 Destek

Sorun yaşarsanız:
1. Supabase Dashboard'da **"Logs"** bölümünü kontrol edin
2. Browser Console'da hata mesajlarını kontrol edin
3. `.env` dosyasının doğru konumda olduğundan emin olun

---

🎉 **Tebrikler!** Artık PPAPedia canlı modda çalışıyor!