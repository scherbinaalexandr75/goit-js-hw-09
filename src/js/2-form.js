const LS_KEY_feedback = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', onFormData);
form.addEventListener('submit', onSubmitForm);

let formData = JSON.parse(localStorage.getItem(LS_KEY_feedback)) || {
  email: '',
  message: '',
};

function onFormData(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LS_KEY_feedback, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert(`Fill please all fields`);
  }

  console.log(JSON.parse(localStorage.getItem(LS_KEY_feedback)));
  localStorage.removeItem(LS_KEY_feedback);
  event.currentTarget.reset();
  formData.email = '';
  formData.message = '';
}
