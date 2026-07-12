# Updating Games

This page explains how to manage game updates in ONENNABE — both through the **Game Auto Update** tool and the **UPDATE GAME** button in the Library tab.

---

## Why Game Updates Need to Be Managed

Steam automatically updates games by default. For most games this is fine, but for games with **Bypass** or **Hypervisor** patches, a Steam update will overwrite the patched files and break the game. ONENNABE lets you control which games update automatically and which ones stay locked.

---

## Method 1 — Game Auto Update (Tools)
<img width="1028" height="658" alt="Steam_Unlock_ONENNABE_lYHafeSLPl" src="https://github.com/user-attachments/assets/b6b9ff39-7fdb-4fd2-989c-1e27507b3aae" />

### How to Open

```
ONENNABE > Tools > Game Auto Update > click Open
```

This opens the **Game Auto Update** modal showing every unlocked game in your library with its current update setting.

### Update Settings

Each game can be set to one of two states:

| Setting | What It Means |
|---|---|
| **Auto Update** (green) | Steam will update the game automatically when a new version is available |
| **Locked** (red) | Steam will not update the game — it stays on its current version |

### Recommended Settings per Game Type

ONENNABE uses this logic to determine the correct setting for each game:

| Game Type | Recommended Setting | Reason |
|---|---|---|
| No special tags | ✅ Auto Update | Safe to update — no patches to protect |
| Denuvo Protected | ✅ Auto Update | Must stay updated for Denuvo to work |
| Bypass Available | 🔒 Lock | Updates will overwrite bypass files |
| Hypervisor Bypass | 🔒 Lock | Updates will overwrite HV patch files |

---

### ⚡ Smart Apply

**Smart Apply** automatically applies the correct setting to every game that is currently mismatched.

**How to use:**

1. Open **Tools** → **Game Auto Update** → **Open**
2. Click **⚡ Smart Apply**
3. ONENNABE scans all your games and compares their current setting against the recommended setting
4. Any mismatched games are corrected automatically
5. A summary shows how many games were corrected

!!! tip "Run Smart Apply before downloading any game"
    Always run Smart Apply before downloading a new Bypass or Hypervisor game to make sure the version gets locked correctly before Steam can update it.

!!! info "Already correctly set"
    If all games are already on the correct setting, Smart Apply will show **"All games are already correctly set. No changes needed."**

---

### Other Buttons in Game Auto Update

| Button | What It Does |
|---|---|
| **All On** | Sets every game to Auto Update |
| **All Off** | Sets every game to Locked |
| **Rescan** | Refreshes the game list from your lua folder |

!!! warning
    Use **All On** and **All Off** with caution — they override every game at once without checking game type. Use **⚡ Smart Apply** instead for the correct per-game setting.

---

## Method 2 — UPDATE GAME Button (Library Tab)
<img width="1050" height="735" alt="Steam_Unlock_ONENNABE_0IHVnpxhth" src="https://github.com/user-attachments/assets/e642151c-1771-41cf-8f9a-eb90a01f8b49" />

The **⬆ UPDATE GAME** button redownloads the game's manifest directly from the ONENNABE GitHub server. It does **not** update the game through Steam.

### When to Use UPDATE GAME

This button is used in specific situations — it is not for routine Steam game updates.

| Situation | Why UPDATE GAME Helps |
|---|---|
| **"No internet connection" error** in Steam | Redownloads the manifest to refresh Steam's connection to the game — this is a rare case |
| **"Content still encrypted" error** | The ONENNABE developer has pushed a fix to the server — UPDATE GAME pulls the latest version |
| **New DLC added** to the game | The developer has updated the `.lua` file with new DLC entries — UPDATE GAME pulls the updated file |

### Important — Game Returns to Locked Version

!!! warning "Game version will be reset to locked"
    After clicking **UPDATE GAME**, the game manifest is redownloaded from the server and the game version is **returned to its locked state**. This means:

    - The game may show as needing an update in Steam
    - You must run **⚡ Smart Apply** again after using UPDATE GAME to reapply the correct update settings

### Step-by-Step

1. Go to the **Library** tab in ONENNABE
2. Find the game and click **⬆ UPDATE GAME**
3. Wait for the manifest to finish downloading from the server
4. Once complete, go to **Tools** → **Game Auto Update** → **Open** → click **⚡ Smart Apply**
5. Launch the game as normal

---

## Summary

| Situation | What to Do |
|---|---|
| Setting up for the first time | Run **⚡ Smart Apply** in Tools → Game Auto Update |
| Before downloading a Bypass or HV game | Run **⚡ Smart Apply** to lock the version first |
| "No internet connection" error in Steam | Click **⬆ UPDATE GAME**, then run **⚡ Smart Apply** again |
| "Content still encrypted" error | Click **⬆ UPDATE GAME**, then run **⚡ Smart Apply** again |
| New DLC added to the game | Click **⬆ UPDATE GAME**, then run **⚡ Smart Apply** again |
| Want to manually control all games at once | Use **All On** or **All Off** in Game Auto Update |

---

## Still Not Working?

See the [Troubleshooting](troubleshooting.md) page for step-by-step fixes.
