// Function to handle image upload
function uploadImage() {
  const input = document.getElementById('upload');
  const gallery = document.querySelector('.gallery');

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = 'Uploaded Image';
      img.style.width = '150px';
      img.style.height = '150px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '5px';
      gallery.appendChild(img);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// Function to handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  document.getElementById('contactForm').reset();
});