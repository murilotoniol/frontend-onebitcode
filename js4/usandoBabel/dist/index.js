"use strict";

var media = function media() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  var quant = numeros.length;
  return soma / quant;
};
console.log(media(2, 6, 3, 7, 4));
//////////////////////////////////////////////////////////////////////////////////////////////////////
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entradas = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entradas[_key2] = arguments[_key2];
  }
  var mult = entradas.reduce(function (accum, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return accum + n * (p !== null && p !== void 0 ? p : 1);
  }, 0);
  var peso = entradas.reduce(function (accum, entrada) {
    var _entrada$p;
    return accum + ((_entrada$p = entrada.p) !== null && _entrada$p !== void 0 ? _entrada$p : 1);
  }, 0);
  return mult / peso;
};
console.log(mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));
//////////////////////////////////////////////////////////////////////////////////////////////////////
var mediana = function mediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  numeros.sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(numeros.length / 2);
  if (numeros.length % 2 === 0) {
    return media(numeros[middle], numeros[middle - 1]);
  }
  return numeros[middle];
};
console.log(mediana(15, 14, 8, 7, 3));
//////////////////////////////////////////////////////////////////////////////////////////////////////
var moda = function moda() {
  for (var _len4 = arguments.length, numeros = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numeros[_key4] = arguments[_key4];
  }
  var quantidade = numeros.map(function (num) {
    return [num, numeros.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidade.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidade[0][0];
};
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));