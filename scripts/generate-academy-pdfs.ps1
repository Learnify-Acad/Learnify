# Generate Learnify Academy PDF catalogs
$base = "e:/Learnify/Learnify%20Competetion"
$downloads = Join-Path $PSScriptRoot "..\downloads" | Resolve-Path
$chromePaths = @(
    "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)
$browser = $chromePaths | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "Chrome or Edge required for PDF generation." }

$pages = @{
    "academy-brochure.pdf"         = "$base/academy/brochure.html"
    "academy-courses-catalog.pdf"  = "$base/academy/portal.html?export=pdf"
    "academy-camps-catalog.pdf"    = "$base/academy/portal.html?export=pdf"
    "academy-age-guide.pdf"        = "$base/academy/portal.html?export=pdf"
}

foreach ($entry in $pages.GetEnumerator()) {
    $out = Join-Path $downloads $entry.Key
    $url = "file:///$($entry.Value)"
    Remove-Item $out -ErrorAction SilentlyContinue
    & $browser --headless=new --disable-gpu --no-pdf-header-footer `
        --run-all-compositor-stages-before-draw --virtual-time-budget=20000 `
        --print-to-pdf="$out" $url | Out-Null
    Start-Sleep -Seconds 3
    if (Test-Path $out) { Write-Host "Generated: $out ($((Get-Item $out).Length) bytes)" }
    else { Write-Host "FAILED: $($entry.Key)" }
}
