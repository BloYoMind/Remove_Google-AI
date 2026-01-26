// Broad set of selectors Google commonly uses for AI Overview containers
const AI_SELECTORS = [
  'div[data-hveid][data-async-context]',
  'div[jsname="yEVEwb"]',
  'div[jscontroller="GxZRzf"]',
  'div[jsname="Zx80vf"]',
  'div[jsname="WbKHeb"]',
  'div[jscontroller="Xj8HUb"]',
  'div[ai-ans]',
  'div[ai-overview]',
  'div[data-ai]',
  'div[class*="AiAnswer"]',
  'div[class*="AIOv"]'
];

// Remove AI Overview elements
function removeAIOverview() {
  AI_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.remove();
    });
  });

  // Remove shadow DOM AI blocks
  document.querySelectorAll('*').forEach(el => {
    if (el.shadowRoot) {
      AI_SELECTORS.forEach(selector => {
        el.shadowRoot.querySelectorAll(selector).forEach(node => node.remove());
      });
    }
  });
}

// Run immediately
removeAIOverview();

// Run repeatedly for first 10 seconds (Google reinjects aggressively)
let attempts = 0;
const interval = setInterval(() => {
  removeAIOverview();
  attempts++;
  if (attempts > 20) clearInterval(interval); // 20 attempts = ~10 seconds
}, 500);

// MutationObserver to catch dynamic reinjection
const observer = new MutationObserver(() => {
  removeAIOverview();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});
