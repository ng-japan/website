'use strict';

var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
  window.document.body.innerHTML = 'お使いのブラウザは対応環境外です。';
}

window.document.querySelector('.header__scroller').addEventListener('click', function (event){
  event.preventDefault();
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
      window.document.documentElement.scrollTop = window.document.body.scrollTop = current
      frame();
    })
  }
  frame();
});

console.log(atob("QENvbmZlcmVuY2UoewogIHNlbGVjdG9yOiAnbmctamFwYW4nLAogIHBsYWNlOiAndG9reW8nLAogIHRlbXBsYXRlOiBgPGgxPkhlbGxvIEFuZ3VsYXIhITwvaDE+YAp9KQpjbGFzcyBOZ0phcGFuIHsgeWVhciA9IDIwMTg7IH0="));
