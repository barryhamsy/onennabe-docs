# Library Tab

The Library tab shows all games that have been unlocked on your Steam account via ONENNABE.

---

## Layout

<img width="1704" height="1038" alt="image" src="https://github.com/user-attachments/assets/86ce5cf0-7d82-4493-abc3-8d87f971efe0" />

- **Left sidebar** — lists all your unlocked games, searchable by name
- **Right panel** — shows the selected game's details, cover art, and action buttons

---

## Finding a Game

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

## Secondary Action Buttons

When you select a game in the Library tab, a secondary action bar appears below the main Play button. These buttons provide additional tools for managing the game's patches and DRM.

!!! info "Visibility rules"
    **Patch Standalone**, **Steamless**, and **Restore Original** are hidden for games that use Bypass, Online Patch, or Hypervisor methods — those games use their own patching system and do not need these tools.

---

### 🗑️ Remove Hypervisor Patch

Appears on games that have a **Hypervisor Bypass** or **Bypass** applied.

**What it does:**
- Removes all Hypervisor bypass files from the game folder
- Triggers Steam to validate and restore the original game files

**When to use:**
- You want to revert the game back to its original unpatched state
- The Hypervisor patch is causing issues and you want a clean slate before re-applying

!!! warning
    After removing the Hypervisor patch, you will need to re-apply it from the Library tab before the game will work again. See [Hypervisor Games](hypervisor.md) for how to re-apply.

---

### 🩹 Patch Standalone / 🗑️ Remove Patch Standalone

This button toggles based on whether the standalone patch (`onennabe_launcher.exe`) is currently installed in the game folder.

| State | Button Shown | What It Does |
|---|---|---|
| Not installed | **🩹 Patch Standalone** | Installs the standalone launcher into the game folder |
| Already installed | **🗑️ Remove Patch Standalone** | Removes the standalone launcher from the game folder |

**When to use Patch Standalone:**
- The game needs a standalone launcher to run outside of Steam, this allows game to run without steam at all, but this doesn't work with all games.
- You are setting up a game that requires the cold client method

**When to use Remove Patch Standalone:**
- You want to revert the game to its original state
- The standalone patch is causing launch issues

!!! note
    Patch Standalone and Remove Patch Standalone are hidden for games that use Bypass, Online Patch, or Hypervisor — those methods do not use the standalone launcher.

---

### 🛡 Steamless [Remove Steam DRM]

Runs **Steamless** — a tool that strips Steam DRM from the game's executable files. This allows the game executable to run without Steam's DRM layer.

**What it does:**
- Scans the game folder for DRM-protected executables
- Replaces them with unpacked, DRM-free versions
- The original files are backed up with a `.BAK` extension

**When to use:**
- A game fails to launch and DRM is suspected as the cause, this usually solve error 54 and error 6005432. Unfortunately this doesn't work with all games, especially games with Enigma Protector.
- You need to run the game executable directly without Steam

!!! warning
    Only use Steamless if you know the game needs it. Running it on games that don't need it may cause launch issues.

---

### ↩️ Restore Original [Undo Steamless]

Reverts the Steamless operation by restoring the original `.BAK` backup files.

**What it does:**
- Deletes the Steamless-unpacked executable
- Restores the original game executable from the `.BAK` backup

**When to use:**
- Steamless caused the game to break or not launch correctly
- You want to go back to the original DRM-protected executable

!!! note
    This button only works if a `.BAK` backup file exists — meaning Steamless was previously run on the game. If no backup exists, this button will have no effect.

---

## Removing Games from the Library

See [Removing Games from the Library](library-remove-games.md) for how to use the checkbox selector and 🗑️ trash button to remove one or more games from your library.

---

## Still Not Working?

See the [Troubleshooting](troubleshooting.md) page for step-by-step fixes.
