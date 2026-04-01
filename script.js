const form = document.getElementById("booking-form");
const popup = document.getElementById("form-popup");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("/", {
    method: "POST",
    body: new FormData(form)
  }).then(() => {
    popup.classList.add("show");
    form.reset();

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);
  });
});
