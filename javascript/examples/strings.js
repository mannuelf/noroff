/*
 * Source
 * JavaScript: The Definitive Guide, Sixth Edition
 * by David Flanagan
 * ISBN: 978-0-596-80552-4
 */

let s = "Noroff Fagskole";

let stringObject = {
  'first_letter':  s.charAt(),
  'last_letter': s.charAt(s.length-1),
  'second_third_fourth': s.substring(1,4),
  'second_third_fourth': s.slice(1,4),
  'last_3_chars': s.slice(-3),
  'pos_first_letter': s.indexOf("1")
}

console.log('stringObject', stringObject)
