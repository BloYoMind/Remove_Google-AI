# No AI Overview — Browser Extension

A lightweight browser extension that disables Google’s **AI Overview** by automatically redirecting all Google searches to the classic **Web** results view (`udm=14`).  
This mode is AI‑free, fast, and consistent — no injected summaries, no AI answers, no clutter.

This project is MIT‑licensed and currently in **beta**.  
Because Google frequently changes its search architecture, behavior may vary across browsers.

---

## How It Works

Google recently integrated AI Overview deeply into the search rendering pipeline, meaning it’s no longer just a removable HTML block.  
Instead of fighting Google’s dynamic DOM, this extension uses a more reliable method:

### ✔ Automatically redirects all Google searches to the **Web** tab  
The Web tab (`udm=14`) uses Google’s legacy renderer, which **does not support AI Overview at all**.

So instead of hiding AI content, this extension prevents Google from generating it in the first place.

---

## Why This Method Is Better

- No flicker or AI block appearing before removal  
- No need for MutationObservers or DOM scraping  
- Works even as Google changes class names or injection methods  
- Faster and more stable than trying to delete AI Overview elements  
- Works across all Google domains (with proper manifest configuration)

This is the closest thing to a true “AI Overview Off” switch.

---

## Installation (Developer Mode)

1. Clone or download this repository  
2. Open your browser’s extensions page:  
   - Brave: `brave://extensions`  
   - Chrome: `chrome://extensions`  
3. Enable **Developer mode**  
4. Click **Load unpacked**  
5. Select the project folder  

The extension will load immediately.

---

## Core Logic (remove_ai.js)

This is the entire redirect logic:

```js
// Redirect to the AI-free "Web" view
if (window.location.pathname === '/search' && !window.location.href.includes('udm=14')) {
  const url = new URL(window.location.href);
  url.searchParams.set('udm', '14');
  window.location.replace(url.href);
} 
``` 
This ensures every Google search loads in the AI‑free Web view.

---

## Browser Compatibility (Desktop & Android)

| Browser / Platform      | Desktop Support       | Android Support        | Notes |
|-------------------------|------------------------|-------------------------|-------|
| **Brave**               | ✔ Fully supported      | ✔ Fully supported       | Brave supports Manifest V3 extensions on both desktop and Android. |
| **Chrome**              | ✔ Fully supported      | ✘ Not supported         | Chrome for Android does **not** support extensions of any kind. |
| **Edge**                | ✔ Supported            | ✘ Not supported         | Edge mobile has no extension support. |
| **Opera / Vivaldi**     | ✔ Likely supported     | ✘ Not supported         | Desktop versions are Chromium-based; mobile versions lack extensions. |
| **Kiwi Browser**        | ✔ Supported            | ✔ Supported             | Kiwi supports Chrome extensions on Android, including MV3. |
| **Firefox**             | ✘ Not supported (MV3)  | ✘ Not supported (MV3)   | Firefox does not support Manifest V3 extensions yet. |



---

## Project Structure

```
no-ai-overview-extension/
│
├── manifest.json       # Extension configuration
└── remove_ai.js       # Redirect logic
```
---

## Beta Status

This extension is still in **beta**.  
Google may change how the Web view works or how search parameters are handled.  
If the redirect stops working, updates may be required.

---

## License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.

---

## 🤝 Contributing

Pull requests, improvements, and compatibility fixes are welcome.  
If Google changes something and the extension breaks, feel free to open an issue.
