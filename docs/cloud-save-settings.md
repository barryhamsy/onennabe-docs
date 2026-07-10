# Cloud Save Settings


Steam Unlock ONENNABE has a built-in Cloud Save system that backs up your game list, achievements, and save files to **Google Drive**.

Access it by clicking **☁️ Cloud Save Settings** in the top navigation bar.

!!! warning "ONENNABE must be running"
    Steam Unlock ONENNABE must be **open and running** at all times for cloud saves to work. Auto-backup on startup, push, and pull all require the app to be active.

---
<img width="955" height="1034" alt="image" src="https://github.com/user-attachments/assets/27083a74-afc4-47df-9850-58bf2186da4a" />
## Setting Up — Connect Google Drive

Before using any cloud save features, you must connect your Google Drive account.

1. Click **☁️ Cloud Save Settings** in the top navbar
2. Click **☁️ Connect Google Drive**
3. A browser window will open asking you to sign in to Google and grant permission
4. Complete the sign-in in the browser
5. The status will change to **Connected** (green dot) once done

To disconnect, click **Disconnect Google Drive**. Your files on Drive are kept — only the sync connection is removed.

---

## Section 1 — Cloud Sync (Game List Backup)

Backs up your **unlocked game list** to Google Drive so you can restore it on another PC or after a reinstall.

### Auto-backup Game List

Toggle **ON** to automatically back up your game list to Google Drive every time ONENNABE starts.

### Backup Now

Manually triggers an immediate upload of your current game list to Google Drive.

### Restore from Drive (Merge)

Downloads your backed-up game list from Google Drive and **merges** it with your current list — games already on this PC are kept, and any missing games from Drive are added back.

### Replace All

Fully replaces your current game list with the one stored on Google Drive. Use this when setting up on a new PC and you want an exact copy of your previous setup.

!!! note
    **Last backup** and **Last restore** timestamps are shown below the buttons so you always know when your list was last synced.

---

## Section 2 — Save Games Backup

Backs up your actual **game save files** to Google Drive. This works for:

- Standard Steam save games
- **Online Fix** save games (games using onlinefix patches)
- **Cracked game** save files

!!! info "Supported save locations"
    ONENNABE scans known save file locations per game AppID. Not all games store saves in detectable locations — if a game's saves are not found, they will be marked as skipped during backup.

### Auto-backup Save Games

Toggle **ON** to automatically back up all detected save files to Google Drive every time ONENNABE starts.

### Backup Now (Force Backup)

Manually triggers an immediate backup of all save files for every installed game. A progress log window will appear showing:

- ✅ **Pushed** — save files successfully uploaded to Google Drive
- ⏭ **Skipped** — save files already up to date on Drive, no changes detected
- ❌ **Errors** — save files that could not be uploaded

### Restore Save Games from Drive

Downloads your backed-up save files from Google Drive for every installed game on this PC.

- **Newer local saves are always kept** — only older files are overwritten with the Drive copy
- **Close any running games** before restoring to avoid file conflicts

!!! tip "Switching PCs"
    To move your saves to a new PC: back up on your old PC → install ONENNABE on the new PC → connect the same Google account → click **Restore Save Games from Drive**.

---

## What Gets Backed Up

| Feature | What Is Backed Up |
|---|---|
| Game List Backup | Your unlocked game list (which games are in your library) |
| Save Games Backup | Save files for Steam games, Online Fix games, and cracked games |

---

## Important Notes

- **ONENNABE must be open** for auto-backup to trigger on startup — if the app is closed, no automatic backup happens
- **Google Drive storage** counts against your Google account's free quota (15 GB). Save files for many games can add up over time
- **Achievements** are tied to your Steam account and are not backed up here — they sync via Steam's own servers
- Disconnecting Google Drive does **not** delete your files on Drive — you can reconnect at any time to resume syncing
