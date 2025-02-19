console.clear();

// Function to select HTML-Object
function selectElements(name) {
  return document.querySelector(`[data-js="${name}"]`);
}

// Eventlisteners to toogle the bookmark icon fill
selectElements("bookmark1").addEventListener("click", (event) => {
  selectElements("bookmark1").classList.toggle("bookmark--active");

  // event.target.classList.toggle("bookmark--active");
  // console.log(event.target);
});

// Card2 + Card3
// selectElements("bookmark2").addEventListener("click", (event) => {
//   selectElements("bookmark2").classList.toggle("bookmark--active");
// });

// selectElements("bookmark3").addEventListener("click", (event) => {
//   selectElements("bookmark3").classList.toggle("bookmark--active");
// });


// Eventlisteners to toogle the answer-area and change text of the answer-button
selectElements("card__button-answer1").addEventListener("click", (event) => {
  // Button clicked, switch card
    event.target.classList.toggle("card__button-answer--active");

  // Show/Hide Answer
  selectElements("card__answer1").classList.toggle("card__answer--active");

    // Check if hidden/shown and change text of button
  if (!(event.target.classList.value === "card__button-answer")) {
    event.target.textContent = "Hide Answer";
    return; // Early return
  }
  // Change back to "Show Answer"
  event.target.textContent = "Show Answer";
});
