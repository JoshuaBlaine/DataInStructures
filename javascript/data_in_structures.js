window.$ = require('jquery');

const ArrayView = require('./data_structures/array_view');
window.anime = require('animejs');

document.addEventListener("DOMContentLoaded", () => {
  const $rootEl = $("#root");
  const $title = $rootEl.find('.js-title');
  const copy   = '.js-copy';

  $title.on("click", function (event) {
    $(event.target).next(copy).slideToggle();
    $(event.target).parent().siblings().children().next().slideUp();
    return false;
  });

  new ArrayView($rootEl, ["this", "is", "an", "array", "of", "words"]);
});
