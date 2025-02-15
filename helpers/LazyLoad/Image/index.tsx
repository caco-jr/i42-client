export function lazyLoadImages(selector = 'img') {
  function createObserver() {
    const elements = document.querySelectorAll(selector);

    const filteredList = Array.from(elements).filter(item =>
      item.attributes.getNamedItem('data-src')
    );

    if (!filteredList.length) {
      return;
    }

    const observer = new window.IntersectionObserver(
      (entries, observerChild) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.getAttribute('data-src')) {
            entry.target['src'] = entry.target.getAttribute('data-src');
            entry.target.removeAttribute('data-src');
            observerChild.unobserve(entry.target);
          }
        });
      },
      {}
    );

    Array.prototype.map.call(filteredList, function(item) {
      observer.observe(item);
    });
  }

  if (!('IntersectionObserver' in window)) {
    const polyfill = document.createElement('script');
    polyfill.src =
      'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver';
    document.head.appendChild(polyfill);

    polyfill.onload = () => {
      createObserver();
    };
    return;
  }

  createObserver();
}
