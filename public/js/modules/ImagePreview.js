
// preview the image 
var file = [...document.querySelectorAll('[data-get]')],
    preview = [...document.querySelectorAll('[data-preview]')];

file.forEach(input => {
  input.onchange = () => {
    let exactImage = preview.filter(image => image.getAttribute('data-preview') == input.getAttribute('data-get'))[0];

    input.style.display = "none";

    exactImage.classList.add('z-50');
    exactImage.setAttribute('src', URL.createObjectURL(input.files[0])); 
  };
});

// Change Image
preview.forEach(img => {
  img.onclick = () => {
    let exactInput = file.filter(inpt => inpt.getAttribute('data-get') == img.getAttribute('data-preview') )[0];

    exactInput.click();
  };
});

// Delete Image
let delbtn = document.getElementById("deletImage");

// // Change Image
// delbtn.onclick = () => {
//   let delImg = delbtn.
// }