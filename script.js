'use strict';

var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1 || userAgent.indexOf('edge') !== -1) {
  window.document.body.innerHTML = 'お使いのブラウザは対応環境外です。';
}

window.document.querySelector('.header__scroller').addEventListener('click', function (){
  var current = window.document.documentElement.scrollTop;
  var about = window.document.querySelector('#about').offsetTop;
  var diff = about - current
  var frameDiff = diff / 60 * 6
  var frame = function () {
    window.requestAnimationFrame(function () {
      if (current > about) {
        return
      }
      current = current + frameDiff
      window.document.documentElement.scrollTop = current
      frame();
    })
  }
  frame();
});
