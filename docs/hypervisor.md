# Hypervisor Guide

This guide covers everything you need to set up and run Hypervisor (HV) games through Steam Unlock ONENNABE.

---

## Prerequisites

### 1 — Disable Windows Hello

Windows Hello can interfere with the Hypervisor setup. Disable it before proceeding.

<iframe width="100%" height="400"
  src="https://www.youtube.com/embed/Vzm2YQDcsfw"
  frameborder="0" allowfullscreen>
</iframe>

---

### 2 — Download HV Tools

Download **HV Tools V3.4** — this tool checks your system and shows exactly what has been done and what still needs to be configured.

[Download HV Tools V3.4](https://github.com/barryhamsy/onennabe-docs/blob/main/HV%20Tools%20V3.4.exe){ .md-button }
<img width="256" height="500" alt="powershell_wpE4IcE3VI" src="https://github.com/user-attachments/assets/f6066806-a74d-4fcf-843a-e1356c100eef" />

---

### 3 — Enable Virtualization in BIOS

Virtualization must be enabled in your BIOS. Follow the video guide for your motherboard brand below.

!!! note "Additional BIOS settings"
    - **Secure Boot** — sometimes needs to be **turned off**
    - **Test Signing Mode** — sometimes needs to be **turned on**
    
    HV Tools will tell you which of these apply to your system.

Select your motherboard brand:

| Brand | Video Guide |
|---|---|
| MSI | [Watch Guide](https://www.youtube.com/watch?v=qKIcbKNI-g0) |
| Gigabyte | [Watch Guide](https://www.youtube.com/watch?v=fpHEbny3Mhs) |
| ASRock | [Watch Guide](https://www.youtube.com/watch?v=p0QeY9tyAbI) |
| ASUS | [Watch Guide](https://www.youtube.com/watch?v=bQDVvhtBeO4) |
| Dell | [Watch Guide](https://www.youtube.com/watch?v=n-C1hz42Qxw) |
| Lenovo | [Watch Guide](https://www.youtube.com/watch?v=EEDddQTq-QE) |

### Verify Virtualization is Enabled

After enabling in BIOS, confirm it is active:

1. Press `Ctrl + Shift + Esc` to open **Task Manager**
2. Click the **Performance** tab
3. Click **CPU**
4. Look for **Virtualization: Enabled** at the bottom right

---

### 4 — Lock Game Version in ONENNABE

Before downloading any game from Steam, you must lock the game version in ONENNABE first:

```
SUO > Tools > Game Auto Update > click Open > find the game
```

!!! info "Default state"
    By default, games are in **Lock** mode.  
    **Disable = Lock** | **Enable = Unlock**  
    Leave it as Lock (Disable) before downloading.

---

## Bypass Hypervisor Guide

Once prerequisites are complete, follow these steps to bypass:

### Step 1 — Turn Off Memory Integrity

1. Open **Windows Security**
2. Go to **Device Security** → **Core Isolation**
3. Turn off **Memory Integrity**

!!! note
    Memory Integrity is off by default on most systems. If it is already off, skip this step.

### Step 2 — Turn Off Antivirus

Disable **Real-time Protection** in Windows Defender (or your third-party antivirus) before downloading.

See [Installation](installation.md) for how to add exclusions so you don't need to turn it off every time.

### Step 3 — Download the Game from Steam

With the game version locked and antivirus off, download the game normally from Steam. Wait for it to fully complete.

### Step 4 — Apply Bypass

1. Open **Steam Unlock ONENNABE**
2. Go to the **Library** tab
3. Find the game
4. Click **Bypass Game**

---

## Launch Options

After bypass is applied, you have three ways to launch the game:

### Option 1 — Launch from ONENNABE (Recommended)

1. Open **Steam Unlock ONENNABE**
2. Go to the **Library** tab
3. Click the game → click **Play**
4. Choose the `.exe` file **or** choose `HV-PlugNPlay.bat` / `HV-Launcher.bat`

!!! warning "Windows 11 Only"
    `HV-PlugNPlay.bat` and `HV-Launcher.bat` only work on **Windows 11**.

### Option 2 — Launch Directly from File

Navigate to the game's install folder and run:

- `HV-PlugNPlay.bat`, or
- `HV-Launcher.bat`, or
- `[GAMENAME].exe`

### Option 3 — Launch from Steam (with HV Launch Option)

To launch from Steam directly, you must first inject the HV launch option via ONENNABE:

```
SUO > Tools > Inject HV Launch Option
```

After injecting, you can launch the game normally from Steam.

---

## Still Not Working?

See the [Troubleshooting](troubleshooting.md) page for step-by-step fixes.
