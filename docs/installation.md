# Installation Guide

Complete this page **top to bottom** before launching ONENNABE for the first time.

---

## Step 1 — Prepare Windows Security

ONENNABE modifies Steam configuration files to unlock games. Windows and antivirus programs treat this as suspicious (false positive). You must configure security settings **before** installing, or the app files will be deleted.

### 1A — Turn Off Smart App Control (Windows 11 only)

[Shortcut: Open Windows Defender Settings](ms-settings:windowsdefender){.gaming-btn-blue}  
_Note: Click "Allow" or "Open Settings" if your browser prompts you._

1. Open **Settings** → **Privacy & Security** → **Windows Security**
2. Click **App & Browser Control**
3. Click **Smart App Control settings**
4. Set to **Off**

!!! warning
    If Smart App Control is set to **On** or **Evaluating**, ONENNABE will be blocked. There is no workaround other than turning it off.

### 1B — Add Windows Defender Exclusions

[Shortcut: Launch Windows Security App](windowssecurity:){.gaming-btn-pink}  
_Note: Click "Allow" or "Open Windows Security" if your browser prompts you._

1. Open **Settings** → **Privacy & Security** → **Windows Security**
2. Click **Virus & threat protection**
3. Click **Manage settings** (under Virus & threat protection settings)
4. Scroll to **Exclusions** → click **Add or remove exclusions**
5. Click **Add an exclusion** → **Folder** — add all three:

```
C:\Program Files\Steam
C:\Program Files (x86)\Steam
C:\Program Files\Steam Unlock ONENNABE
```

!!! note "Third-party antivirus"
    If you use Avast, Kaspersky, Norton, Bitdefender, or any other antivirus, you must add the same folder exclusions inside that antivirus app as well.

---

## Step 2 — Install Steam

If Steam is not already installed:

1. Download Steam from [store.steampowered.com](https://store.steampowered.com)
2. Install and log in to your personal Steam account
3. Keep Steam **running** — ONENNABE requires an active Steam session

---

## Step 3 — Install ONENNABE

1. Download the **ONENNABE installer** from the link your seller provided
2. Right-click the file → **Run as Administrator**
3. If Windows SmartScreen shows a blue popup saying **"Windows protected your PC"**:
    - Click **"More info"**
    - Click **"Run anyway"**
4. Follow the on-screen installer prompts
5. Do **not** change the default installation path
6. Launch ONENNABE from the desktop shortcut when done

!!! info "Default installation path"
    `C:\Program Files\Steam Unlock ONENNABE\`

---

## Step 4 — Activate Your CD Key

See [CD Key Activation](cd-key-activation.md) to complete setup.

---

## Installation Order Summary

```
① Windows security setup (exclusions + Smart App Control off)
② Install Steam + log in
③ Install ONENNABE
④ Activate CD Key
```

---

## Common Installation Issues

**Installer gets deleted after download**  
Your antivirus removed it. Complete Step 1B first, then re-download.

**"Windows protected your PC" blue popup**  
Click "More info" → "Run anyway". This is a SmartScreen false positive.

**App won't open after install**  
Right-click the shortcut → Run as Administrator. Also make sure Steam is running.

**Black screen / WebView2 error on launch**  
Install [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) — this powers the app interface.
