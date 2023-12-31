document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const fileInput = document.getElementById('fileInput');
  const autoFillBtn = document.getElementById('autoFillBtn');
  const submitBtn = document.getElementById('submitBtn');

  // Function to auto-fill form fields with data
  function autoFillForm(data) {
    nameInput.value = data.name || '';
    emailInput.value = data.email || '';
    phoneInput.value = data.phone || '';
  }

  // Function to handle file input change
  function handleFileInputChange() {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const data = JSON.parse(e.target.result);
          autoFillForm(data);
        } catch (error) {
          console.error('Error parsing JSON file:', error);
        }
      };
      reader.readAsText(file);
    }
  }

  // Function to handle auto-fill button click
  function handleAutoFillButtonClick() {
    fileInput.click(); // Trigger the file input click programmatically
  }

  // Function to handle form submission
  function handleSubmitButtonClick() {
    // Implement your form submission logic here
    console.log('Form submitted!');
  }

  // Attach event listeners
  fileInput.addEventListener('change', handleFileInputChange);
  autoFillBtn.addEventListener('click', handleAutoFillButtonClick);
  submitBtn.addEventListener('click', handleSubmitButtonClick);
});
