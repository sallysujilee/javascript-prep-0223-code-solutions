/* exported capitalize */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//I have no idea... I don't know what other way to do this without using the charAt and slice method... I thought I could try to have it return the first character and then make that into a capital letter and somehow make the rest lowercase but this was the only method I could find...
