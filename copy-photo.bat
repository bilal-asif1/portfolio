@echo off
echo ========================================
echo   Profile Photo Copy Helper
echo ========================================
echo.
echo This will help you copy your profile photo
echo to the correct location for your portfolio.
echo.
echo Steps:
echo 1. Have your profile photo ready on your desktop
echo 2. Make sure it's named "my-photo.jpg" 
echo 3. Press any key to continue...
echo.
pause

if exist "C:\Users\%USERNAME%\Desktop\my-photo.jpg" (
    echo Found your photo! Copying to portfolio...
    copy "C:\Users\%USERNAME%\Desktop\my-photo.jpg" "assets\images\profile.jpg"
    echo.
    echo ✅ Success! Your photo has been copied.
    echo 🌐 Refresh your browser at http://localhost:8000
    echo.
) else (
    echo ❌ Photo not found on desktop.
    echo Please make sure your photo is named "my-photo.jpg"
    echo and saved on your desktop.
    echo.
    echo Alternative: Manually copy your photo to:
    echo assets\images\profile.jpg
)

echo.
pause
