const bookingForm = document.getElementById("booking-form");
const bookingPopup = document.getElementById("form-popup");

const emailForm = document.querySelector(".email-form");
const emailPopup = document.getElementById("email-popup");

// BOOKING FORM
if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(bookingForm);

    fetch("/", {
      method: "POST",
      body: data
    })
    .then(() => {
      bookingForm.reset();

      bookingPopup.style.display = "block";
      bookingPopup.classList.add("show");

      setTimeout(() => {
        bookingPopup.classList.remove("show");
        setTimeout(() => {
          bookingPopup.style.display = "none";
        }, 250);
      }, 3000);
    })
    .catch(() => {
      alert("Something went wrong.");
    });
  });
}

// EMAIL FORM
if (emailForm) {
  emailForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(emailForm);

    fetch("/", {
      method: "POST",
      body: data
    })
    .then(() => {
      emailForm.reset();

      emailPopup.style.display = "block";
      emailPopup.classList.add("show");

      setTimeout(() => {
        emailPopup.classList.remove("show");
        setTimeout(() => {
          emailPopup.style.display = "none";
        }, 250);
      }, 3000);
    })
    .catch(() => {
      alert("Something went wrong.");
    });
  });
}

function openModal(el) {
  const modal = document.getElementById("ticketModal");
  const content = document.getElementById("modalContent");

  const date = el.dataset.date;
  const venue = el.dataset.venue;
  const location = el.dataset.location;
  const time = el.dataset.time;
  const age = el.dataset.age;
  const price = el.dataset.price;
  const link = el.dataset.link;

  content.innerHTML = `
    <h2>${date}</h2>
    <h3>${venue}</h3>
    <p>${location}</p>

    <hr>

    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Price:</strong> ${price}</p>

    <div class="ticket-btn-wrap">
      <a href="${link}" target="_blank" class="buy-ticket-btn">Buy Tickets</a>
    </div>
  `;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("ticketModal");
  modal.style.display = "none";
}
