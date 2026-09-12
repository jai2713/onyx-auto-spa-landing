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

const gallery = document.getElementById('work-photos');
if (gallery) {
  const slides = [...gallery.querySelectorAll('.gallery-slide')];
  const previous = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  const counter = document.getElementById('gallery-count');
  function updateGallery() {
    const bounds = gallery.getBoundingClientRect();
    const visible = slides.map((slide, index) => {
      const box = slide.getBoundingClientRect();
      const overlap = Math.min(box.right, bounds.right) - Math.max(box.left, bounds.left);
      return overlap > box.width / 2 ? index + 1 : null;
    }).filter(Boolean);
    previous.disabled = gallery.scrollLeft <= 2;
    next.disabled = gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 2;
    if (visible.length) counter.textContent = `${visible[0]}${visible.length > 1 ? '–' + visible.at(-1) : ''} of ${slides.length}`;
  }
  function moveGallery(direction) {
    const step = slides[1].offsetLeft - slides[0].offsetLeft;
    gallery.scrollBy({left: direction * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  previous.addEventListener('click', () => moveGallery(-1));
  next.addEventListener('click', () => moveGallery(1));
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); moveGallery(event.key === 'ArrowRight' ? 1 : -1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault(); gallery.scrollTo({left: event.key === 'Home' ? 0 : gallery.scrollWidth});
    }
  });
  let scrollTimer;
  gallery.addEventListener('scroll', () => {clearTimeout(scrollTimer); scrollTimer = setTimeout(updateGallery, 100);}, {passive:true});
  if ('ResizeObserver' in window) new ResizeObserver(updateGallery).observe(gallery);
  else window.addEventListener('resize', updateGallery);
  updateGallery();
}
