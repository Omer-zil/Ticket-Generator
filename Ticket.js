const imgInput = document.querySelector('.js-avatar-upload');
const previewImg = document.querySelector('.js-avatar-preview');
const uploadIcon = document.querySelector('.js-upload-icon');
const uploadText = document.querySelector('.js-upload-text');
const buttonsDiv = document.querySelector('.avatar-buttons');
const changeBtn = document.querySelector('.js-change-photo');
const removeBtn = document.querySelector('.js-remove-photo');

const nameInput = document.querySelector('.js-fullname');
const emailInput = document.querySelector('.js-input-email');
const githubInput = document.querySelector('.js-github-username');

// Show file selector when clicking icon or preview
uploadIcon.addEventListener('click', () => imgInput.click());
previewImg.addEventListener('click', () => imgInput.click());
changeBtn.addEventListener('click', () => imgInput.click());

// Handle image selection
imgInput.addEventListener('change', () => {
  const file = imgInput.files[0];
  if (file) {
    // Show preview and hide icon/text
    previewImg.src = URL.createObjectURL(file);
    previewImg.style.display = 'block';
    uploadIcon.style.display = 'none';
    uploadText.style.display = 'none';

    // Show change/remove buttons
    buttonsDiv.style.display = 'flex';
  }
});

// Remove photo
removeBtn.addEventListener('click', () => {
  previewImg.src = '';
  previewImg.style.display = 'none';
  imgInput.value = '';

  // Show original icon and text
  uploadIcon.style.display = 'block';
  uploadText.style.display = 'block';

  // Hide buttons again
  buttonsDiv.style.display = 'none';
});

// Form submission
function display() {
  document.querySelector('.js-button').addEventListener('click', function (e) {
    e.preventDefault();

    const names = nameInput.value.trim();
    const emails = emailInput.value.trim();
    const githubs = githubInput.value.trim();
    const file = imgInput.files[0];

    if (!file) {
      alert("Please upload an avatar");
      return;
    } 
    if (names === '' || emails === '' || githubs === '') {
      alert('Please fill in all fields.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const imageDataUrl = e.target.result;

      localStorage.setItem('userData', JSON.stringify({
        names,
        emails,
        githubs,
        image: imageDataUrl
      }));

      alert('Form submitted successfully!');
      window.location.href = 'congra.html';
    };

    reader.readAsDataURL(file);
  });
}

display();
