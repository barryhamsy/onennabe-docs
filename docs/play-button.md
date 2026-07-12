# Using the PLAY Button

The **▶ PLAY** button in the Library tab is the main way to launch your games. Clicking it opens a small dropdown menu with three options depending on how the game was installed.

---

## How to Open the Play Menu
<img width="1045" height="750" alt="chrome_XO5NAAm7GF" src="https://github.com/user-attachments/assets/b7e334d3-51c3-4293-9614-a360b58bc42a" />

1. Go to the **Library** tab in ONENNABE
2. Click a game in the left sidebar to open its detail panel
3. Click the **▶ PLAY** button
4. A dropdown menu appears with your launch options

---

## The 3 Play Options

### ▶ Play from Steam
<img width="976" height="692" alt="Steam_Unlock_ONENNABE_ZhxI88ZuBK" src="https://github.com/user-attachments/assets/b2e919d3-eaac-4b94-939c-d4efe40eb3b4" />

Launches the game directly through Steam — the same as clicking Play in Steam itself.

**When to use:**
- Standard games with no bypass or patch
- Denuvo games (after completing the account borrow step)
- Any game where you have already applied the necessary patches

---

### 📁 Choose .exe or .bat
<img width="1023" height="516" alt="Steam_Unlock_ONENNABE_2aazJyrpo1" src="https://github.com/user-attachments/assets/01fb2c3c-b661-46c4-b306-5ce44ab55470" />

Opens a file picker so you can select the exact executable or batch file to launch.

**When to use:**
- Hypervisor games — select `HV-PlugNPlay.bat` or `HV-Launcher.bat`
- Games with multiple launch executables where you need to pick a specific one
- Bypass or Online Patch games where a specific launcher is required

!!! warning "Windows 11 Only"
    `HV-PlugNPlay.bat` and `HV-Launcher.bat` only work on **Windows 11**. These files will not work on Windows 10.

**How to use:**
1. Click **▶ PLAY**
2. Select **📁 Choose .exe or .bat**
3. A Windows file browser opens in the game's installation folder
4. Select the correct file:
    - `HV-PlugNPlay.bat` or `HV-Launcher.bat` — for Hypervisor games
    - `[GameName].exe` — for games that need to be launched directly
5. Click **Open** — the game will launch

---

### 🗑 Uninstall Game
<img width="873" height="450" alt="Steam_Unlock_ONENNABE_gWLwENkKiQ" src="https://github.com/user-attachments/assets/fabd4fa7-577d-41dc-a491-8ebe58176453" />

Opens Steam's native uninstall dialog for the game.

**What it does:**
- Triggers Steam to uninstall the game files from your PC
- Your unlock in ONENNABE remains active — you can re-download the game at any time
- The game stays in your Steam library after uninstalling

!!! note
    If the game was installed via **Download Standalone** instead of Steam, this option will show as **🗑 Uninstall Download** instead, which permanently deletes the game folder and JSON file directly.

---

## Button States

The PLAY button changes depending on the game's current status:

| Button Label | What It Means |
|---|---|
| **▶ PLAY** | Game is installed and ready to launch |
| **↓ INSTALL** | Game is not yet downloaded — click to start installing via Steam |
| **INSTALLING… X%** | Game is currently downloading in Steam — wait for it to finish |
| **LOADING…** | ONENNABE is checking the game's install status |

---

## Still Not Working?

See the [Troubleshooting](troubleshooting.md) page for step-by-step fixes.
