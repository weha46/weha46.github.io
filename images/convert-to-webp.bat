@echo off
cd /d "%~dp0"

echo 🔄 Memulai konversi semua gambar di seluruh subfolder ke WebP...

:: Proses semua file jpg, jpeg, dan png di semua subfolder
for /R %%f in (*.jpg *.jpeg *.png *.JPG *.JPEG *.PNG) do (
  echo ▶ Mengonversi: %%f
  cwebp -q 100 "%%f" -o "%%~dpnf.webp"
)

echo ✅ Selesai! Semua file .webp disimpan di folder masing-masing.
pause
