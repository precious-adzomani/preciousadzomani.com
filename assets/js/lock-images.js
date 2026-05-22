// Disable right-click on images
document.addEventListener("contextmenu", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

// Disable dragging images
document.addEventListener("dragstart", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});
