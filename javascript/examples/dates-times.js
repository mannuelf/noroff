/*
 * Source
 * JavaScript: The Definitive Guide, Sixth Edition
 * by David Flanagan
 * ISBN: 978-0-596-80552-4
 */

let then = new Date(2010, 0, 1);
let later = new Date(2020, 11, 9);
console.log('then', then);
console.log('later', later);

let now = new Date();
console.log('now', now);

let dateObject = {
  'full-year': later.getFullYear(),
  'month': later.getMonth(),
  'date': later.getDate(),
  'day': later.getDay(),
  'hours': later.getHours(),
  'UCT_hours': later.getUTCHours(),
  'to_string': later.toString(),
  'to_ut_string': later.toUTCString(),
  'to_locale_date': later.toLocaleDateString(),
  'to_locale_time_string': later.toLocaleTimeString(),
  'to_iso_string': later.toISOString()
}
console.log('dateObject', dateObject)
