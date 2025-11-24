# PowerShell Script to Create Meeting Cost Calculator Repo and Upload README
$artifactsPath = "C:\Users\ericc\.gemini\antigravity\brain\d5f0469e-9b35-4485-9d17-c666a78eb49c"

Write-Host "Starting Meeting Cost Calculator repo setup..." -ForegroundColor Green
Write-Host ""

# Navigate to artifacts directory
Set-Location $artifactsPath

$repoName = "meeting-cost-calculator"
$readmeFile = "README_MeetingCost.md"

# 1. Create Repo on GitHub (if it doesn't exist)
Write-Host "Creating repository $repoName on GitHub..." -ForegroundColor Cyan
try {
    gh repo create "Erickuby/$repoName" --public --confirm
}
catch {
    Write-Host "Repo might already exist, continuing..." -ForegroundColor Yellow
}

# 2. Clone the repo
$tempDir = "temp_$repoName"
if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }
Write-Host "Cloning $repoName..." -ForegroundColor Cyan
git clone "https://github.com/Erickuby/$repoName.git" $tempDir

# 3. Copy files
Write-Host "Copying documentation..." -ForegroundColor Cyan
Copy-Item $readmeFile "$tempDir\README.md"
if (Test-Path "CONTRIBUTING.md") {
    Copy-Item "CONTRIBUTING.md" "$tempDir\CONTRIBUTING.md"
}

# 4. Push changes
Push-Location $tempDir
git config user.name "Erickuby"
git config user.email "ericcnwankwo@gmail.com"

git add .
git commit -m "Initial commit: Add Meeting Cost Calculator documentation"
git push origin main

Pop-Location

# 5. Cleanup
Remove-Item -Recurse -Force $tempDir

Write-Host "DONE! $repoName setup complete!" -ForegroundColor Green
Write-Host "View at: https://github.com/Erickuby/$repoName" -ForegroundColor Yellow
