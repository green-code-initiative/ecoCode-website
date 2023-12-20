<template>
  <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
    <div class="form-fieldset">
      <div class="form-field">
        <label class="text-label" for="lastname">Nom :</label>
        <input v-model="lastname" class="input" type="text" id="lastname" autocomplete="family-name"/>
      </div>
      <div class="form-field">
        <label class="text-label" for="firstname">Prénom :</label>
        <input v-model="firstname" class="input" type="text" id="firstname" autocomplete="given-name"/>
      </div>
    </div>

    <div class="form-field">
      <label class="text-label" for="company">Organisation :</label>
      <input v-model="company" class="input" type="text" id="company" autocomplete="organization"/>
    </div>

    <div class="form-field">
      <label class="text-label" for="role">Rôle :</label>
      <input v-model="role" class="input" type="text" id="role" autocomplete="organization-title"/>
    </div>

    <div class="form-fieldset">
      <div class="form-field">
        <label class="text-label" for="phone">Téléphone :</label>
        <input v-model="phone" class="input" type="tel" id="phone" autocomplete="tel"/>
      </div>
      <div class="form-field">
        <label class="text-label" for="email">E-mail * :</label>
        <input v-model="email" required class="input" type="email" id="email" autocomplete="email"/>
      </div>
    </div>

    <div class="form-field">
      <label class="text-label" for="message">Votre besoin :</label>
      <textarea v-model="message" id="message"></textarea>
    </div>

    <div class="hcaptcha">
      <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d"
                    aria-label="Rendez vous sur https://www.hcaptcha.com/accessibility pour obtenir un passe-droit accessible"/>
    </div>

    <div class="form-submit">
      <div class="error-message" v-if="error" aria-live="assertive">{{ error }}</div>
      <div style="margin-top: 15px;" class="success-message" v-if="success" aria-live="assertive">{{ success }}</div>

      <ButtonBlock type="submit" typebutton="blue" text="Recevez notre cas client"
                   aria-label="Soumettez le formulaire"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import ButtonBlock from '@/components/global/Button.vue';
import { post } from '@/util/fetch';

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

  // Return true if all form fields are valid, otherwise return false.
  return validationFunctions.every((validationFunction) => validationFunction());
};


const submitForm = async () => {
  if (validateForm()) {
    const formData = {
      firstname: firstname.value,
      lastname: lastname.value,
      company: company.value,
      role: role.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
      captcha: captcha.value
    };

    try {
      await post('client_case', formData);
      success.value = "Votre demande a bien été enregistrée";
    } catch (err) {
      error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
    }
  }
};

function getCaptcha(response: any) {
  captcha.value = response;
}

let captcha = ref("");
const error = ref("");
const firstname = ref("");
const lastname = ref("");
const company = ref("");
const role = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");
const success = ref("");
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
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

@media (min-width: 796px) {
  form {
    width: 768px;
  }

  .form-fieldset {
    grid-template-columns: repeat(2, 1fr);
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

textarea {
  width: 100%;
  height: 135px;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  color: #022826;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  resize: none;
}
</style>
