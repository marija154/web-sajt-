let menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

if (!menuButton && nav) {
  menuButton = document.createElement('button');
  menuButton.className = 'menu-button';
  menuButton.type = 'button';
  menuButton.setAttribute('aria-label', 'Otvori meni');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = '<span></span><span></span><span></span>';
  nav.parentElement.insertBefore(menuButton, nav.parentElement.firstChild);
}

if (menuButton) {
  while (menuButton.querySelectorAll('span').length < 3) {
    menuButton.appendChild(document.createElement('span'));
  }
}

const isInnerPage = window.location.pathname.includes('/pages/');
const siteRoot = isInnerPage ? '../' : '';

const sharedFooter = document.querySelector('footer');
if (sharedFooter) {
  sharedFooter.className = 'site-footer site-footer-expanded';
  sharedFooter.innerHTML = `
    <div>
      <strong>the <em>bullion</em></strong>
      <p>Haljine za trenutke koji se pamte.</p>
    </div>
    <div>
      <strong>Newsletter</strong>
      <form class="newsletter">
        <input type="email" aria-label="Email adresa" placeholder="Email adresa" required>
        <button type="submit">Prijavi se</button>
      </form>
    </div>
    <div>
      <strong>Customer care</strong>
      <a href="${siteRoot}pages/kontakt.html">Kontakt</a>
      <a href="${siteRoot}pages/returns.html">Uslovi najma</a>
      <a href="${siteRoot}pages/shipping.html">Preuzimanje</a>
    </div>
    <div>
      <strong>Pratite nas</strong>
      <a href="https://www.instagram.com/thebullion.dress" target="_blank" rel="noreferrer">Instagram: thebullion.dress</a>
    </div>
    <small>© 2026 - Sva prava zadržana</small>
  `;
}

const productGrid = document.querySelector('.product-grid');
const catalogItems = [
  ['1', 'Aurora Silk', ['1', 'v.PNG', 'IMG_4807.PNG']],
  ['2.PNG', 'Noir Bloom', ['2.PNG', '3', '22.PNG']],
  ['10.PNG', 'Rose Veil', ['10.PNG', 'IMG_4448.PNG', 'xxxx.PNG']],
  ['11.PNG', 'Champagne Muse', ['11.PNG', 'maki1.PNG', 'maki2.PNG']],
  ['12.PNG', 'Golden Aura', ['12.PNG', '15.PNG', 'maki3.PNG']],
  ['13.PNG', 'Golden Hour', ['13.PNG', '14.PNG', '59.PNG']],
  ['5.PNG', 'Pearl Afterglow', ['5.PNG', 'c.PNG', 'moki1.PNG']],
  ['4', 'Scarlet Reverie', ['4', 'IMG_4693.PNG', 'IMG_4695.PNG']],
  ['23.PNG', 'Ivory Starlight', ['23.PNG', '61.PNG', 'ee.PNG']],
  ['44.PNG', 'Fuchsia Muse', ['44.PNG', 'IMG_4673.PNG', 'deni1.PNG']],
  ['24.PNG', 'Ruby Whisper', ['24.PNG', 'z.PNG', 'deni2.PNG']],
  ['25.PNG', 'Mauve Mirage', ['25.PNG', '54.PNG', 'IMG_5296.PNG']],
  ['9.PNG', 'Midnight Poise', ['9.PNG', 'IMG_4316.PNG', 'deni4.PNG']],
  ['7.PNG', 'Blush Lullaby', ['7.PNG', '53.jpeg', 'slika15.PNG']],
  ['8.PNG', 'Carmine Dream', ['8.PNG', 'IMG_4686.PNG', 'slika9.PNG']],
  ['IMG_2292.JPG.jpeg', 'Rose Atelier', ['IMG_2292.JPG.jpeg', 'IMG_2293.JPG.jpeg', 'IMG_2294.JPG.jpeg']],
  ['IMG_2658.JPG.jpeg', 'Lilac Nocturne', ['IMG_2658.JPG.jpeg', 'IMG_2659.JPG.jpeg', 'slika7.PNG']],
  ['IMG_0714.JPG.jpeg', 'Blush Sonata', ['IMG_0714.JPG.jpeg', 'IMG_0716.JPG.jpeg', 'IMG_0717.JPG.jpeg']],
  ['IMG_3767.PNG', 'Onyx Grace', ['IMG_3767.PNG', 'IMG_3769.PNG']],
  ['IMG_3874.PNG', 'Emerald Hour', ['IMG_3874.PNG', 'IMG_3875.PNG', 'slika5.PNG']],
  ['IMG_3935.PNG', 'Violet Satin', ['IMG_3935.PNG', 'IMG_3936.PNG', 'IMG_3937.PNG']],
  ['IMG_3988.PNG', 'Mint Reverie', ['IMG_3988.PNG', 'IMG_3989.PNG', 'IMG_3990.PNG']],
  ['IMG_5655.JPG.jpeg', 'Azure Evening', ['IMG_5655.JPG.jpeg', '58.jpeg', 'xx']],
  ['l1.PNG', 'Luna Reverie', ['l1.PNG', 'l2.PNG', 'l3.PNG']],
  ['k1.PNG', 'Kira Nocturne', ['k1.PNG', 'k2.PNG', 'k3.PNG']],
  ['mm1.PNG', 'Mila Moon', ['mm1.PNG', 'mm2.PNG', 'mm3.PNG']],
  ['o1.jpeg', 'Jade Reverie', ['o1.jpeg', 'o2.jpeg', 'o3.jpeg']],
  ['we1.PNG', 'Champagne Élan', ['we1.PNG', 'we2.PNG', 'we3.PNG']],
  ['r1.PNG', 'Golden Mesh', ['r1.PNG', 'r2.PNG', 'r3.PNG']],
  ['e1.PNG', 'Rose Éclat', ['e1.PNG', 'e2.PNG', 'e3.PNG']],
  ['u1.PNG', 'Satin Reverie', ['u1.PNG', 'u2.PNG', 'u3.PNG']],
  ['lll1.PNG', 'Lumière Muse', ['lll1.PNG', 'lll2.PNG']]
];

const optimizedImage = (filename) => {
  const lastDot = filename.lastIndexOf('.');
  return `${filename.slice(0, lastDot > 0 ? lastDot : filename.length)}.webp`;
};

const collectionImage = (filename) => optimizedImage(filename);

const createOptimizedImage = ({ filename, optimizedFilename = optimizedImage(filename), alt, width, height, loading, fetchPriority, className = '' }) => {
  const image = document.createElement('img');
  image.className = className;
  image.alt = alt;
  image.width = width;
  image.height = height;
  image.loading = loading;
  image.fetchPriority = fetchPriority;
  image.decoding = 'async';
  image.dataset.originalSrc = `../slike/${filename}`;
  image.addEventListener('error', () => {
    if (image.src.endsWith('.webp')) {
      image.src = image.dataset.originalSrc;
    }
  }, { once: true });
  image.src = `../slike/${optimizedFilename}`;
  return image;
};

const catalogGroups = [
  ['Elegant', 'elegant'],
  ['Romantic', 'romantic'],
  ['Golden Hour', 'gold']
];

const primaryDressGroups = new Map([
  ['Aurora Silk', 'elegant'],
  ['Noir Bloom', 'romantic'],
  ['Rose Veil', 'romantic'],
  ['Champagne Muse', 'elegant'],
  ['Golden Aura', 'gold'],
  ['Golden Hour', 'gold'],
  ['Pearl Afterglow', 'elegant'],
  ['Scarlet Reverie', 'romantic'],
  ['Ivory Starlight', 'elegant'],
  ['Fuchsia Muse', 'romantic'],
  ['Ruby Whisper', 'romantic'],
  ['Mauve Mirage', 'romantic'],
  ['Midnight Poise', 'elegant'],
  ['Blush Lullaby', 'romantic'],
  ['Carmine Dream', 'romantic'],
  ['Rose Atelier', 'elegant'],
  ['Lilac Nocturne', 'elegant'],
  ['Blush Sonata', 'romantic'],
  ['Onyx Grace', 'elegant'],
  ['Emerald Hour', 'romantic'],
  ['Violet Satin', 'elegant'],
  ['Mint Reverie', 'elegant'],
  ['Azure Evening', 'elegant'],
  ['Luna Reverie', 'gold'],
  ['Kira Nocturne', 'elegant'],
  ['Mila Moon', 'elegant'],
  ['Jade Reverie', 'gold'],
  ['Champagne Élan', 'gold'],
  ['Golden Mesh', 'gold'],
  ['Rose Éclat', 'romantic'],
  ['Satin Reverie', 'elegant'],
  ['Lumière Muse', 'gold']
]);

const getDressGroups = (title) => [primaryDressGroups.get(title) || 'romantic'];

const wishlistKey = 'the-bullion-wishlist';
const getWishlist = () => JSON.parse(window.localStorage.getItem(wishlistKey) || '[]');
const setWishlist = (items) => window.localStorage.setItem(wishlistKey, JSON.stringify(items));
const isWishlisted = (index) => getWishlist().includes(index);

const updateWishlistButtons = () => {
  document.querySelectorAll('[data-wishlist]').forEach((button) => {
    const active = isWishlisted(Number(button.dataset.wishlist));
    button.classList.toggle('is-saved', active);
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? '♥ Sačuvano' : '♡ Sačuvaj';
  });
};

const toggleWishlist = (index) => {
  const items = getWishlist();
  const next = items.includes(index) ? items.filter((item) => item !== index) : [...items, index];
  setWishlist(next);
  updateWishlistButtons();
};

if (productGrid) {
  const renderCatalog = async () => {
    productGrid.innerHTML = '';
    productGrid.classList.remove('is-ready');
    productGrid.classList.add('is-loading');
    const selectedGroup = new URLSearchParams(window.location.search).get('group');
    const moodCards = document.querySelector('.catalog-moods');
    if (moodCards) moodCards.hidden = selectedGroup !== 'all';
    const resultHeading = document.querySelector('.catalog-results-heading');
    const resultLabel = resultHeading?.querySelector('.section-label');
    const resultMeta = resultHeading?.querySelector('.catalog-result-meta');
    const allDressesLink = resultHeading?.querySelector('.view-all-dresses');
    const activeMood = selectedGroup
      ? [...document.querySelectorAll('.mood-card')].find((card) => card.href.includes(`group=${selectedGroup}`))
      : null;
    if (resultLabel) {
      resultLabel.textContent = activeMood
        ? `${activeMood.querySelector('strong').textContent} / 2026`
        : 'The wardrobe / 2026';
    }
    if (allDressesLink) allDressesLink.hidden = !selectedGroup || selectedGroup === 'all';
    let visibleIndex = 0;
    catalogItems.forEach(([filename, title], index) => {
      if (selectedGroup && selectedGroup !== 'all' && !getDressGroups(title).includes(selectedGroup)) return;
      const card = document.createElement('a');
      card.className = 'product-card';
      card.href = `dress-detail.html?dress=${index}`;
      const image = createOptimizedImage({
        filename,
        optimizedFilename: `${filename.slice(0, filename.lastIndexOf('.') > 0 ? filename.lastIndexOf('.') : filename.length)}-card.webp`,
        alt: title,
        width: 700,
        height: 900,
        loading: 'eager',
        fetchPriority: visibleIndex < 4 ? 'high' : 'auto',
        className: 'product-image'
      });
      card.append(
        image,
        Object.assign(document.createElement('div'), { className: 'product-index', textContent: `No. ${String(index + 1).padStart(2, '0')}` }),
        Object.assign(document.createElement('h2'), { textContent: title }),
        Object.assign(document.createElement('span'), { textContent: 'View details' })
      );
      if (window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
        card.addEventListener('pointermove', (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          card.style.setProperty('--card-rotate-x', `${y * -3}deg`);
          card.style.setProperty('--card-rotate-y', `${x * 3}deg`);
        });
        card.addEventListener('pointerleave', () => {
          card.style.removeProperty('--card-rotate-x');
          card.style.removeProperty('--card-rotate-y');
        });
      }
      productGrid.appendChild(card);
      visibleIndex += 1;
    });
    window.requestAnimationFrame(() => {
      productGrid.classList.remove('is-loading');
      productGrid.classList.add('is-ready');
    });
    if (resultMeta) resultMeta.textContent = `${productGrid.children.length} models`;
    const empty = document.querySelector('.catalog-empty');
    if (empty) empty.hidden = productGrid.children.length > 0;
    updateWishlistButtons();
  };
  renderCatalog();
}

const detailPage = document.querySelector('.dress-detail-page');
if (detailPage) {
  const selectedIndex = Number(new URLSearchParams(window.location.search).get('dress'));
  const activeIndex = Number.isInteger(selectedIndex) && selectedIndex >= 0 && selectedIndex < catalogItems.length
    ? selectedIndex
    : 0;
  const item = catalogItems[activeIndex];
  const [, title, galleryImages] = item;
  document.title = `${title} | The Bullion`;
  const previousIndex = activeIndex > 0 ? activeIndex - 1 : catalogItems.length - 1;
  const nextIndex = activeIndex < catalogItems.length - 1 ? activeIndex + 1 : 0;
  const detailImages = galleryImages;
  detailPage.innerHTML = `
    <div class="dress-detail-gallery"></div>
    <div class="dress-detail-copy">
      <p class="section-label">The wardrobe / No. ${String(activeIndex + 1).padStart(2, '0')}</p>
      <h1>${title}</h1>
      <p class="detail-lede">Model za trenutke koji se pamte. Svaki komad biramo zbog kroja, materijala i načina na koji se nosi.</p>
      <div class="detail-notes"><span>Rental by appointment</span></div>
      <a class="detail-button" href="kontakt.html?model=${encodeURIComponent(title)}">Check availability</a>
      <button class="wishlist-button detail-wishlist" type="button" data-wishlist="${activeIndex}" aria-label="Sačuvaj ${title}" aria-pressed="false">♡ Sačuvaj</button>
      <a class="detail-back" href="the-selection.html">Back to collection</a>
      <div class="detail-navigation">
        <a href="dress-detail.html?dress=${previousIndex}" aria-label="Prethodna haljina">←</a>
        <span>${String(activeIndex + 1).padStart(2, '0')} / ${String(catalogItems.length).padStart(2, '0')}</span>
        <a href="dress-detail.html?dress=${nextIndex}" aria-label="Sledeća haljina">→</a>
      </div>
    </div>`;
  const galleryElement = detailPage.querySelector('.dress-detail-gallery');
  detailImages.forEach((filename, imageIndex) => {
    galleryElement.appendChild(createOptimizedImage({
      filename,
      alt: `${title} - fotografija ${imageIndex + 1}`,
      width: 900,
      height: 1200,
      loading: 'eager',
      fetchPriority: imageIndex === 0 ? 'high' : 'auto'
    }));
  });
  detailPage.querySelector('[data-wishlist]').addEventListener('click', () => toggleWishlist(activeIndex));
  updateWishlistButtons();
}

if (nav && !nav.querySelector('.menu-search')) {
  nav.id = nav.id || 'main-navigation';
  nav.setAttribute('aria-label', 'Glavna navigacija');
  nav.innerHTML = `
    <form class="menu-search" role="search" action="${siteRoot}pages/the-selection.html">
      <label class="sr-only" for="menu-search-input">Search</label>
      <input id="menu-search-input" type="search" placeholder="Search" autocomplete="off">
      <button type="submit" aria-label="Pokreni pretragu">⌕</button>
    </form>
    <div class="search-results" aria-live="polite"></div>
    <div class="menu-links">
      <a href="${siteRoot}index.html">Home</a>
      <div class="catalog-menu">
        <button class="catalog-menu-toggle" type="button" aria-expanded="false">Catalog</button>
        <div class="catalog-submenu">
          <a href="${siteRoot}pages/the-selection.html?group=all">All Dresses</a>
          ${catalogGroups.map(([label, group]) => `<a href="${siteRoot}pages/the-selection.html?group=${group}">${label}</a>`).join('')}
        </div>
      </div>
      <a href="${siteRoot}pages/atelier.html">Atelier</a>
    </div>
    <div class="menu-social">
      <a href="https://www.instagram.com/thebullion.dress" target="_blank" rel="noreferrer" aria-label="The Bullion Instagram"><svg class="instagram-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg><span class="menu-social-brand">THE BULLION</span></a>
    </div>
  `;
}

const menuLinks = nav?.querySelector('.menu-links');
if (menuLinks && !menuLinks.querySelector('.catalog-menu')) {
  const collectionLink = [...menuLinks.querySelectorAll('a')].find((link) => link.textContent.trim() === 'The Collection');
  if (collectionLink) {
    const catalogMenu = document.createElement('div');
    catalogMenu.className = 'catalog-menu';
    catalogMenu.innerHTML = `<button class="catalog-menu-toggle" type="button" aria-expanded="false">Catalog</button><div class="catalog-submenu"><a href="${siteRoot}pages/the-selection.html?group=all">All Dresses</a>${catalogGroups.map(([label, group]) => `<a href="${siteRoot}pages/the-selection.html?group=${group}">${label}</a>`).join('')}</div>`;
    collectionLink.replaceWith(catalogMenu);
  }
}

const catalogToggle = nav?.querySelector('.catalog-menu-toggle');
if (catalogToggle) {
  catalogToggle.addEventListener('click', () => {
    const catalogMenu = catalogToggle.closest('.catalog-menu');
    const isOpen = catalogMenu.classList.toggle('is-open');
    catalogToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (menuButton && nav) {
  nav.id = nav.id || 'main-navigation';
  menuButton.setAttribute('aria-controls', nav.id);
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    if (!isOpen && catalogToggle) {
      catalogToggle.closest('.catalog-menu').classList.remove('is-open');
      catalogToggle.setAttribute('aria-expanded', 'false');
    }
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      if (catalogToggle) {
        catalogToggle.closest('.catalog-menu').classList.remove('is-open');
        catalogToggle.setAttribute('aria-expanded', 'false');
      }
      menuButton.focus();
    }
  });
}

const siteSearchPages = [
  { title: 'Home', url: `${siteRoot}index.html`, text: 'Haljina za važan dan. Iznajmljivanje haljina i odabrani modeli.' },
  { title: 'Catalog', url: `${siteRoot}pages/the-selection.html`, text: 'Katalog haljina grupisan po stilu i boji.' },
  { title: 'Atelier', url: `${siteRoot}pages/atelier.html`, text: 'Proba haljine, izbor modela, veličine i termin preuzimanja.' }
];

const searchForm = document.querySelector('.menu-search');
const searchInput = document.querySelector('#menu-search-input');
const searchResults = document.querySelector('.search-results');

if (searchForm && searchInput && searchResults) {
  const renderSearchResults = () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchResults.classList.remove('is-visible');
      searchResults.innerHTML = '';
      return;
    }

    const matches = siteSearchPages.filter((page) =>
      `${page.title} ${page.text}`.toLowerCase().includes(query)
    );

    searchResults.classList.add('is-visible');
    searchResults.innerHTML = matches.length
      ? `<p>${matches.length} rezultat${matches.length === 1 ? '' : 'a'}</p>${matches.map((page) => `<a class="search-result" href="${page.url}"><strong>${page.title}</strong><span>${page.text}</span></a>`).join('')}`
      : '<p>Nema rezultata. Probaj drugi pojam.</p>';
  };

  searchInput.addEventListener('input', renderSearchResults);
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderSearchResults();
    const firstResult = searchResults.querySelector('.search-result');
    if (firstResult) firstResult.focus();
  });
}

document.querySelectorAll('form').forEach((form) => {
  if (form.classList.contains('menu-search')) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.classList.contains('contact-form')) {
      const formData = new FormData(form);
      const fields = [
        ['Ime i prezime', formData.get('name')],
        ['Email', formData.get('email')],
        ['Telefon ili Instagram', formData.get('phone')],
        ['Model', formData.get('model')],
        ['Veličina', formData.get('size')],
        ['Datum događaja', formData.get('event-date')],
        ['Poruka', formData.get('message')]
      ].filter(([, value]) => value);
      const message = `Novi upit za The Bullion:\n\n${fields.map(([label, value]) => `${label}: ${value}`).join('\n')}`;
      const subject = 'Novi upit za The Bullion';
      const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=thebulliondress%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      const status = document.createElement('div');
      status.className = 'form-message contact-success';
      status.innerHTML = '<span class="contact-success-mark" aria-hidden="true">✓</span><strong>Upit je spreman za slanje.</strong><span>Vaša email aplikacija će otvoriti poruku sa svim podacima.</span>';
      const emailLink = document.createElement('a');
      emailLink.className = 'form-email-link';
      emailLink.href = emailUrl;
      emailLink.textContent = 'Otvori email';
      emailLink.setAttribute('aria-label', 'Otvori email za slanje upita');
      status.appendChild(emailLink);
      form.replaceWith(status);
      return;
    }
    const message = document.createElement('p');
    message.className = 'form-message';
    message.textContent = form.classList.contains('newsletter')
      ? 'Hvala, upisani ste na The Bullion listu.'
      : 'Hvala na poruci. Javljamo se uskoro.';
    form.replaceWith(message);
  });

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const params = new URLSearchParams(window.location.search);
    const model = params.get('model');
    const modelSelect = contactForm.querySelector('[name="model"]');
    if (modelSelect) {
      modelSelect.querySelectorAll('option:not(:first-child)').forEach((option) => option.remove());
      catalogItems.forEach(([, title]) => {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        modelSelect.appendChild(option);
      });
    }
    if (model && modelSelect) modelSelect.value = model;
    const wishlistInput = contactForm.querySelector('[name="wishlist"]');
    if (wishlistInput) wishlistInput.value = getWishlist().map((index) => catalogItems[index]?.[1]).filter(Boolean).join(', ');
  }
});

document.querySelectorAll('.home-video').forEach((video) => {
  const container = video.closest('.home-image');

  const useFallback = () => {
    if (!container) return;
    container.classList.add('video-fallback');
    video.pause();
  };

  video.addEventListener('loadeddata', () => {
    if (container) container.classList.remove('video-fallback');
  });

  video.addEventListener('error', useFallback);
  window.setTimeout(() => {
    if (video.isConnected && video.readyState === 0) useFallback();
  }, 10000);
});

const revealItems = document.querySelectorAll('main > section:not(.product-grid):not(.catalog-results), .featured-card, .ritual-grid > div');
revealItems.forEach((item) => item.classList.add('reveal-on-scroll'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  window.addEventListener('scroll', () => siteHeader.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
}

const revealSite = () => {
  document.body.classList.add('site-ready');
};

window.requestAnimationFrame(revealSite);

const waitForStylesheets = () => Promise.all(
  [...document.querySelectorAll('link[rel="stylesheet"]')].map((stylesheet) => {
    if (stylesheet.sheet) return Promise.resolve();
    return new Promise((resolve) => {
      stylesheet.addEventListener('load', resolve, { once: true });
      stylesheet.addEventListener('error', resolve, { once: true });
      window.setTimeout(resolve, 3000);
    });
  })
);

Promise.all([
  waitForStylesheets(),
  document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()
]).then(() => window.requestAnimationFrame(revealSite));
