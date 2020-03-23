module.exports = function (source) {
  var newSource = source
    // #000000
    .replace(/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([^0-9a-fA-F]{1})/g, function ($0, $1, $2, $3, $4) {
      return '#' + n16_reverse_n16($1) + n16_reverse_n16($2) + n16_reverse_n16($3) + $4;
    })
    // #000
    .replace(/#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([^0-9a-fA-F]{1})/g, function ($0, $1, $2, $3, $4) {
      return '#' + n16_reverse_n16($1 + $1) + n16_reverse_n16($2 + $2) + n16_reverse_n16($3 + $3) + $4;
    })
    // rbga?(0, 0, 0, 0?)
    .replace(/rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(\.\d*)?)?\s*\)/g, function ($0, $1, $2, $3, $4) {
      return `rgba(${n10_reverse_n10($1)}, ${n10_reverse_n10($2)}, ${n10_reverse_n10($3)}, ${$4 || 1})`;
    })

  return newSource;
};

function n16_reverse_n16(n) {
  var reverseN = (255 - parseInt('0x' + n)).toString(16);
  return reverseN[1] ? reverseN : '0' + reverseN;
}

function n10_reverse_n10(n) {
  return (255 - n);
}
