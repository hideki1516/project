
// 360px 未満は JS で viewport を固定する
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

// ページトップに戻るボタン
const btn_page_top = document.querySelector('.js-btn_page_top');

btn_page_top.addEventListener('click', scroll_top);
function scroll_top(e) {
  e.preventDefault();
  window.scroll({ top: 0, behavior: "smooth" });
}

// ページトップに戻るボタン（スクロールされた表示）
window.addEventListener('scroll', scroll_event);

function scroll_event() {
  if (window.pageYOffset > 100) {
    btn_page_top.style.opacity = '1';
  } else if (window.pageYOffset < 100) {
    btn_page_top.style.opacity = '0';
  }
}

const header_nav = document.querySelector('.js-header_nav');
const header_menu_btn = document.querySelector('.js-header_menu_btn');

header_menu_btn.addEventListener('click', () => {
  header_nav.classList.toggle('is-open');
  header_menu_btn.classList.toggle('is-open');
});