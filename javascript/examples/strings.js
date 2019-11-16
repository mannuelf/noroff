/*
 * Source
 * JavaScript: The Definitive Guide, Sixth Edition
 * by David Flanagan
 * ISBN: 978-0-596-80552-4
 */

let s = 'Noroff Fagskole';

let stringObject = {
  'first_letter':  s.charAt(),
  'last_letter': s.charAt(s.length-1),
  'second_third_fourth': s.substring(1,4),
  'second_third_fourth': s.slice(1,4),
  'last_3_chars': s.slice(-3),
  'pos_first_letter_1': s.indexOf("1"),
  'pos_last_letter_1': s.lastIndexOf("1"),
  'po_first_1_3': s.indexOf("1", 3),
  'split_substring': s.split(" "),
  'replace_all_instances': s.replace("o", ":-)"),
  'uppercase_all': s.toUpperCase()
}

console.log('stringObject', stringObject)
