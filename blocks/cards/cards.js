/**
 *
 * @param {Element} block
 */
export default function decorate(block) {
  const children = [...block.children];
  children.forEach((card) => {
    let img, title, url;
    if (block.classList.contains('image-cards')) {
      console.log(img, title, url);
      const [bg, content] = [...card.children];
      content.classList.add('content');
      [title, url] = [...content.children];
      bg.classList.add('card-img');
      card.addEventListener('click', () => {
        window.location.href = url.children[0].href;
      });
    } else {
      [img, title, url] = card.querySelectorAll(':scope > div > *');
      img.classList.add('card-img');
    }
    card.classList.add('card');

    title.classList.add('title');
    url.classList.add('url');
  });
}
