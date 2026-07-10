# Unlocking Games & Library Tab

This page covers how to unlock a game in ONENNABE and how to navigate the Library tab, including the right-click context menu.

---
## Unlocking a Game
<img width="847" height="545" alt="Steam_Unlock_ONENNABE_AIEuuuGaFG-ezgif com-resize" src="https://github.com/user-attachments/assets/8de56d52-5069-4d65-a22b-8acdfb216165" />

### Step 1 — Find the Game in the Store Tab

1. Open **Steam Unlock ONENNABE**
2. Go to the **Store** tab
3. Browse or use the search bar to find the game you want
4. Click the game card to open the Game Detail modal

### Step 2 — Unlock the Game

Inside the Game Detail modal:

1. Click **Unlock Game**
2. ONENNABE will apply the unlock to your Steam account
3. The game will now appear in your Steam library

### Step 3 — Lock the Game Version (Before Downloading)
<img width="1498" height="1179" alt="Steam_Unlock_ONENNABE_9Kdby9E2cH" src="https://github.com/user-attachments/assets/92fbb3fb-b36e-4313-8a53-c2166e9286fd" />

Before downloading in Steam, lock the game version to prevent Steam from auto-updating it to an incompatible version:

```
SUO > Tools > Game Auto Update > click Open > Smart Apply
```

!!! info "Default state"
    By default, games are already in **Lock** mode.  
    **Disable = Lock** | **Enable = Unlock**  
    Always keep it on Lock (Disable) before downloading.

### Step 4 — Download from Steam

1. Open **Steam**
2. Find the game in your library
3. Click **Install** and wait for it to fully download

---
<img width="459" height="298" alt="Steam_Unlock_ONENNABE_6CfTkpFHTs" src="https://github.com/user-attachments/assets/27b6f039-cb49-48f8-bdfd-f724daf45470" />

## ⚠ 32-Hour Cooldown
 
!!! warning "Applies to Denuvo, Hypervisor, Online Patch & Bypass Games Only"
    Games that fall under **Denuvo**, **Hypervisor**, **Online Patch**, or **Bypass** categories are locked behind a **32-hour waiting period** after purchase before you can access and play them.
 
    - The 32-hour lock starts from the moment CDKEY activation
    - You will not be able to unlock these games until the 32 hours have passed
    - This is by design and cannot be bypassed or shortened
 
!!! info "Regular games are not affected"
    Games that do not require Denuvo, Hypervisor, Online Patch, or Bypass can be unlocked and played without any cooldown restriction.

---

## Navigating the Library Tab

The Library tab shows all games that have been unlocked and downloaded on your PC.

### Layout
<img width="1704" height="1038" alt="image" src="https://github.com/user-attachments/assets/86ce5cf0-7d82-4493-abc3-8d87f971efe0" />

- **Left sidebar** — lists all your unlocked games, searchable by name
- **Right panel** — shows the selected game's details, cover art, and action buttons

### Finding a Game

Use the **search box** at the top of the left sidebar to filter by name. Click any game to load its detail panel on the right.
<img width="382" height="130" alt="image" src="https://github.com/user-attachments/assets/fa73ea6e-2485-40d0-b742-35908a815e7f" />

---

## Right-Click Context Menu
<img width="506" height="349" alt="image" src="https://github.com/user-attachments/assets/62f35798-0fdc-4362-ac2f-4eb346b8aef0" />

Right-clicking a game in the **Steam Library** opens Steam's context menu with these options:

---

### ▶ Play
<img width="282" height="58" alt="image" src="https://github.com/user-attachments/assets/4fadeee6-4e1a-4f34-91ed-b6911f455832" />

Launches the game directly. This is the standard way to start a game from Steam.

---

### Add to Favorites
<img width="274" height="52" alt="image" src="https://github.com/user-attachments/assets/156749c5-909e-4858-8e76-fff16909f7b0" />

Marks the game as a favourite in your Steam library for quick access.

---

### Browse Local Files
<img width="273" height="50" alt="image" src="https://github.com/user-attachments/assets/e982a442-abee-452b-b175-1a4bf1d6d4d2" />

Opens the game's installation folder in Windows Explorer. Useful for:

- Manually running `.bat` or `.exe` files (e.g. `HV-PlugNPlay.bat`, `HV-Launcher.bat`)
- Checking if bypass or patch files are present
- Troubleshooting missing files

---

### Verify Integrity of Game Files
<img width="282" height="56" alt="image" src="https://github.com/user-attachments/assets/5515d47a-b1c3-4cd2-83e3-8cb160d06db5" />

Steam checks all game files and re-downloads any that are missing or corrupted.

!!! warning
    Do **not** use Verify Integrity after applying a bypass or online patch. Steam will detect the patched files as modified and replace them with the original versions, removing your patch. You will need to re-apply the patch afterwards.

---

### Uninstall
<img width="281" height="61" alt="image" src="https://github.com/user-attachments/assets/b062f6b6-7849-4adc-8fed-4c6a87a7fa5d" />

Uninstalls the game from your PC. The game will remain in your Steam library and can be re-downloaded at any time.

!!! note
    Uninstalling does not remove the game from ONENNABE. Your unlock is still active — just re-download and re-apply the patch if needed.

---

## Still Not Working?

See the [Troubleshooting](troubleshooting.md) page for step-by-step fixes.
