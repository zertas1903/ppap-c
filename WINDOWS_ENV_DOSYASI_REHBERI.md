# 📁 WINDOWS'TA .env DOSYASI OLUŞTURMA REHBERİ

## 🎯 ADIM 1: PROJE KLASÖRÜNÜ BULMA

### 1.1 Proje Klasörü Nerede?
**PPAPedia projeniz** şu yerlerden birinde olabilir:

#### A) Masaüstünde:
1. **Masaüstüne** bakın
2. **"PPAPedia"** veya **"vite-react-typescript-starter"** klasörü var mı?
3. **Varsa** bu sizin proje klasörünüz

#### B) Belgeler (Documents) klasöründe:
1. **Windows tuşu + E** basın (Dosya Gezgini açılır)
2. **Sol taraftan** "Documents" veya "Belgeler" tıklayın
3. **PPAPedia** klasörünü arayın

#### C) C: sürücüsünde:
1. **Dosya Gezgini** açın
2. **"This PC"** → **"Local Disk (C:)"** tıklayın
3. **Users** → **Kullanıcı adınız** → **PPAPedia** klasörünü arayın

#### D) VS Code ile açtıysanız:
1. **VS Code'u açın**
2. **File** → **Open Recent** menüsüne bakın
3. **Son açılan projeler** listesinde PPAPedia var mı?

### 1.2 Doğru Klasörü Nasıl Anlarım?
**Doğru klasörde** şu dosyalar olmalı:
- ✅ **package.json**
- ✅ **index.html**
- ✅ **src** klasörü
- ✅ **vite.config.ts**

**Bu dosyalar varsa** doğru yerdesiniz! 🎉

---

## 📝 ADIM 2: .env DOSYASI OLUŞTURMA (DETAYLI)

### 2.1 Proje Klasöründe Sağ Tık
1. **Proje klasörünü** açın (package.json'un olduğu yer)
2. **Boş bir alana** sağ tık yapın (dosyaların olmadığı beyaz alan)
3. **Açılan menüden** "New" seçeneğini bulun
4. **"New"** üzerine gelin (alt menü açılır)
5. **"Text Document"** seçeneğine tıklayın

### 2.2 Dosya Adını Değiştirme
1. **"New Text Document.txt"** dosyası oluşacak
2. **Dosya seçili durumda** (mavi renkle işaretli)
3. **Hemen** `.env` yazın (nokta ile başlar!)
4. **Enter tuşuna** basın

### 2.3 Uyarı Mesajı
**"Are you sure you want to change the file extension?"** uyarısı çıkacak:
- **"Yes"** butonuna tıklayın
- **Dosya adı** `.env` olacak
- **İkon değişecek** (artık metin dosyası ikonu olmayacak)

### 2.4 Alternatif Yöntem - Dosya Uzantılarını Gösterme
**Eğer uyarı çıkmazsa:**

1. **Dosya Gezgini'nde** üst menüden **"View"** tıklayın
2. **"File name extensions"** kutucuğunu işaretleyin
3. **Artık** `.txt` uzantıları görünecek
4. **Dosyayı yeniden adlandırın**: `New Text Document.txt` → `.env`

---

## ✏️ ADIM 3: .env DOSYASINI AÇMA VE DÜZENLEME

### 3.1 Dosyayı Açma
1. **`.env` dosyasına** çift tıklayın
2. **"How do you want to open this file?"** sorarsa:
   - **"Notepad"** (Not Defteri) seçin
   - **"Always use this app"** işaretleyin
   - **"OK"** tıklayın

### 3.2 İçerik Yazma
**Açılan Not Defteri'ne** şunu yazın:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3.3 Kendi Bilgilerinizi Yazma
1. **`your-project-id`** kısmını **Supabase'den aldığınız URL** ile değiştirin
2. **`eyJhbGciOi...`** kısmını **Supabase'den aldığınız anon key** ile değiştirin

**Örnek:**
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY5ODc2NjQwMCwiZXhwIjoyMDE0MzQyNDAwfQ.abc123def456ghi789
```

### 3.4 Dosyayı Kaydetme
1. **Ctrl + S** tuşlarına basın
2. **Veya** File → Save menüsünden
3. **Not Defteri'ni** kapatın

---

## 🔍 ADIM 4: DOĞRULAMA

### 4.1 Dosyanın Doğru Oluştuğunu Kontrol Etme
**Proje klasöründe** şunları görmeli:
- ✅ **`.env`** dosyası var
- ✅ **package.json** ile aynı seviyede
- ✅ **Dosya boyutu** 0 KB'dan büyük

### 4.2 İçeriği Kontrol Etme
1. **`.env` dosyasına** tekrar çift tıklayın
2. **İçeriğin** doğru yazıldığından emin olun
3. **Boşluk** veya **fazla karakter** olmamalı

---

## ⚠️ SIKÇA YAPILAN HATALAR

### ❌ Hata 1: Yanlış Konum
**Problem:** `.env` dosyası yanlış klasörde
**Çözüm:** `package.json` ile aynı klasörde olmalı

### ❌ Hata 2: Yanlış Dosya Adı
**Problem:** `env.txt` veya `.env.txt` olmuş
**Çözüm:** Tam olarak `.env` olmalı (uzantısız)

### ❌ Hata 3: İçerik Hatası
**Problem:** Boşluk veya yanlış karakter
**Çözüm:** Tam olarak kopyalayın, fazla boşluk eklemeyin

### ❌ Hata 4: Dosya Görünmüyor
**Problem:** Gizli dosya olarak algılanıyor
**Çözüm:** View → Hidden items işaretleyin

---

## 🎯 SONUÇ

**Bu adımları tamamladığınızda:**
- ✅ `.env` dosyası oluşturulmuş olacak
- ✅ Supabase bilgileri yazılmış olacak
- ✅ Canlı moda geçmeye hazır olacaksınız

**Sonraki adım:** Supabase'de SQL tablolarını oluşturmak! 🚀

---

## 📞 YARDIM

**Takıldığınız nokta:**
- **Proje klasörünü bulamıyorum** → VS Code'da File → Open Recent bakın
- **Sağ tık menüsünde New yok** → Farklı bir alana sağ tık yapın
- **Dosya adı değişmiyor** → File name extensions'ı açın
- **İçerik kayboldu** → Ctrl+S ile kaydetmeyi unutmayın

**Hangi adımda sorun yaşıyorsunız? Size yardımcı olayım!** 😊