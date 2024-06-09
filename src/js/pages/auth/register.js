import Auth from '../../network/auth';

const Register = {
  async init() {
    this.isSubmitting = false;
    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (this.isSubmitting) return;

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData(formData)) {
      try {
        this._showSpinner();
        await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        this._hideSpinner();
        this._goToLoginPage();
      } catch (error) {
        this._hideSpinner();
        this._showAllert('register', error.response.data.message);
      }
    }
  },

  _showAllert(type, message) {
    const alertPlaceholder = document.getElementById('div-alert');
    alertPlaceholder.innerHTML = `<alert-wrapper type="${type}" message="${message}"></alert-wrapper>`;
  },

  _getFormData() {
    const name = document.querySelector('#validationCustomRecordName');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _toggleSpinner(show) {
    this.isSubmitting = show;
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = show;

    const textButton = document.querySelector('#btn-text-login');
    const spinner = document.querySelector('#spinner');

    if (show) {
      textButton.classList.add('d-none');
      spinner.classList.remove('d-none');
    } else {
      textButton.classList.remove('d-none');
      spinner.classList.add('d-none');
    }
  },

  _showSpinner() {
    this._toggleSpinner(true);
  },

  _hideSpinner() {
    this._toggleSpinner(false);
  },

  _goToLoginPage() {
    this._showAllert('register-success');

    setTimeout(() => {
      const alertInterval = document.getElementById('alert-interval');

      let timeLeft = 5;
      const intervalId = setInterval(() => {
        if (timeLeft > 0) {
          alertInterval.innerHTML = `${timeLeft} seconds`;
          timeLeft--;
        } else {
          clearInterval(intervalId);
          window.location.href = '/auth/login.html';
        }
      }, 1000);
    }, 0);
  },
};

export default Register;
