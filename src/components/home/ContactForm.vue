<template>
  <div class="container">
    <h2 class="heading-2">On discute d’ecoCode ?</h2>

    <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
      <div class="form-field" role="radiogroup" aria-labelledby="i-am">
        <span class="text-label" id="i-am">Je suis :</span>
        <div class="radio-field">
          <input type="radio" id="individual" v-model="type" value="individu"/>
          <label for="individual">Un individu</label>
        </div>
        <div class="radio-field">
          <input type="radio" id="organization" v-model="type" value="organisation"/>
          <label for="organization">Une organisation</label>
        </div>
      </div>

      <Selectfield id="subject" v-model="subject" label="Je souhaite :" :items="options"/>

      <Textfield id="entity-name" v-model="name" label="Nom de l’entreprise / Personne"/>

      <Fieldset>
        <Textfield id="email" v-model="email" type="email" label="E-mail * :" required autocomplete="email"/>
        <Textfield id="phone" v-model="phone" type="tel" label="Téléphone :" autocomplete="tel"/>
      </Fieldset>

      <Textfield id="message" v-model="message" label="Des éléments supplémentaires ?"/>

      <div class="hcaptcha">
        <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d"
                      aria-label="Rendez vous sur https://www.hcaptcha.com/accessibility pour obtenir un passe-droit accessible"></vue-hcaptcha>
      </div>

      <div class="form-submit">
        <div class="error-message" v-if="error" aria-live="assertive">{{ error }}</div>
        <div style="margin-top: 15px;" class="success-message" v-if="success" aria-live="assertive">{{ success }}</div>

        <ButtonBlock type="submit" typebutton="blue" text="Envoyer" aria-label="Envoyer le formulaire de contact"/>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import { post } from '@/util/fetch';
import ButtonBlock from "@/components/global/Button.vue";
import Textfield from "@/components/Shared/Textfield.vue";
import Fieldset from "@/components/Shared/Fieldset.vue";
import Selectfield from "@/components/Shared/Selectfield.vue";

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
  }else{
    error.value = '';
    return true;
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

    try {
      await post('contact', formData);
      success.value = "Votre demande a bien été enregistrée";
    } catch (err) {
      error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
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

.radio-field {
  display: flex;
  gap: 1rem;
  margin-block-end: 0.5rem;
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

  &:checked {
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-secondary);
    background-color: var(--color-secondary);
  }
}

.form-submit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  form {
    width: 768px;
  }
}
</style>
