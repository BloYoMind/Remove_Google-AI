function removeAI() {
  const selectors = [
    'div[data-hveid][data-async-context]',
    'div[ai-ans]',
    'div[jsname="yEVEwb"]',
    'div[jscontroller="GxZRzf"]'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.remove());
  });
}

removeAI();

const observer = new MutationObserver(removeAI);
observer.observe(document.body, { childList: true, subtree: true });
