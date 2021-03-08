

  function encodeBase64(textoPlano) {
      let base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      textoPlano = escape(textoPlano);
      let bits, dual, i = 0, encOut = '';
      while (textoPlano.length >= i + 3) {
          bits =
              (textoPlano.charCodeAt(i++) & 0xff) << 16 |
              (textoPlano.charCodeAt(i++) & 0xff) << 8 |
              textoPlano.charCodeAt(i++) & 0xff;
          encOut +=
              base64s.charAt((bits & 0x00fc0000) >> 18) +
              base64s.charAt((bits & 0x0003f000) >> 12) +
              base64s.charAt((bits & 0x00000fc0) >> 6) +
              base64s.charAt((bits & 0x0000003f));
      }
      if (textoPlano.length - i > 0 && textoPlano.length - i < 3) {
          dual = Boolean(textoPlano.length - i - 1);
          bits =
              ((textoPlano.charCodeAt(i++) & 0xff) << 16) |
              (dual ? (textoPlano.charCodeAt(i) & 0xff) << 8 : 0);
          encOut +=
              base64s.charAt((bits & 0x00fc0000) >> 18) +
              base64s.charAt((bits & 0x0003f000) >> 12) +
              (dual ? base64s.charAt((bits & 0x00000fc0) >> 6) : '=') +
              '=';
      }
      return encOut
  }
  function decodeBase64(textoBase64) {
      let base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      let bits, decOut = '', i = 0;
      let undecOut = null;
      for (; i < textoBase64.length; i += 4) {
          bits =
              (base64s.indexOf(textoBase64.charAt(i)) & 0xff) << 18 |
              (base64s.indexOf(textoBase64.charAt(i + 1)) & 0xff) << 12 |
              (base64s.indexOf(textoBase64.charAt(i + 2)) & 0xff) << 6 |
              base64s.indexOf(textoBase64.charAt(i + 3)) & 0xff;
          decOut += String.fromCharCode((bits & 0xff0000) >> 16, (bits & 0xff00) >> 8, bits & 0xff);
      }
      if (textoBase64.charCodeAt(i - 2) === 61) {
          undecOut = decOut.substring(0, decOut.length - 2);
      } else if (textoBase64.charCodeAt(i - 1) === 61) {
          undecOut = decOut.substring(0, decOut.length - 1);
      } else {
          undecOut = decOut;
      }
      return unescape(undecOut);
  }

module.exports = {
	encodeBase64,
	decodeBase64
}