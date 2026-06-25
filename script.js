const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  if (!button) return;

  button.textContent = "Enquiry noted";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = "Send enquiry";
    button.disabled = false;
    form.reset();
  }, 2400);
});
