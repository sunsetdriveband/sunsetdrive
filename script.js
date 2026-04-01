const form = document.getElementById("booking-form");
const popup = document.getElementById("form-popup");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data
    })
    .then(() => {
      form.reset();

      popup.style.display = "block";
      popup.classList.add("show");

      setTimeout(() => {
        popup.classList.remove("show");

        setTimeout(() => {
          popup.style.display = "none";
        }, 250);
      }, 3000);
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
    });
  });
}
