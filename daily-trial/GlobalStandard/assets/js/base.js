
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
const js_btnTop = document.querySelector('.js_btnTop');

js_btnTop.addEventListener('click', scroll_top);
function scroll_top(e) {
  e.preventDefault();
  window.scroll({ top: 0, behavior: "smooth" });
}

// ページトップに戻るボタン（スクロールされた表示）
window.addEventListener('scroll', scroll_event);

function scroll_event() {
  if (window.pageYOffset > 100) {
    js_btnTop.style.opacity = '1';
  } else if (window.pageYOffset < 100) {
    js_btnTop.style.opacity = '0';
  }
}

