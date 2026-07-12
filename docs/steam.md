# Latest Steam Client Versions

Below are the live Steam client versions tracked by `steam-monitor`:

<div id="steam-version-table">Loading latest versions...</div>

<script>
async function fetchSteamVersions() {
    try {
        // Fetch the raw markdown content directly from GitHub
        const response = await fetch('https://raw.githubusercontent.com/OpenSteam001/steam-monitor/main/README.md');
        const text = await response.text();
        
        // Extract the Markdown table lines using a regex matching the header
        const lines = text.split('\n');
        let tableLines = [];
        let foundTable = false;
        
        for (let line of lines) {
            if (line.includes('Channel | Version | Updated')) {
                foundTable = true;
            }
            if (foundTable) {
                if (line.trim() === '' && tableLines.length > 2) break; // stop at empty line after table
                tableLines.push(line);
            }
        }

        if (tableLines.length > 0) {
            // Convert markdown table rows into HTML elements
            let html = '<table class="md-table"><tbody>';
            tableLines.forEach((line, index) => {
                const cells = line.split('|').map(c => c.trim()).filter(c => c !== '');
                if (cells.length > 0 && !line.includes('---')) {
                    const tag = index === 0 ? 'th' : 'td';
                    html += '<tr>' + cells.map(c => `<${tag}>${c}</${tag}>`).join('') + '</tr>';
                }
            });
            html += '</tbody></table>';
            document.getElementById('steam-version-table').innerHTML = html;
        } else {
            document.getElementById('steam-version-table').innerHTML = 'Could not parse version data.';
        }
    } catch (error) {
        document.getElementById('steam-version-table').innerHTML = 'Failed to load live data.';
        console.error(error);
    }
}
// Run it immediately
fetchSteamVersions();
</script>
