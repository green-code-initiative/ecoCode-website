<template>
  <form @submit.prevent="submitForm">
    <div class="container">
      <div class="container-form">
        <div class="box-column">
          <div class="merge-input">
            <input v-model="firstname" class="input" type="text" placeholder="Nom" />
            <input v-model="lastname" class="input" type="text" placeholder="Prénom" />
          </div>
          <input v-model="company" class="input" type="text" placeholder="Votre organisation" />
          <input v-model="role" class="input" type="text" placeholder="Votre rôle" />
          <div class="merge-input">
            <input v-model="phone" class="input" type="text" placeholder="Téléphone" />
            <input v-model="email" class="input" type="text" placeholder="E-mail" />
          </div>
          <textarea v-model="message" class="text-area" placeholder="Votre besoin"></textarea>
          <div class="hcaptcha">
            <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d"></vue-hcaptcha>
          </div>
          <div class="error-message" v-if="error" :class="{ show: error }">
            {{ error }}
          </div>
          <div style="margin-top: 15px;" class="success-message" v-if="success">{{ success }}</div>
        </div>
      </div>
      <ButtonBlock type="submit" typebutton="blue" text="Recevez notre cas client"></ButtonBlock>
    </div>
  </form>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import ButtonBlock from "@/components/global/Button.vue";
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

const validateFirstName = () => {
  if (!firstname.value) {
    error.value = "Le nom est requis.";
  } else {
    error.value = "";
    return true;
  }
};

const validateLastName = () => {
  if (!lastname.value) {
    error.value = "Le prénom est requis.";
  } else {
    error.value = "";
    return true;
  }
};

const validateCompany = () => {
  if (!company.value) {
    error.value = "Votre organisation est requis.";
  } else {
    error.value = "";
    return true;
  }
};

const validateRole = () => {
  if (!role.value) {
    error.value = "Votre role est requis.";
  } else {
    error.value = "";
    return true;
  }
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    error.value = "L'e-mail est requis.";
  } else if (!emailPattern.test(email.value)) {
    error.value = "L'e-mail n'est pas valide.";
  } else {
    error.value = "";
    return true;
  }
};

const validatePhone = () => {
  const phonePattern = /^\d+$/;
  if (!phone.value) {
    error.value = "Le téléphone est requis.";
  } else if (!phonePattern.test(phone.value)) {
    error.value = "Le téléphone doit contenir uniquement des chiffres.";
  } else if (phone.value.length < 10 || phone.value.length > 10) {
    error.value = "Le numéro de téléphone doit contenir 10 chiffres.";
  } else {
    error.value = "";
    return true;
  }
};

const validateMessage = () => {
  if (!message.value) {
    error.value = "Veuillez fournir des détails supplémentaires si nécessaire.";
  } else {
    error.value = "";
    return true;
  }
};

const validateCaptcha = () => {
  if (!captcha.value) {
    error.value = 'Le captcha est requis.';
  } else {
    error.value = '';
    return true
  }
};

const validateForm = () => {
  const validationFunctions = [
    validateFirstName,
    validateLastName,
    validateCompany,
    validateRole,
    validateEmail,
    validatePhone,
    validateMessage,
    validateCaptcha
  ];

  const isValid = validationFunctions.every((validationFunction) => validationFunction());



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
      success.value = "Votre demande a bien été enregistrer";
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
  align-items: center;
  justify-content: center;
  width: 100%;
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
</style>
