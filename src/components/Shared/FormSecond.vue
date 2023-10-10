<template>
  <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
    <div class="container">
      <div class="container-form">
        <div class="box-column">
          <div class="merge-input">
            <div>
              <label class="text-input" for="firstname">Nom :</label>
              <input v-model="firstname" class="input" type="text" id="firstname" aria-label="Entrez votre nom" />
            </div>
            <div>
              <label class="text-input" for="lastname">Prénom :</label>
              <input v-model="lastname" class="input" type="text" id="lastname" aria-label="Entrez votre prénom" />
            </div>
          </div>
          <label class="text-input" for="company">Organisation :</label>
          <input v-model="company" class="input" type="text" id="company" aria-label="Entrez le nom de votre organisation" />
          <label class="text-input" for="role">Rôle :</label>
          <input v-model="role" class="input" type="text" id="role" aria-label="Entrez votre rôle" />
          <div class="merge-input">
            <div>
              <label class="text-input" for="phone">Téléphone :</label>
              <input v-model="phone" class="input" type="text" id="phone" aria-label="Entrez votre numéro de téléphone" />
            </div>
            <div>
              <label class="text-input" for="email">E-mail * :</label>
              <input v-model="email" required class="input" type="text" id="email" aria-label="Entrez votre adresse e-mail" />
            </div>
          </div>
          <label class="text-input" for="message">Votre besoin :</label>
        <textarea v-model="message" class="text-area" id="message" aria-label="Entrez votre besoin"></textarea>
        </div>
        
        <div class="hcaptcha">
          <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d" aria-label="Rendez vous sur https://www.hcaptcha.com/accessibility pour obtenir un passe-droit accessible"></vue-hcaptcha>
        </div>
        <div class="error-message" v-if="error" aria-live="assertive">{{ error }}</div>
        <div style="margin-top: 15px;" class="success-message" v-if="success" aria-live="assertive">{{ success }}</div>
      </div>
    </div>
    <ButtonBlock type="submit" typebutton="blue" text="Recevez notre cas client" aria-label="Soumettez le formulaire"></ButtonBlock>
  </form>  
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import ButtonBlock from "@/components/global/Button.vue";
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

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
      firstname: firstname.value,
      lastname: lastname.value,
      company: company.value,
      role: role.value,
      phone: phone.value,
      email: email.value,
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
      const response = await axios.post("https://api.ecocode.io/client_case", formData, headers);
      success.value = "Votre demande a bien été enregistrée";
    } catch (err) {
      error.value = "Erreur d'envoie, veuillez réessayer plus tard.";
    }
  }
};

function getCaptcha(response: any) {
  captcha.value = response;
};

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
.container {
  width: 100%;
  min-height: 396px;
  height: max-content;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.container-form {
  display: flex;
  padding-top: 25px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.box-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0 0 0;
  flex-wrap: wrap;
  max-width: 700px;
}

.text-input {
  height: max-content;
  margin: 0px 0px 0px 0px;
  color: #355086;
  font-size: 18px;
  font-weight: 900;
  outline: none;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  height: 60px;
  margin: 0px 0px 40px 0px;
  background-color: #ffffff;
  padding: 15px 42.5px 17px 20px;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  color: #022826;
  font-family: "Mulish", sans-serif;
  font-size: 18px;
  font-weight: 500;
  outline: none;
}

.text-area {
  width: 100%;
  height: 135px;
  margin: 0px 0px 0px 0px;
  background-color: #ffffff;
  padding: 15px 42.5px 17px 20px;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  color: #022826;
  font-family: "Mulish", sans-serif;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  resize: none;
}


.merge-input {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.merge-input>div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.merge-input>div:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 40px;
}

.merge-input>div:last-child>.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-left: 0px;
}

.merge-input>div:last-child>.text-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-left: 0px;
}

.error-message {
  margin: 15px 0px 15px
}

.merge-input>.input {
  width: 100%;
  padding: 15px 33.4px 17px 20px;
}

.merge-input>.input:last-child {
  margin-left: 40px;
}

.hcaptcha {
  margin-top: 15px;
}

@media screen and (max-width: 768px) {


  .text-input{
    margin-left: 25px;
  }

  .merge-input > div>.text-input{
    margin-left: 0px;
  }

  .merge-input > div{
    width: 100%;
  }

  .merge-input > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 0px;
}

  .merge-input > div> .input{
    margin-left: 0px;
    width: 100%;
  }
  
  .box {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 25px 20px 25px;

    >div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 10px 25px 0 25px;
    }
  }

  .box-column {
    padding: 0 25px 0 25px;
  }

  .merge-input {
    width: 80%;
    margin: 0px 25px 0px 25px;
    flex-direction: column;
  }

  .merge-input>.input:last-child {
    margin-left: inherit;
  }

  input[type="radio"] {
    margin: 0 10px 0 0;
  }

  .input {
    width: 80%;
    margin: 0px 25px 20px 25px;
  }

  .error-message {
    margin: 0px 25px 20px 25px
  }

  .text-area {
    width: 80%;
    margin: 0px 25px 20px 25px;
  }

  .title {
    padding: 0 50px 0 50px;
    font-size: 25px;
    margin: 0 36px 0 36px;
  }

  select {
    width: 80%;
    margin: 0 25px 0 25px;
  }

  .title-box {
    margin: 0 25px 0 25px;
  }

  .hcaptcha {
    margin: 0 25px 0 25px;
  }
}

@media screen and (max-width: 375px) {
  .hcaptcha {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0px 10px 0px;
  }

  .box-column {
    padding: 0 0px 0 0px;
  }
}
</style>
