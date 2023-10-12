<template>
  <div class="container">
    <h2 class="title">On discute d’ecoCode ?</h2>

    <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
      <div class="form-field">
        <span class="text-label">Je suis :</span>
        <div class="radio-field">
          <input type="radio" id="individual" v-model="type" value="individu"
                 aria-label="Sélectionner 'Un individu'"/>
          <label for="individual">Un individu</label>
        </div>
        <div class="radio-field">
          <input type="radio" id="organization" v-model="type" value="organisation"
                 aria-label="Sélectionner 'Une organisation'"/>
          <label for="organization">Une organisation</label>
        </div>
      </div>

      <div class="form-field">
        <label for="subject" class="text-label">Je souhaite :</label>
        <select v-model="subject" id="subject" aria-label="Sélectionnez votre sujet">
          <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
      </div>

      <div class="form-field">
        <label class="text-label" for="name">Nom de l’entreprise / Personne :</label>
        <input class="input" v-model="name" type="text" id="name"
               aria-label="Entrez le nom de l’entreprise ou de la personne"/>
      </div>

      <div class="form-fieldset">
        <div class="form-field">
          <label class="text-label" for="email">E-mail * :</label>
          <input class="input" required v-model="email" type="email" id="email"
                 aria-label="Entrez votre adresse e-mail"/>
        </div>
        <div class="form-field">
          <label class="text-label" for="phone">Téléphone :</label>
          <input class="input" v-model="phone" type="tel" id="phone" aria-label="Entrez votre numéro de téléphone"/>
        </div>
      </div>

      <div class="form-field">
        <label class="text-label" for="message">Des éléments supplémentaires ?</label>
        <input class="input" v-model="message" type="text" id="message"
               aria-label="Entrez des éléments supplémentaires"/>
      </div>

      <div class="hcaptcha">
        <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d"
                      aria-label="Rendez vous sur https://www.hcaptcha.com/accessibility pour obtenir un passe-droit accessible"></vue-hcaptcha>
      </div>

      <div class="form-submit">
        <div class="error-message" v-if="error" aria-live="assertive">{{ error }}</div>
        <div style="margin-top: 15px;" class="success-message" v-if="success" aria-live="assertive">{{ success }}</div>

        <button type="submit" aria-label="Envoyer le formulaire de contact">
          <ChevronLeft />
          Envoyer
          <ChevronRight />
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, watch } from "vue";
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import ChevronLeft from '@/assets/icons/chevron_left.svg';
import ChevronRight from '@/assets/icons/chevron_right.svg';

let captcha = ref("");
const error = ref("");
const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const success = ref("");

/**
 * Validates an email address to ensure it is not empty and follows a valid email format.
 *
 * @returns {boolean} True if the email is valid, false otherwise.
 */
const validateEmail = () => {
  /**
   * Regular expression to validate an email address:
   * - It allows alphanumeric characters, dots, hyphens, percent signs, and plus or minus signs.
   * - It requires an "@" symbol after the username.
   * - It allows a domain consisting of alphanumeric characters, hyphens, and dots.
   * - The domain must end with a dot followed by at least two alphabetic characters.
   */
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value) {
    error.value = "L'e-mail est requis.";
  } else if (!emailPattern.test(email.value)) {
    error.value = "L'e-mail n'est pas valide.";
  } else {
    error.value = '';
    return true;
  }
};

/**
 * Validates a phone number to ensure it is not empty and follows a valid phone number format.
 *
 * @returns {boolean} True if the phone number is valid, false otherwise.
 */
const validatePhone = () => {
  /**
   * Regular expression to validate a phone number:
   * - It can optionally start with a plus sign (+).
   * - It can then contain one or more digits (0-9), commas, periods, or whitespace.
   * - The string must end after the allowed characters.
   */
  const phonePattern = /^\+?[\d,. ]+$/;

  if (!phone.value) {
    error.value = '';
    return true;
  } else if (!phonePattern.test(phone.value)) {
    error.value = 'Le téléphone doit contenir uniquement des chiffres, +, ,, . ou un espace.';
    return false;
  }
};

/**
 * Validates whether a CAPTCHA field is empty.
 *
 * @returns {boolean} True if the CAPTCHA field is not empty, false otherwise.
 */
const validateCaptcha = () => {
  if (!captcha.value) {
    error.value = 'Le captcha est requis.';
  } else {
    error.value = '';
    return true;
  }
};

/**
 * Validates a complete form by executing a set of validation functions.
 *
 * @returns {boolean} True if all fields are valid, false otherwise.
 */
const validateForm = () => {
  const validationFunctions = [
    validateEmail,    // Function to validate email
    validatePhone,    // Function to validate phone number
    validateCaptcha  // Function to validate CAPTCHA
  ];

  // Check if all validation functions return true.
  const isValid = validationFunctions.every((validationFunction) => validationFunction());

  // Return true if all form fields are valid, otherwise return false.
  return isValid;
};


const submitForm = async () => {
  if (validateForm()) {
    const formData = {
      type: type.value,
      subject: subject.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
      captcha: captcha.value
    };

    const headers = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    };

    try {
      const response = await axios.post('https://api.ecocode.io/contact', formData, headers);
      success.value = "Votre demande a bien été enregistrée";
    } catch (err) {
      error.value = "Erreur d'envoie, veuillez réessayer plus tard.";
    }

  }
};

function getCaptcha(response: any) {
  captcha.value = response;
}

const type = ref("individu");
const subject = ref("Je souhaite contribuer à la création de règles sur ecoCode");
const options = ref([
  "Je souhaite contribuer à la création de règles sur ecoCode",
  "Je souhaite m’impliquer sur d’autres aspects d’ecoCode",
  "Je souhaite des informations sur ecoCode",
]);

watch(type, (newValue) => {
  if (newValue === "individu") {
    options.value = [
      "Je souhaite contribuer à la création de règles sur ecoCode",
      "Je souhaite m’impliquer sur d’autres aspects d’ecoCode",
      "Je souhaite des informations sur ecoCode",
    ];
    subject.value = "Je souhaite contribuer à la création de règles sur ecoCode";
  } else if (newValue === "organisation") {
    options.value = [
      "Je souhaite développer des règles pour mon organisation",
      "Je souhaite contribuer à ecoCode (mise à contribution de collaborateurs)",
      "Je souhaite soutenir ecoCode financièrement",
      "Je souhaite des informations sur ecoCode",
    ];
    subject.value = "Je souhaite développer des règles pour mon organisation";
  }
});

</script>

<style scoped lang="scss">
.container {
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #f3f3f3;
}

.title {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: normal;
  text-align: center;
  color: #355086;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-label {
  color: #355086;
  font-size: 18px;
  font-weight: 900;
  outline: none;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-fieldset {
  display: grid;
  gap: 1rem;
}

.radio-field {
  display: flex;
  gap: 1rem;
  margin-block-end: 0.5rem;
}

select {
  width: 100%;
  padding: 1rem 3.5rem 1rem 1rem;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  color: #022826;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 30px top 50%;
  background-size: 0.65rem auto;
}

label {
  cursor: pointer;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 2px;
  background-clip: content-box;
  border: 2px solid #c1d8cfff;
  background-color: #e7e6e7;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 0.21px;
  color: #022826;

  &:checked {
    width: 20px;
    height: 20px;
    border: 2px solid #57c18b;
    background-color: #57c18b;
  }
}

.input {
  height: 60px;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  color: #022826;
  font-size: 18px;
  font-weight: 500;
  outline: none;
}

.form-submit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

button[type="submit"] {
  display: flex;
  justify-items: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  background-color: #355086;
  border: 2px solid white;
  color: white;

  &:hover {
    background-color: #283d66;
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  form {
    width: 768px;
  }

  .form-fieldset {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
