# Cannot Connect to Update Server

If ONENNABE shows **"Could not connect to update server."** on the splash screen with an **OFF VPN/WARP AND RETRY** button, the app is unable to reach the update server during startup.

<img alt="Could not connect to update server" src="https://github.com/user-attachments/assets/1783877374297_image.png" />

Follow the fixes below in order until the issue is resolved.

---

## Fix 1 — Update ONENNABE to the Latest Version

You may be running an outdated version of ONENNABE that can no longer reach the update server.

1. Download the latest ONENNABE installer from the link provided by your seller
2. Run the installer over your existing installation — your activation and games are kept
3. Relaunch ONENNABE and check if the error is gone

---

## Fix 2 — Check Your System Date & Time

An incorrect system date or time will cause SSL certificate validation to fail, which prevents ONENNABE from connecting to any server.

1. Right-click the clock in the bottom-right corner of your taskbar
2. Click **Adjust date/time**
3. Make sure **Set time automatically** is toggled **ON**
4. Click **Sync now** to force an immediate time sync
5. Relaunch ONENNABE

!!! warning
    Even being a few minutes off can cause connection failures. Always use automatic time sync.

---

## Fix 3 — Turn Off VPN, Cloudflare WARP, or Custom DNS

VPNs, Cloudflare WARP, and custom DNS settings can block or redirect ONENNABE's connection to the update server.

### Turn Off VPN

1. Open your VPN app
2. Disconnect or turn it off completely
3. Click **OFF VPN/WARP AND RETRY** in ONENNABE, or relaunch the app

### Turn Off Cloudflare WARP

1. Click the WARP icon in your system tray
2. Click the toggle to turn WARP **off**
3. Click **OFF VPN/WARP AND RETRY** in ONENNABE, or relaunch the app

### Reset DNS to Default

If you are using a custom DNS (e.g. `1.1.1.1`, `8.8.8.8`, or any manually set DNS):

1. Open **Settings** → **Network & Internet** → **Wi-Fi** or **Ethernet** (depending on your connection)
2. Click your active connection → **Edit** under DNS settings
3. Set DNS to **Automatic (DHCP)**
4. Save and relaunch ONENNABE

!!! tip
    The **OFF VPN/WARP AND RETRY** button on the splash screen is a quick shortcut — after turning off your VPN or WARP, click it to retry the connection without fully closing and reopening the app.

---

## Still Not Working?

If all three fixes have been tried and the error persists, join the **Discord server** and post in the support channel. Include:

- Your ONENNABE version number
- Your Windows version
- Whether you are using a VPN, WARP, or custom DNS
