'use strict';

var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1 || userAgent.indexOf('edge') !== -1) {
  window.document.body.innerHTML = 'お使いのブラウザは対応環境外です。';
}
