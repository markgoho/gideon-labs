// Mobile menu toggle.
const menuBtn = document.querySelector<HTMLButtonElement>('.menu__btn');
const menu = document.querySelector<HTMLUListElement>('.menu__list');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('menu__list--active');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Story search on the success stories index.
type Story = { t: string; u: string; d: string; c: string[]; i: string; s: string };

const searchForm = document.querySelector<HTMLFormElement>('form[data-search]');

if (searchForm) {
  const input = searchForm.querySelector<HTMLInputElement>('input[type="search"]');
  const status = searchForm.querySelector<HTMLElement>('[data-search-status]');
  const results = document.querySelector<HTMLUListElement>('[data-search-results]');
  const hideWhenSearching = document.querySelectorAll<HTMLElement>('[data-search-hide]');
  const url = searchForm.dataset.search || '/search.json';
  let index: Story[] | null = null;
  let loading: Promise<Story[]> | null = null;

  const load = (): Promise<Story[]> => {
    if (index) return Promise.resolve(index);
    if (!loading) {
      loading = fetch(url)
        .then((r) => r.json())
        .then((data: Story[]) => (index = data));
    }
    return loading;
  };

  const escape = (s: string) =>
    s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch] as string);

  const card = (story: Story) => {
    const chips = story.c
      .slice(0, 2)
      .map((c) => `<li><span class="chip">${escape(c)}</span></li>`)
      .join('');
    const media = story.i
      ? `<a class="card__media" href="${escape(story.u)}" tabindex="-1" aria-hidden="true"><img src="${escape(story.i)}" alt="" loading="lazy" decoding="async" width="640" height="400"></a>`
      : '';
    return `<li class="card">${media}<div class="card__body"><ul class="chips">${chips}</ul><h2><a href="${escape(story.u)}">${escape(story.t)}</a></h2><p>${escape(story.s)}</p><span class="card__date">${escape(story.d)}</span></div></li>`;
  };

  const render = (q: string) => {
    if (!results || !input) return;
    const query = q.trim().toLowerCase();
    if (!query) {
      results.hidden = true;
      results.innerHTML = '';
      hideWhenSearching.forEach((el) => (el.hidden = false));
      if (status) status.textContent = '';
      return;
    }
    load().then((stories) => {
      if (input.value.trim().toLowerCase() !== query) return;
      const words = query.split(/\s+/);
      const hits = stories.filter((s) => {
        const hay = `${s.t} ${s.c.join(' ')} ${s.s}`.toLowerCase();
        return words.every((w) => hay.includes(w));
      });
      results.innerHTML = hits.slice(0, 30).map(card).join('');
      results.hidden = false;
      hideWhenSearching.forEach((el) => (el.hidden = true));
      if (status) {
        status.textContent = hits.length
          ? `${hits.length} ${hits.length === 1 ? 'story' : 'stories'} match${hits.length > 30 ? ', showing the first 30' : ''}.`
          : 'No stories match. Try a part number, a component type or a failure mode.';
      }
    });
  };

  if (input) {
    input.addEventListener('focus', () => void load(), { once: true });
    input.addEventListener('input', () => render(input.value));
    if (input.value) render(input.value);
  }
}
