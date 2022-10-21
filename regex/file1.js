const str = 'javascript';
const data = str.search(/script/);
console.log('data', data);

const str1 = 'Please visit gfG!';
const txt = str1.replace(/gfg/, 'Google');
console.log(txt);

// Ranges [a-z]
const str2 = /[a-z]ear/;
console.log(str2.test('fear'));

// Match Digits [0-9]
const regex = /\d+/;
console.log('Meta Char', regex.test('8'));

// ? —Match Only The Condition
const regex2 = /goo?d/;
console.log(regex2.test('goood'));

// ^ -Match The Beginning Of The String
const regex3 = /^s/;
console.log('^', regex3.test('siva'));
console.log('^^^', regex3.test('avis'));

// $ — Matches The End Of The String
const regex4 = /.com$/;
console.log(regex4.test('siva.com'));
console.log(regex4.test('siva.co'));

// {N} — Matches exactly N occurrences of the preceding regular expression.
const regex5 = /go{2}d/;
console.log('N', regex5.test('good'));

// {N,} — Matches at least N occurrences of the preceding regular expression.
const regex6 = /go{2,}d/;
console.log('N,', regex6.test('good'));

// {N,M} — Matches at least N occurrences and at most M occurrences of the preceding regular expression (where M > N).
const regex7 = /go{2,3}d/;
console.log('N,M', regex7.test('god'));

// Range
const regex8 = /[a-o]/g;
const str8 = 'heallo world xbyz';
console.log('Range', str8.match(regex8));

// .
const regex9 = /./g;
const str9 = 'Hello im siva ';
console.log('Dot', str9.match(regex9));

// WhiteSpace
const regex10 = /\s/g;
const str10 = 'Hello im siva';
console.log('Whitespace', str10.match(regex10));

console.log(typeof regex10);

const a = new RegExp();
