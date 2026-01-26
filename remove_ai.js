// Instead of hiding elements, redirect to the AI-free "Web" view
if (!window.location.href.includes('udm=14')) {
  const url = new URL(window.location.href);
  url.searchParams.set('udm', '14');
  window.location.replace(url.href);
}
