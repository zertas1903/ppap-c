# 🚀 SUPABASE KURULUM REHBERİ - ADIM ADIM DETAYLI ANLATIM

## 📋 ADIM 1: SUPABASE HESABI OLUŞTURMA

### 1.1 Web Sitesine Giriş
1. **Google Chrome, Firefox veya Safari** tarayıcınızı açın
2. **Adres çubuğuna** şunu yazın: `supabase.com`
3. **Enter tuşuna** basın
4. **Ana sayfada** büyük yeşil **"Start your project"** butonunu göreceksiniz
5. Bu **yeşil butona tıklayın**

### 1.2 Giriş Sayfası
1. **"Sign up"** (Kayıt Ol) yazısını göreceksiniz
2. **İki seçenek** var:
   - **GitHub ile giriş** (önerilen)
   - **Email ile giriş**

### 1.3 GitHub ile Giriş (Önerilen)
1. **"Continue with GitHub"** butonuna tıklayın
2. **GitHub hesabınız varsa:**
   - Kullanıcı adı ve şifrenizi girin
   - **"Sign in"** butonuna tıklayın
3. **GitHub hesabınız yoksa:**
   - Önce **github.com** adresine gidin
   - **"Sign up"** ile hesap oluşturun
   - Sonra geri dönün

### 1.4 Email ile Giriş (Alternatif)
1. **Email adresinizi** girin
2. **Güçlü bir şifre** oluşturun (en az 8 karakter)
3. **"Sign Up"** butonuna tıklayın
4. **Email'inizi kontrol edin** ve doğrulama linkine tıklayın

---

## 🏗️ ADIM 2: YENİ PROJE OLUŞTURMA

### 2.1 Dashboard'a Giriş
1. Giriş yaptıktan sonra **Supabase Dashboard** açılacak
2. **Sağ üst köşede** yeşil **"New Project"** butonunu göreceksiniz
3. Bu **butona tıklayın**

### 2.2 Proje Bilgilerini Doldurma

#### A) Organization Seçimi:
- **Dropdown menüden** kendi adınızı seçin
- Genellikle **tek seçenek** olur

#### B) Project Name (Proje Adı):
- **Kutucuğa** şunu yazın: `ppapedia-db`
- Veya istediğiniz başka bir isim

#### C) Database Password (ÇOK ÖNEMLİ!):
- **Güçlü bir şifre** oluşturun
- **Örnek**: `MySecurePass123!`
- **⚠️ BU ŞİFREYİ MUTLAKA KAYDET!**
- **Not defterine yazın** veya telefona kaydedin

#### D) Region (Bölge):
- **Dropdown'dan** `Europe (eu-central-1)` seçin
- Bu **Türkiye'ye en yakın** sunucu

### 2.3 Projeyi Oluşturma
1. **"Create new project"** butonuna tıklayın
2. **⏳ 2-3 dakika bekleyin**
3. **Loading ekranı** göreceksiniz - bu normal!
4. **Sabırlı olun**, proje oluşturuluyor

---

## 🔑 ADIM 3: API ANAHTARLARINI ALMA

### 3.1 Settings Menüsüne Gitme
1. Proje oluşturulduktan sonra **sol tarafta menü** göreceksiniz
2. **En altta** ⚙️ **"Settings"** yazısını bulun
3. **Settings'e tıklayın**
4. **Alt menü açılacak**
5. **"API"** seçeneğine tıklayın

### 3.2 Anahtarları Kopyalama

#### A) Project URL:
```
https://abcdefghijklmnop.supabase.co
```
- **Bu URL'i göreceksiniz** (sizinki farklı olacak)
- **Sağındaki "Copy" butonuna** tıklayın
- **Not defterine yapıştırın** (Ctrl+V)

#### B) anon public key:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY5...
```
- **Çok uzun bir metin** göreceksiniz (200+ karakter)
- **"Copy" butonuna tıklayın**
- **Not defterine yapıştırın**

**⚠️ ÖNEMLİ**: Bu anahtarları **güvenli yerde** saklayın!

---

## 📝 ADIM 4: .env DOSYASI OLUŞTURMA (DETAYLI)

### 4.1 Proje Klasörünü Bulma
1. **Bilgisayarınızda** PPAPedia projesinin olduğu klasörü açın
2. **package.json** dosyasını görebilmelisiniz
3. **Bu klasörde** yeni dosya oluşturacağız

### 4.2 Windows'ta .env Dosyası Oluşturma

#### Yöntem 1: Notepad ile
1. **Proje klasöründe** boş alana **sağ tık** yapın
2. **"New" → "Text Document"** seçin
3. **Dosya adını** `.env` yapın (nokta ile başlar!)
4. **"Are you sure?"** uyarısında **"Yes"** deyin
5. **Dosyayı çift tıklayarak** açın

#### Yöntem 2: VS Code ile
1. **VS Code'u** açın
2. **File → New File** (Ctrl+N)
3. **File → Save As** (Ctrl+Shift+S)
4. **Dosya adı**: `.env`
5. **Proje klasörüne** kaydedin

### 4.3 macOS'ta .env Dosyası Oluşturma
1. **Finder'da** proje klasörünü açın
2. **Terminal'i açın** (Cmd+Space → "Terminal")
3. **Şu komutu yazın**: `touch .env`
4. **Enter'a basın**
5. **TextEdit ile** açın

### 4.4 .env Dosyasına İçerik Ekleme

#### A) Dosyayı Açın
- **Oluşturduğunuz .env dosyasını** çift tıklayarak açın

#### B) İçeriği Yazın
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### C) Kendi Bilgilerinizi Yazın
1. **`your-project-id`** kısmını **kendi Project URL'inizle** değiştirin
2. **`eyJhbGciOi...`** kısmını **kendi anon key'inizle** değiştirin

**Örnek:**
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY5ODc2NjQwMCwiZXhwIjoyMDE0MzQyNDAwfQ.abc123def456ghi789
```

#### D) Dosyayı Kaydetme
- **Ctrl+S** (Windows) veya **Cmd+S** (Mac) ile kaydedin
- **Dosya adının** `.env` olduğundan emin olun

---

## 🗄️ ADIM 5: SQL TABLOLARINI OLUŞTURMA

### 5.1 SQL Editor'a Gitme
1. **Supabase Dashboard**'a geri dönün
2. **Sol menüden** 🔧 **"SQL Editor"** seçin
3. **"New query"** butonuna tıklayın (genellikle sağ üstte)

### 5.2 SQL Kodunu Kopyalama
**Aşağıdaki BÜTÜN kodu** seçin ve kopyalayın (Ctrl+A → Ctrl+C):

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

### 5.3 SQL Editor'a Yapıştırma
1. **SQL Editor'da** büyük metin kutusunu göreceksiniz
2. **Kutunun içine tıklayın**
3. **Ctrl+V** ile kopyaladığınız kodu yapıştırın
4. **Tüm kod** görünmeli (çok uzun)

### 5.4 Kodu Çalıştırma
1. **"Run"** butonunu bulun (genellikle yeşil play ▶️ butonu)
2. **"Run" butonuna tıklayın**
3. **Birkaç saniye bekleyin**
4. **"Success. No rows returned"** mesajını göreceksiniz
5. Bu **başarılı** demek!

---

## 🔄 ADIM 6: UYGULAMAYI YENİDEN BAŞLATMA

### 6.1 Terminal'i Bulma
1. **VS Code** kullanıyorsanız:
   - **Terminal → New Terminal** menüsünden
2. **Ayrı terminal** kullanıyorsanız:
   - **Command Prompt** (Windows)
   - **Terminal** (Mac/Linux)

### 6.2 Çalışan Uygulamayı Durdurma
1. **Terminal'de** `npm run dev` çalışıyorsa
2. **Ctrl+C** tuşlarına basın
3. **"Terminate batch job?"** sorarsa **Y** yazın
4. **Uygulama durmalı**

### 6.3 Yeniden Başlatma
1. **Terminal'de** şu komutu yazın:
```bash
npm run dev
```
2. **Enter tuşuna** basın
3. **Uygulama başlayacak**
4. **"Local: http://localhost:5173"** gibi bir adres göreceksiniz

### 6.4 Tarayıcıyı Yenileme
1. **Tarayıcınızı açın**
2. **F5 tuşuna** basın veya **yenile butonuna** tıklayın
3. **Sayfayı yenileyin**

---

## ✅ BAŞARI KONTROL LİSTESİ

### 🎯 Canlı Mod Aktif Olduğunda:
- ❌ **"Demo modu aktif"** mesajı **KAYBOLUR**
- ✅ **Gerçek veriler** görünür
- ✅ **Real-time güncellemeler** çalışır
- ✅ **Yeni veriler** veritabanına kaydedilir
- ✅ **Sayfa yenilendiğinde** veriler korunur

### 🔍 Kontrol Noktaları:
1. **`.env` dosyası** ana dizinde mi?
2. **API anahtarları** doğru mu?
3. **SQL kodu** tamamen çalıştırıldı mı?
4. **Uygulama yeniden** başlatıldı mı?

---

## 🆘 SORUN GİDERME

### ❌ Problem 1: "Bağlantı hatası"
**Çözüm:**
- **`.env` dosyasındaki** URL ve KEY'leri kontrol edin
- **Boşluk** veya **fazla karakter** olmamalı
- **Supabase projesinin aktif** olduğundan emin olun

### ❌ Problem 2: ".env dosyası çalışmıyor"
**Çözüm:**
- Dosya adının **tam olarak `.env`** olduğundan emin olun
- **Ana dizinde** olmalı (package.json ile aynı yerde)
- **Uygulamayı yeniden başlatın**

### ❌ Problem 3: "Table doesn't exist"
**Çözüm:**
- **SQL kodunu tekrar** çalıştırın
- **Tüm kodu** seçtiğinizden emin olun
- **"Run" butonuna** tıklayın

### ❌ Problem 4: "Demo modu hala aktif"
**Çözüm:**
- **Tarayıcı cache'ini** temizleyin (Ctrl+Shift+R)
- **Farklı tarayıcıda** deneyin
- **Terminal'i kapatıp** yeniden başlatın

---

## 📞 YARDIM GEREKİYORSA

### 🔍 Kontrol Edilecekler:
1. **Supabase Dashboard** → **"Logs"** bölümünü kontrol edin
2. **Browser Console'da** hata mesajlarını kontrol edin (F12 tuşu)
3. **`.env` dosyasının** doğru konumda olduğundan emin olun

### 📝 Bana Söylemeniz Gerekenler:
- **Hangi adımda** takıldınız?
- **Hata mesajı** var mı?
- **`.env` dosyası** oluşturuldu mu?
- **SQL kodu** çalıştırıldı mı?

---

🎉 **Bu adımları tamamladığınızda PPAPedia canlı modda çalışacak!**

**Herhangi bir adımda sorun yaşarsanız, o adımı belirtin ve size yardımcı olayım!** 😊