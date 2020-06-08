import chroma from "chroma-js";

function generatePalette(starterPalette) {
  // create a new palette with the details of starterPalette
  let newPalette = { ...starterPalette, colors: {} };
  //declare different levels
  let levels = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10);
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css("rgba")
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}
// function generatePalette(starterPalette) {
//   //create a new palette with the details of starterPalette
//   let newPalette = { ...starterPalette, colors: {} };

//   //declare different levels
//   let levels = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

//   starterPalette.colors.forEach((c) => {
//     //Loop from -5 (darkest) to +5 (brigthest)
//     for (let i = -5; i <= 5; i++) {
//       //Label shades 0 through 8
//       const shadeName = levels[i + 5];
//       //Read original color luminance
//       const luma = chroma(c.color).luminance();
//       let newLuma;
//       //Find a luminance between almost black and the original luma
//       if (i < 0) newLuma = luma - (luma / 6) * -i;
//       //Find a luminance between almost white and the original luma
//       else newLuma = luma + ((1 - luma) / 6) * i;
//       //Create a new color with such luminance
//       const newColor = chroma(c.color).luminance(newLuma, "lab");
//       //Create string for each format
//       const newColorObj = {
//         name: `${c.name} ${shadeName}`,
//         id: `${c.name} ${shadeName}`.toLowerCase().replace(/ /g, "-"),
//         hex: newColor.hex(),
//         rgb: newColor.css(),
//         rgba: newColor.css("rgba")
//       };
//       //Create array inside objects if not present
//       newPalette.colors[shadeName] = newPalette.colors[shadeName] || [];
//       //Push the new color
//       newPalette.colors[shadeName].push(newColorObj);
//     }
//   });
//   return newPalette;
// }

export { generatePalette };
