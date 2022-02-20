import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

initForm();

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();

    const formData = new FormData(feedbackForm);
    formData.forEach((key, value) => console.log(`${value}-${key}`));
  }, 500),
);

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    let parsedForm = localStorage.getItem('feedback-form-state');

    parsedForm = parsedForm ? JSON.parse(parsedForm) : {};

    parsedForm[event.target.name] = event.target.value;
    if (parsedForm) {
      localStorage.setItem('feedback-form-state', JSON.stringify(parsedForm));
    }
  }, 500),
);

feedbackForm.addEventListener('submit', () => {
  localStorage.removeItem('feedback-form-state');
});

function initForm() {
  let parsedForm = localStorage.getItem('feedback-form-state');

  if (!parsedForm) return;
  parsedForm = JSON.parse(parsedForm);

  Object.entries(parsedForm).forEach(
    ([name, value]) => (feedbackForm.elements[name].value = value),
  );
}
