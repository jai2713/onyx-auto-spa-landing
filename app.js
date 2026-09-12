// Forward only known campaign parameters; personal fields are never copied.
const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const params = new URLSearchParams(window.location.search);
const frame = document.getElementById('inline-N7EyQvNzWatQ19AHRpVW');
const formURL = new URL(frame.src);
keys.forEach(key => { const value = params.get(key); if (value) formURL.searchParams.set(key, value.slice(0, 200)); });
if (formURL.href !== frame.src) frame.src = formURL.href;
document.getElementById('direct-form').href = formURL.href;
// Keep the mobile action bar out of the way while the form is in view.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    document.querySelector('.mobile-cta').classList.toggle('hidden', entries[0].isIntersecting);
  }, {threshold: 0});
  observer.observe(document.querySelector('.form-card'));
}
