# Tools

The Tools section in ONENNABE provides utilities to manage your games, fix Steam issues, and maintain your setup. Access it by clicking **Tools** in the top navigation bar.

---

## 🔄 Game Auto Update
<img width="1156" height="573" alt="image" src="https://github.com/user-attachments/assets/67b806d7-91c8-476e-b531-f2c2ab42e4dd" />

Manages the auto-update setting per game in Steam.

- **Enable (Auto Update)** — Steam will automatically update the game when a new version is available
- **Lock** — pins the game to its current version and prevents Steam from updating it

### Smart Apply
<img width="607" height="187" alt="image" src="https://github.com/user-attachments/assets/057a3974-2afa-488b-a6fc-d5c479d2df0f" />

Click **Smart Apply** inside Game Auto Update to automatically apply the recommended setting to all your games at once:

| Game Type | Recommended Setting |
|---|---|
| Denuvo Protected | Auto Update |
| No special tags | Auto Update |
| Hypervisor Bypass | Lock |
| Bypass Available | Lock |

!!! tip
    Always run Smart Apply before downloading a Bypass, Online Patch, or Hypervisor game to make sure the version is locked correctly.

---

## 🧹 Clear Steam Download Cache
<img width="647" height="173" alt="image" src="https://github.com/user-attachments/assets/58df57a9-a5a0-414c-a6d6-221f20409dac" />

Clears Steam's download cache and temporary files, then restarts Steam automatically.

**Use this when:**
- Downloads are corrupted or failing
- Steam is stuck in an update loop
- Patching is unusually slow
- Re deploy Steam Unlock unlocker files
  
---

## 🩹 Fix Unlock Game Issue
<img width="640" height="238" alt="image" src="https://github.com/user-attachments/assets/d879a4fc-340b-421f-96ad-3f87f0ec1135" />

Clears Steam's `config` folder to fix games that won't unlock or throw config errors. This is an attempt to fix unlocking game issue

**What is kept:**
- `avatarcache`
- `depotcache`
- `stplug-in` (your unlocked games)

Steam closes and restarts automatically after the fix.

!!! warning "You will need to sign in to Steam again"
    Your unlocked games are safe, but your Steam login session will be cleared.

---

## 🔄 Reinstall Steam
<img width="641" height="236" alt="image" src="https://github.com/user-attachments/assets/ac7c25af-8016-420e-80b2-3f75ee4ff2c1" />

Downloads a fresh Steam installer and performs a **clean reinstall** of Steam.
This mostly fix issue game is not being unlock despite already clicking unlock game
You will have to restart Steam Unlock too after reinstalling fresh Steam.

**What is kept:**
- Your unlocked games (`stplug-in`)
- Your installed games (`steamapps`)

**What is deleted:**
- Steam login session
- `userdata/` folder
- All other Steam configuration files

The unlock hook is re-deployed automatically after the reinstall.

!!! danger "You will need to sign in to Steam again"
    Have your Steam username and password ready before running this. Everything except your games and unlocks will be wiped.

---

## 💉 Inject HV Launch Options

Scans your Steam library folders for `HV-PlugNPlay.bat` and automatically injects it into the game's Steam Launch Options.
<img width="646" height="193" alt="image" src="https://github.com/user-attachments/assets/7db95fd8-e2bc-43f3-84d7-2bff415054a5" />

**Use this when:**
- You want to launch a Hypervisor game directly from Steam
- The HV launch option is missing from the game in Steam

!!! warning "Windows 11 Only"
    `HV-PlugNPlay.bat` only works on Windows 11. Steam will close and restart to apply the changes.

An **Injector Terminal** will appear showing the injection progress and results.

---

## 🛡️ Clear Denuvo Token (Error 88500012)
<img width="639" height="236" alt="image" src="https://github.com/user-attachments/assets/fafac314-406e-4b24-82f0-a593a135564d" />

Fixes the Denuvo activation error **88500012** for a specific game.

**What it does:**
1. Closes Steam
2. Deletes the AppID's `userdata` token and OpenSteamTool owner key
3. Restarts Steam and re-applies the fix

**How to use:**
1. Enter the game's **AppID** in the input box (e.g. `1245620`)
2. Click **Clear Token**

!!! tip "Finding a game's AppID"
    The AppID is in the game's Steam store URL: `store.steampowered.com/app/**1245620**/Game_Name/`

---

## ☁️ CloudRedirect Launcher

A third-party tool (not made by ONENNABE) that provides extra features for managing games and saves.

**Features:**
- **One Click Run Patch** — auto-sets up all necessary patches
- **Cloud saves** — uses your Google account as the cloud save location
- **CAPCOM game save fixes**
- **Offline play** — the Play button stays active even without internet. Do **not** use Steam's built-in Go Offline mode, or you will need to use Fix Steam Stuck at Loading
- **Lock game version** via Manifest Pinning
- **Backup achievements, playtime and unlocked games** to Google — sign in to the same Google account on another PC to sync everything back

!!! note "Third-party tool"
    CloudRedirect is not affiliated with ONENNABE. Download and launch it from within the Tools section.
Full tutorial at [CloudRedirect](cloudredirect.md)

---

## 🗑️ Delete Standalone Cache
<img width="632" height="174" alt="image" src="https://github.com/user-attachments/assets/fabf3942-8ff9-4fa9-a259-2d4e61015ddb" />

Removes the entire `Steam\depot_key\` folder, which contains all stored depot keys and bypass files.

!!! warning
    After deleting, games will need to be re-processed before they can be downloaded again. Only use this if instructed to by support or if you are doing a clean reset.

---

## 🖼️ Fix Blank Steam Icons
<img width="629" height="264" alt="image" src="https://github.com/user-attachments/assets/5c3be2bb-15ca-483a-bbac-896be8d50c79" />

Scans every installed game that has a Desktop shortcut and repairs its icon.

**What it does:**
1. Downloads the correct icon from Steam CDN (with SteamGridDB as fallback)
2. Saves it to `Steam\steam\games\`
3. Repoints the Desktop shortcut to the correct icon

!!! note
    Games without a Desktop shortcut are skipped. Based on [SteamIconFix](https://github.com/ez4y2f/SteamIconFix) — not affiliated with ONENNABE.

---

## 🧹 Clear SUO Cache
<img width="593" height="144" alt="image" src="https://github.com/user-attachments/assets/bc019083-7ebd-4958-951a-1940495ff789" />

Wipes ONENNABE's cached app data — thumbnails, store cache, and temporary files.

**Your licence is kept.** The app reloads automatically after clearing.

**Use this when:**
- Game covers or thumbnails are not loading correctly
- The store is showing outdated or incorrect data

---

## 🗑️ Remove All Games
<img width="640" height="177" alt="image" src="https://github.com/user-attachments/assets/c32db180-eec0-42f4-b2e1-ee06eafdd741" />

!!! danger "Destructive — Cannot Be Undone"
    Deletes every unlocked game from your Steam library. You will need to re-add games afterward. Your Steam installation is not affected.

Use this only if you want to completely reset your unlocked game list. Your ONENNABE licence and installed game files are not affected.
