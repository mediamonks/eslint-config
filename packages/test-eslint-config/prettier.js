/* eslint-disable no-redeclare,no-var,no-unused-vars,no-inline-comments */
const a = 1;
const b = 2;
const c = 3;
const d = 4;

var foo = a || b || c;
var foo = a && b && c;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a && (b < 0 || c > 0 || d + 1 === 0);
var foo = a + b * c; // <--- this is how prettier formats it, conflicts with no-mixed-operators arithmetic option
var foo = (a + b) * c;
