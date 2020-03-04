module.exports = function createDreamTeam(secretName) {

  let name = false;
  if (Array.isArray(secretName) === true) {
    name = "";
    let arrNames = [];
    secretName.forEach(function (item) {
      if (typeof item === "string") {
        arrNames.push(item.toUpperCase().replace(/[\s{2,}]+/g, '').charAt(0));
      }
      arrNames.sort();
    });
    name = arrNames.toString().replace(/[\s{2,}]+/g, '');

    if (name === "") name = false;
  }
  return name;
};
