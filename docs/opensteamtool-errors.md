# OpenSteamTool — Unsupported Version & IPC Errors

If you see any of the following popups when launching ONENNABE or Steam, it means there is a version mismatch between **OpenSteamTool** and your current Steam installation.

---
<img width="1253" height="514" alt="image" src="https://github.com/user-attachments/assets/e5c5ddcd-4e97-4f9c-98d1-5f21e82d4099" />

## The Errors

These three popups are all related to the same root cause:

| Error | Message |
|---|---|
| **Unsupported Steam Version** (steamui.dll) | `signature file not found for steamui.dll` |
| **Unsupported Steam Version** (steamclient64.dll) | `signature file not found for steamclient64.dll` |
| **IPC spec missing** | `IPC spec file not found` |

!!! info "These are warnings, not crashes"
    These popups are informational. The affected hooks are disabled for the current session but other modules continue to work. Click **OK** to dismiss and continue.

---

## Why This Happens

OpenSteamTool hooks into specific Steam DLL files (`steamui.dll`, `steamclient64.dll`) using pattern signatures. When Steam updates to a new version, the signatures change and OpenSteamTool's upstream needs to be updated to match.

There are **two possible causes**:

---

### Cause 1 — OpenSteamTool Upstream Not Yet Updated

Steam just pushed a new update and the OpenSteamTool upstream has not caught up yet.

**Fix: Wait 1–2 hours**

!!! warning "Please be patient"
    The OpenSteamTool upstream is maintained separately. After a Steam update, it usually takes **1–2 hours** for the upstream to be updated with new signatures. Once the upstream is updated, the error will disappear automatically on the next Steam restart — no action needed on your end.

**What to do:**
1. Click **OK** to dismiss the popup
2. Wait **1–2 hours**
3. Restart Steam
4. If the error is gone, you are good to go
5. If the error persists after 2+ hours, move to Cause 2 below

---

### Cause 2 — Your Steam is Outdated

The OpenSteamTool upstream is already updated to the latest Steam version, but **your Steam installation is behind** and its DLL signatures do not match.

This can happen if:
- Steam failed to auto-update
- A `steam.cfg` file in your Steam folder is blocking updates
- Your Steam install is corrupted

**Fix — Reinstall Steam for a Fresh Update**

The cleanest solution is to reinstall Steam using the built-in ONENNABE tool, which ensures you get a completely fresh Steam installation without a `steam.cfg` block.

1. Open **Steam Unlock ONENNABE**
2. Go to **Tools**
3. Click **Reinstall Steam**
4. Wait for the reinstall to complete
5. Log back in to Steam
6. Relaunch ONENNABE

See [Fix 4 — Reinstall Steam](https://steamunlockonennabe.click/docs/troubleshooting/#fix-4-reinstall-steam-via-onennabe-tools) for the full step-by-step guide.

!!! warning "Check for steam.cfg"
    Before reinstalling, check if a file named `steam.cfg` exists in your Steam installation folder (usually `C:\Program Files (x86)\Steam\` or `C:\Program Files\Steam\`). If it exists, **delete it** — this file can block Steam from updating to the latest version. Reinstalling Steam via ONENNABE Tools will handle this automatically.

---

## Quick Decision Guide

```
Seeing OST error popup?
│
├── Did Steam just update recently? (within last 1–2 hours)
│   └── YES → Wait 1–2 hours, restart Steam, check again
│
└── Error still showing after 2+ hours?
    └── Reinstall Steam via ONENNABE Tools → Tools > Reinstall Steam
```

---

## Still Not Working?

If the error persists after both fixes, join the **Discord server** and post in the support channel with a screenshot of the error popup. Include your Steam build ID shown in the popup diagnostics section.
