var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

var toni = "toni";
var mati = "mati";

module.exports.aux = mati;
exports.name = function name(number) {
  return names[number];
};
exports.number = function number(name) {
  return names.indexOf(name);
};
