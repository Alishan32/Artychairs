function setResponsiveFontSize() {
  const deviceWidth = window.innerWidth;
  let fontSize = 16; // Default font size

  // Set the font size based on device width
  if (deviceWidth >= 100 && deviceWidth <= 400) {
    fontSize += (deviceWidth - 400) / 40;
  } else if (deviceWidth > 400) {
    fontSize = 18; // Set your font size for wider screens here
  } else {
    fontSize = 8; // Set your font size for smaller screens here
  }

  // Set the CSS variable value
  document.documentElement.style.setProperty('--responsive-font-size', `${fontSize}px`);
}

// Call the function on page load and whenever the window is resized
setResponsiveFontSize();
window.addEventListener('resize', setResponsiveFontSize);
window.addEventListener('load', setResponsiveFontSize);

// For textboxId
function applyTransformValueForTextboxId(textboxId) {
  const textboxElement = document.getElementById(textboxId);
  const inputBoxElement = textboxElement.querySelector('.inputtextbox');
  const inputBoxWidth = inputBoxElement.clientWidth;
  const iconElement = textboxElement.querySelector('.login__icon');
  const iconWidth = iconElement.clientWidth;

  // Calculate the translation value
  const translateXValue = inputBoxWidth - iconWidth;

  // Apply the transformations using CSS variables
  textboxElement.style.setProperty('--translateX-focus', `${translateXValue-4}px`);
  textboxElement.style.setProperty('--translateX-hover', `${translateXValue - 5}px`);
}

function removeTransformValueForTextboxId(textboxId) {
  const textboxElement = document.getElementById(textboxId);
  textboxElement.style.removeProperty('--translateX-focus');
  textboxElement.style.removeProperty('--translateX-hover');
}

// Call the function on load and whenever the window is resized for textboxId
window.addEventListener('load', () => {
  applyTransformValueForTextboxId('textboxId');
  applyTransformValueForTextboxId('textboxId1');
});

window.addEventListener('resize', () => {
  applyTransformValueForTextboxId('textboxId');
  applyTransformValueForTextboxId('textboxId1');
});


// Attach the listener to the .textbox container for hover for textboxId
// const textboxElement = document.getElementById('textboxId');
// textboxElement.addEventListener('mouseenter', () => applyTransformValueForTextboxId('textboxId'));
// textboxElement.addEventListener('mouseleave', () => removeTransformValueForTextboxId('textboxId'));

// // Attach the listeners to the input text box elements directly for textboxId
// const inputBoxElement = document.querySelector('#textboxId .inputtextbox');
// inputBoxElement.addEventListener('focus', () => applyTransformValueForTextboxId('textboxId'));
// inputBoxElement.addEventListener('blur', () => removeTransformValueForTextboxId('textboxId'));

// // Attach the listeners to the input text box elements directly for textboxId1
// const inputBoxElement1 = document.querySelector('#textboxId1 .inputtextbox');
// inputBoxElement1.addEventListener('focus', () => applyTransformValueForTextboxId('textboxId1'));
// inputBoxElement1.addEventListener('blur', () => removeTransformValueForTextboxId('textboxId1'));

// // Attach the listener to the .textbox container for hover for textboxId1
// const textboxElement1 = document.getElementById('textboxId1');
// textboxElement1.addEventListener('mouseenter', () => applyTransformValueForTextboxId('textboxId1'));
// textboxElement1.addEventListener('mouseleave', () => removeTransformValueForTextboxId('textboxId1'));
