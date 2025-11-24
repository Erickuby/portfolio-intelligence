# PowerShell Script to Upload README Files to GitHub Repositories
$artifactsPath = "C:\Users\ericc\.gemini\antigravity\brain\d5f0469e-9b35-4485-9d17-c666a78eb49c"

Write-Host "Starting README upload to GitHub repositories..." -ForegroundColor Green
Write-Host ""

# Navigate to artifacts directory
Set-Location $artifactsPath

# Repository mappings
$repos = @(
    @{Name = "portfolio-monte-carlo"; ReadmeFile = "README_MonteCarlo.md" },
    @{Name = "portfolio-burn-rate"; ReadmeFile = "README_BurnRate.md" },
    @{Name = "portfolio-risk-matrix"; ReadmeFile = "README_RiskMatrix.md" },
    @{Name = "portfolio-evm-calculator"; ReadmeFile = "README_EVM.md" },
    @{Name = "portfolio-pert-estimator"; ReadmeFile = "README_PERT.md" }
)

foreach ($repo in $repos) {
    Write-Host "Uploading to $($repo.Name)..." -ForegroundColor Cyan
    
    # Clone the repo temporarily
    $tempDir = "temp_$($repo.Name)"
    if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }
    git clone "https://github.com/Erickuby/$($repo.Name).git" $tempDir
    
    # Copy README and CONTRIBUTING files
    Copy-Item $repo.ReadmeFile "$tempDir\README.md"
    Copy-Item "CONTRIBUTING.md" "$tempDir\CONTRIBUTING.md"
    
    # Navigate to repo
    Push-Location $tempDir
    
    # Configure git user
    git config user.name "Erickuby"
    git config user.email "ericcnwankwo@gmail.com"
    
    # Add, commit, and push
    git add README.md CONTRIBUTING.md
    git commit -m "Add comprehensive README and contributing guidelines"
    git push origin main
    
    # Go back
    Pop-Location
    
    # Clean up
    Remove-Item -Recurse -Force $tempDir
    
    Write-Host "[DONE] $($repo.Name) completed!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "All README files uploaded successfully!" -ForegroundColor Green
Write-Host "Visit your repositories to see the results:" -ForegroundColor Yellow
Write-Host "  - https://github.com/Erickuby/portfolio-monte-carlo"
Write-Host "  - https://github.com/Erickuby/portfolio-burn-rate"
Write-Host "  - https://github.com/Erickuby/portfolio-risk-matrix"
Write-Host "  - https://github.com/Erickuby/portfolio-evm-calculator"
Write-Host "  - https://github.com/Erickuby/portfolio-pert-estimator"
