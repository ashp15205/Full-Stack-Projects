const regForm = document.getElementById('regForm');
const successModal = document.getElementById('successModal');

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real app, you'd send this to a backend
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        address: document.getElementById('address').value
    };

    console.log("Registration Data:", formData);
    
    // Show success feedback
    successModal.classList.remove('hidden');
});
