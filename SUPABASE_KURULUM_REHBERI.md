# 🚀 Supabase Kurulum Rehberi - Detaylı Anlatım

## 📋 ADIM 1: Supabase Hesabı Oluşturma

### 1.1 Web Sitesine Giriş
1. **Tarayıcınızı açın** (Chrome, Firefox, Safari vb.)
2. **Adres çubuğuna** `supabase.com` yazın ve Enter'a basın
3. **Ana sayfada** yeşil **"Start your project"** butonunu göreceksiniz
4. Bu butona **tıklayın**

### 1.2 Hesap Oluşturma
1. **"Sign up"** (Kayıt Ol) seçeneğini seçin
2. **GitHub hesabınızla** giriş yapmanız önerilir:
   - **"Continue with GitHub"** butonuna tıklayın
   - GitHub hesabınız yoksa, önce GitHub.com'da hesap oluşturun
3. **Alternatif olarak email** ile de kayıt olabilirsiniz:
   - Email adresinizi girin
   - Güçlü bir şifre oluşturun
   - **"Sign Up"** butonuna tıklayın

---

## 🏗️ ADIM 2: Yeni Proje Oluşturma

### 2.1 Dashboard'a Giriş
1. Hesap oluşturduktan sonra **Supabase Dashboard**'a yönlendirileceksiniz
2. **"New Project"** butonunu göreceksiniz (yeşil renkte)
3. Bu butona **tıklayın**

### 2.2 Proje Ayarları
1. **Organization seçimi**:
   - Genellikle kendi adınız görünür
   - **Kişisel hesabınızı** seçin

2. **Project Name** (Proje Adı):
   - `ppapedia-db` yazın
   - Veya istediğiniz başka bir isim

3. **Database Password** (Veritabanı Şifresi):
   - **ÇOK ÖNEMLİ**: Bu şifreyi kaydedin!
   - Güçlü bir şifre oluşturun (en az 8 karakter)
   - Örnek: `MySecurePass123!`
   - **Not defterine yazın** veya şifre yöneticisine kaydedin

4. **Region** (Bölge):
   - **"Europe (eu-central-1)"** seçin
   - Bu Türkiye'ye en yakın sunucu

5. **"Create new project"** butonuna tıklayın

### 2.3 Bekleme Süreci
- ⏳ **2-3 dakika** bekleyin
- Proje oluşturulurken **loading** ekranı göreceksiniz
- **Sabırlı olun**, bu normal bir süreç

---

## 🔑 ADIM 3: API Anahtarlarını Alma

### 3.1 Settings Menüsüne Gitme
1. Proje oluşturulduktan sonra **sol menüyü** kontrol edin
2. **En altta** ⚙️ **"Settings"** yazısını bulun
3. **Settings'e tıklayın**
4. Açılan alt menüden **"API"** seçeneğine tıklayın

### 3.2 Anahtarları Kopyalama
**Şu bilgileri göreceksiniz:**

#### A) Project URL:
```
https://abcdefghijklmnop.supabase.co
```
- **Tamamını seçin** ve kopyalayın (Ctrl+C)
- **Not defterine yapıştırın**

#### B) anon public key:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY5...
```
- **Çok uzun bir metin** (yaklaşık 200+ karakter)
- **"Copy"** butonuna tıklayın
- **Not defterine yapıştırın**

**⚠️ ÖNEMLİ**: Bu anahtarları **güvenli bir yerde** saklayın!

---

## 📝 ADIM 4: .env Dosyası Oluşturma

### 4.1 Dosya Oluşturma
1. **Proje klasörünüzü** açın (PPAPedia projesinin olduğu yer)
2. **Ana dizinde** (package.json'un olduğu yerde) **yeni dosya** oluşturun
3. Dosya adı: **`.env`** (nokta ile başlar!)

### 4.2 İçerik Ekleme
`.env` dosyasını açın ve şu içeriği ekleyin:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4.3 Kendi Bilgilerinizi Yazma
1. **`your-project-id`** kısmını **kendi Project URL'inizle** değiştirin
2. **`eyJhbGciOi...`** kısmını **kendi anon key'inizle** değiştirin

**Örnek:**
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY5...
```

### 4.4 Dosyayı Kaydetme
- **Ctrl+S** ile kaydedin
- Dosya adının **`.env`** olduğundan emin olun

---

## 🗄️ ADIM 5: SQL Tablolarını Oluşturma

### 5.1 SQL Editor'a Gitme
1. **Supabase Dashboard**'a geri dönün
2. **Sol menüden** 🔧 **"SQL Editor"** seçin
3. **"New query"** butonuna tıklayın

### 5.2 SQL Kodunu Yapıştırma
Aşağıdaki **tüm kodu** kopyalayın ve SQL Editor'a yapıştırın:

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

CREATE POLICY "Users can update own analyses"
  ON ai_analyses
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = user_id);

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

CREATE POLICY "Users can update tasks"
  ON tasks
  FOR UPDATE
  TO authenticated
  USING (true);

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
      "Kalıp havalandırma deliklerinin artırılması",
      "Dolum süresinin optimizasyonu"
    ],
    "recommendations": [
      "Günlük basınç kontrol rutini",
      "Haftalık kalıp temizlik programı",
      "Operatör eğitim programı"
    ]
  }',
  89,
  5,
  'completed',
  'demo-user'
),
(
  'Yanık İzleri',
  'Plastik Enjeksiyon',
  'Kalıp boşluğunda sıkışan havanın yüksek basınç ve sıcaklık altında yanması',
  '{
    "problemType": "Yanık İzleri",
    "rootCause": "Kalıp havalandırma yetersizliği, fazla enjeksiyon hızı",
    "confidence": 92,
    "immediateActions": [
      "Havalandırma sisteminin artırılması",
      "Enjeksiyon hızının optimize edilmesi",
      "Malzeme kurutma prosedürünün uygulanması"
    ],
    "recommendations": [
      "Günlük havalandırma kontrol rutini",
      "Sıcaklık profili takip sistemi",
      "Malzeme nem ölçümü"
    ]
  }',
  92,
  4,
  'completed',
  'demo-user'
),
(
  'Renk Ton Farklılığı',
  'Plastik Enjeksiyon',
  'Pigment dağılımının homojen olmaması nedeniyle farklı renk tonları',
  '{
    "problemType": "Renk Kalitesi Hatası",
    "rootCause": "Masterbatch oranı değişken, pigment homojen karışmamış",
    "confidence": 76,
    "immediateActions": [
      "Masterbatch dozajının kalibre edilmesi",
      "Hammadde kurutma prosedürünün uygulanması",
      "Lot takip sisteminin kurulması"
    ],
    "recommendations": [
      "Günlük renk kontrol rutini",
      "Lot takip sistemi",
      "Dozajlama kalibrasyonu"
    ]
  }',
  76,
  4,
  'in_progress',
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
),
(
  'Boya Kabini Filtre Değişimi',
  'Periyodik bakım kapsamında filtre değişimi',
  'Mehmet Kaya',
  '2025-01-12',
  'medium',
  'todo',
  'Bakım',
  4,
  0,
  ARRAY['bakım', 'filtre', 'boya']
),
(
  'Operatör Eğitim Programı',
  'Yeni operatörler için temel eğitim programı',
  'Ali Özkan',
  '2025-01-19',
  'medium',
  'completed',
  'Eğitim',
  16,
  16,
  ARRAY['eğitim', 'operatör', 'temel']
);
```

### 5.3 Kodu Çalıştırma
1. **Tüm kodu seçin** (Ctrl+A)
2. **"Run"** butonuna tıklayın (yeşil play butonu)
3. **Başarılı** mesajı göreceksiniz: "Success. No rows returned"

---

## 🔄 ADIM 6: Uygulamayı Yeniden Başlatma

### 6.1 Terminal'i Kapatma
1. **Çalışan uygulamayı durdurun**
2. **Terminal'de** `Ctrl+C` tuşlarına basın
3. Uygulama **durmalı**

### 6.2 Yeniden Başlatma
1. **Terminal'de** şu komutu yazın:
```bash
npm run dev
```
2. **Enter'a basın**
3. **Uygulama yeniden başlayacak**

### 6.3 Tarayıcıyı Yenileme
1. **Tarayıcınızı açın**
2. **F5** tuşuna basın veya **yenile butonuna** tıklayın
3. **Sayfayı yenileyin**

---

## ✅ BAŞARI KONTROL LİSTESİ

### Canlı Mod Aktif Olduğunda:
- ❌ **"Demo modu aktif"** mesajı **kaybolur**
- ✅ **Gerçek veriler** görünür
- ✅ **Real-time güncellemeler** çalışır
- ✅ **Yeni veriler** veritabanına kaydedilir
- ✅ **Sayfa yenilendiğinde** veriler korunur

---

## 🆘 SORUN GİDERME

### Problem 1: "Bağlantı hatası"
**Çözüm:**
- `.env` dosyasındaki **URL ve KEY'leri** kontrol edin
- **Boşluk** veya **fazla karakter** olmamalı
- **Supabase projesinin aktif** olduğundan emin olun

### Problem 2: "Table doesn't exist"
**Çözüm:**
- **SQL kodunu tekrar** çalıştırın
- **Tüm kodu** seçtiğinizden emin olun
- **"Run" butonuna** tıklayın

### Problem 3: ".env dosyası çalışmıyor"
**Çözüm:**
- Dosya adının **tam olarak `.env`** olduğundan emin olun
- **Ana dizinde** olmalı (package.json ile aynı yerde)
- **Uygulamayı yeniden başlatın**

### Problem 4: "Demo modu hala aktif"
**Çözüm:**
- **Tarayıcı cache'ini** temizleyin (Ctrl+Shift+R)
- **Farklı tarayıcıda** deneyin
- **Terminal'i kapatıp** yeniden başlatın

---

## 📞 YARDIM

Hala sorun yaşıyorsanız:
1. **Supabase Dashboard** → **"Logs"** bölümünü kontrol edin
2. **Browser Console'da** hata mesajlarını kontrol edin (F12)
3. **`.env` dosyasının** doğru konumda olduğundan emin olun

---

🎉 **Tebrikler!** Bu adımları tamamladığınızda PPAPedia canlı modda çalışacak!