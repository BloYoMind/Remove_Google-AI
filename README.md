# No AI Overview — Browser Extension

A lightweight extension that removes Google’s **AI Overview** (also called “AI Answers” or “AI Summaries”) from search results.  
It works by detecting and removing the AI-generated response block as soon as it appears, keeping your search results clean, fast, and human‑curated.

This project is released under the **MIT License** and is currently in **beta**.  
Because Google frequently changes its interface, the extension may not work consistently across all browsers or future updates.

---

## 🚀 Features

- Removes Google’s AI Overview block from search results  
- Automatically re-cleans the page if Google re-injects AI content  
- Lightweight and fast — no external dependencies  
- Works on Brave, Chrome, Edge, and most Chromium-based browsers  
- 100% client-side, no tracking or data collection  

---

## 📦 Installation (Developer Mode)

1. Clone or download this repository  
2. Open your browser’s extensions page:  
   - Brave: `brave://extensions`  
   - Chrome: `chrome://extensions`  
3. Enable **Developer mode**  
4. Click **Load unpacked**  
5. Select the project folder  

The extension will load immediately.

---

## 🧩 How It Works

Google injects AI Overview using dynamic HTML containers and scripts.  
This extension:

- Identifies known AI Overview containers  
- Removes them instantly  
- Uses a `MutationObserver` to keep the page clean even if Google re-adds the block  

This approach avoids modifying URLs or interfering with normal search behavior.

---

## ⚠️ Beta Status

This extension is still in **beta**.  
Google frequently changes:

- DOM structure  
- Class names  
- Script injection methods  

Because of this, the extension may occasionally fail until updated.  
Browser compatibility may also vary, especially outside Chromium-based browsers.

---

## 🖥️ Browser Compatibility

| Browser | Status |
|---------|--------|
| **Brave** | Fully supported |
| **Chrome** | Fully supported |
| **Edge** | Supported |
| **Opera / Vivaldi** | Likely supported |
| **Firefox** | Not supported (Manifest V3 differences) |

---

## 📁 Project Structure

no-ai-overview-extension/
│
├── manifest.json       # Extension configuration
└── remove_ai.js       # Script that removes AI Overview


---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.

---

## 🤝 Contributing

Pull requests, improvements, and compatibility fixes are welcome.  
If Google changes something and the extension breaks, feel free to open an issue.
