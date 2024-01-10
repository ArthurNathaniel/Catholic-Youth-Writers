emailjs.init("mJW_o6PyBi_FvJzFc");

function sendEmail() {
  // Change button text and disable it to indicate loading
  const submitButton = document.querySelector('button[type="button"]');
  submitButton.innerText = "Please wait...";
  submitButton.disabled = true;

  // Collect form data
  const formData = {
    name: document.querySelector('input[name="name"]').value,
    phone_number: document.querySelector('input[name="phone_number"]').value,
    whatsapp_number: document.querySelector('input[name="whatsapp_number"]')
      .value,
    email: document.querySelector('input[name="email"]').value,
    parish: document.querySelector('input[name="parish"]').value,
    article_topic: document.querySelector('input[name="article_topic"]').value,
  };

  // Simple form validation (you can enhance this based on your requirements)
  if (!formData.name || !formData.email || !formData.article_topic) {
    // Display an error message to the user
    alert("Please fill out required fields: Name, Email, and Article Topic");
    // Reset button text and enable it
    submitButton.innerText = "Submit";
    submitButton.disabled = false;
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_x7zr3bq", "template_wf7ld5m", formData).then(
    function (response) {
      console.log("Email sent successfully", response);
      // Display a success message to the user
      alert("Article submitted successfully!");
      // Reset button text and enable it
      submitButton.innerText = "Submit";
      submitButton.disabled = false;
    },
    function (error) {
      console.log("Failed to send email", error);
      // Display an error message to the user
      alert("Failed to submit article. Please try again.");
      // Reset button text and enable it
      submitButton.innerText = "Submit";
      submitButton.disabled = false;
    }
  );
}
