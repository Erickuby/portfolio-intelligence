# Build the project
Write-Host "Building production bundle..." -ForegroundColor Green
npm run build

Write-Host "`nBuild complete! Files are in the 'dist' folder." -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Login to Hostinger File Manager at https://hpanel.hostinger.com" -ForegroundColor White
Write-Host "2. Navigate to public_html" -ForegroundColor White
Write-Host "3. Delete old files (keep .htaccess if you have one)" -ForegroundColor White
Write-Host "4. Upload all files from the 'dist' folder" -ForegroundColor White
Write-Host "`nOpening dist folder..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
explorer dist
