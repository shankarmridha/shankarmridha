# Logo Downloader for Shankar Mridha Website
# Run: cd D:\Websites\shankarmridha && .\download-logos.ps1

$logoDir = "D:\Websites\shankarmridha\public\logos"
New-Item -ItemType Directory -Force -Path $logoDir | Out-Null

$logos = @(
    @{ name="bajaj-finserv";      urls=@("https://upload.wikimedia.org/wikipedia/commons/3/3b/Bajaj_Finserv_Logo.svg","https://companieslogo.com/img/orig/BAJAJFINSV.NS-6f57f0c4.png") },
    @{ name="rbi";                urls=@("https://upload.wikimedia.org/wikipedia/commons/3/32/Reserve_Bank_of_India_logo.svg","https://rbidocs.rbi.org.in/rdocs/content/images/logo.png") },
    @{ name="mufg";               urls=@("https://upload.wikimedia.org/wikipedia/commons/5/5a/MUFG_logo.svg","https://www.mufg.jp/imgs/english/assets/img/header/logo.png") },
    @{ name="principal";          urls=@("https://upload.wikimedia.org/wikipedia/commons/5/57/Principal_Financial_Group_logo.svg","https://companieslogo.com/img/orig/PFG-95ef8e8f.png") },
    @{ name="sud-life";           urls=@("https://www.sudlife.in/resources/images/logo/sud-life-logo.png","https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/SUD_Life_Logo.png/200px-SUD_Life_Logo.png") },
    @{ name="oaknorth";           urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/OakNorth_Bank_logo.png/200px-OakNorth_Bank_logo.png","https://www.oaknorth.com/wp-content/themes/oaknorth/images/logo.svg") },
    @{ name="ifsca";              urls=@("https://ifsca.gov.in/Uploads/images/Logo-IFSCA.png","https://upload.wikimedia.org/wikipedia/en/thumb/8/83/IFSCA_logo.png/200px-IFSCA_logo.png") },
    @{ name="jsw-mg-motor";       urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MG_Motor_logo.svg/320px-MG_Motor_logo.svg.png","https://www.mgmotor.co.in/images/mg-logo.png") },
    @{ name="uno-minda";          urls=@("https://www.unominda.com/wp-content/uploads/2021/03/UNO-MINDA-LOGO.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Minda_Industries_Logo.png/200px-Minda_Industries_Logo.png") },
    @{ name="wirtgen";            urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wirtgen_Logo.png/200px-Wirtgen_Logo.png","https://www.wirtgen-group.com/media/wirtgen_group_logo.svg") },
    @{ name="shell";              urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Shell_logo.svg/200px-Shell_logo.svg.png","https://companieslogo.com/img/orig/SHEL-c82f6f2a.png") },
    @{ name="iocl";               urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/IOCL-Logo.svg/200px-IOCL-Logo.svg.png","https://www.iocl.com/images/logo.png") },
    @{ name="nestle";             urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nestle.svg/320px-Nestle.svg.png","https://companieslogo.com/img/orig/NESN.SW-b0e8caa8.png") },
    @{ name="rspl";               urls=@("https://www.rspl.co.in/images/rspl-logo.png","https://rspl.net.in/images/logo.png") },
    @{ name="cosmo-first";        urls=@("https://www.cosmofirst.com/wp-content/uploads/2021/08/cosmo-first-logo.png","https://companieslogo.com/img/orig/COSMOFIRST.NS.png") },
    @{ name="glenmark";           urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Glenmark_Pharmaceuticals_logo.png/320px-Glenmark_Pharmaceuticals_logo.png","https://www.glenmarkpharma.com/sites/default/files/glenmark-logo.png") },
    @{ name="sanofi";             urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sanofi_logo.svg/320px-Sanofi_logo.svg.png","https://companieslogo.com/img/orig/SNY-68a1d7e7.png") },
    @{ name="indofil";            urls=@("https://www.indofil.com/images/indofil-logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Indofil_Industries_logo.png/200px-Indofil_Industries_logo.png") },
    @{ name="abb";                urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/320px-ABB_logo.svg.png","https://companieslogo.com/img/orig/ABB.ST-e9e10b7d.png") },
    @{ name="atlas-copco";        urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Atlas_Copco_Group_logo.svg/320px-Atlas_Copco_Group_logo.svg.png","https://companieslogo.com/img/orig/ATCO-A.ST.png") },
    @{ name="usha-international"; urls=@("https://www.usha.com/images/usha-logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Usha_International_Logo.png/200px-Usha_International_Logo.png") },
    @{ name="toro";               urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/The_Toro_Company_logo.svg/320px-The_Toro_Company_logo.svg.png","https://companieslogo.com/img/orig/TTC-45d2b2f5.png") },
    @{ name="kpmg";               urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_blue_logo.svg/320px-KPMG_blue_logo.svg.png","https://companieslogo.com/img/orig/KPMG.png") },
    @{ name="pwc";                urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/320px-PricewaterhouseCoopers_Logo.svg.png","https://companieslogo.com/img/orig/PwC.png") },
    @{ name="omnicom";            urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Omnicom_Logo.svg/320px-Omnicom_Logo.svg.png","https://companieslogo.com/img/orig/OMC-8427e5a5.png") },
    @{ name="affle";              urls=@("https://www.affle.com/wp-content/uploads/2020/04/affle-logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Affle_India_logo.png/200px-Affle_India_logo.png") },
    @{ name="indigene";           urls=@("https://www.indigene.com/wp-content/uploads/2019/03/indigene-logo.png","https://indigene.com/images/logo.png") },
    @{ name="k-raheja";           urls=@("https://www.krahejagroup.com/images/logo.png","https://krahejagroup.com/wp-content/uploads/2019/09/K-Raheja-Corp-logo.png") },
    @{ name="lexicon-mile";       urls=@("https://www.lexiconmile.edu.in/images/lexicon-logo.png","https://lexiconmile.edu.in/wp-content/uploads/2020/01/Lexicon-MILE-Logo.png") },
    @{ name="symbiosis";          urls=@("https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Symbiosis_International_University_logo.png/200px-Symbiosis_International_University_logo.png","https://www.siu.edu.in/images/siu-logo.png") },
    @{ name="mit-pune";           urls=@("https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/MIT_group_institutions_logo.png/200px-MIT_group_institutions_logo.png","https://www.mitpune.edu.in/images/mit-logo.png") },
    @{ name="netherlands-embassy";urls=@("https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/200px-Flag_of_the_Netherlands.svg.png") }
)

$headers = @{
    "User-Agent"      = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    "Accept"          = "image/webp,image/apng,image/*,*/*;q=0.8"
    "Accept-Language" = "en-US,en;q=0.9"
    "Referer"         = "https://www.google.com/"
}

$ok   = 0
$fail = 0

foreach ($logo in $logos) {
    $dest = Join-Path $logoDir "$($logo.name).png"

    if (Test-Path $dest) {
        $existing = (Get-Item $dest).Length
        if ($existing -gt 1000) {
            Write-Host "SKIP $($logo.name) (already $existing bytes)" -ForegroundColor DarkGray
            $ok++
            continue
        }
    }

    $downloaded = $false
    foreach ($url in $logo.urls) {
        try {
            $tmp = "$dest.tmp"
            Invoke-WebRequest -Uri $url -Headers $headers -OutFile $tmp -TimeoutSec 15 -ErrorAction Stop
            $size = (Get-Item $tmp).Length
            if ($size -gt 500) {
                Move-Item -Path $tmp -Destination $dest -Force
                Write-Host "OK   $($logo.name) ($size bytes)" -ForegroundColor Green
                $ok++
                $downloaded = $true
                break
            } else {
                Remove-Item $tmp -ErrorAction SilentlyContinue
                Write-Host "     $($logo.name) too small ($size bytes), trying next..." -ForegroundColor DarkYellow
            }
        } catch {
            $msg = $_.Exception.Message -replace "`n","" -replace "`r",""
            Write-Host "     $($logo.name): $msg" -ForegroundColor DarkYellow
        }
    }

    if (-not $downloaded) {
        Write-Host "FAIL $($logo.name) - all sources failed" -ForegroundColor Red
        $fail++
    }
}

Write-Host ""
Write-Host "---------------------------------------------"
Write-Host "Done. $ok OK, $fail failed." -ForegroundColor Cyan
Write-Host "Logos saved to: $logoDir"
Write-Host "For failed logos, save PNG files manually to that folder."
Write-Host "---------------------------------------------"
