<template>
  <form @submit.prevent="submitForm">
    <span class="title">Rejoins ecoCode !</span>
    <span class="subtitle">Rejoins-nous et contribue à faire du numérique un domaine plus durable.</span>

    <div class="text-field">
      <Textfield id="email" v-model="email" type="email" label="E-mail * :" autocomplete="email" centered/>
    </div>

    <div style="margin-top: 15px;">
      <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d"></vue-hcaptcha>
    </div>
    <div style="margin-top: 15px;" class="error-message" v-if="error">{{ error }}</div>
    <div style="margin-top: 15px;" class="success-message" v-if="success">{{ success }}</div>

    <ButtonBlock type="submit" typebutton="blue" text="Recevoir les informations"/>

    <div class="join-us">
      <p>Tu souhaites contribuer sans plus attendre ? Rejoins-nous sur</p>
      <a href="https://github.com/green-code-initiative" target="_blank">
        <img width="120" height="32" src="@/assets/img/github.webp" alt="GitHub logo"/>
      </a>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import ButtonBlock from '@/components/global/Button.vue';
import { post } from '@/util/fetch';
import Textfield from "@/components/Shared/Textfield.vue";

const validateEmail = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value) {
        error.value = 'L\'e-mail est requis.';
    } else if (!emailPattern.test(email.value)) {
        error.value = 'L\'e-mail n\'est pas valide.';
    } else {
        error.value = '';
        return true
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

const submitForm = async () => {
  if (validateEmail() && validateCaptcha()) {
    const formData = {
      email: email.value,
      captcha: captcha.value
    };

    try {
      await post('newsletter', formData);
      success.value = "Votre demande a bien été enregistrée";
    } catch (err) {
      error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
    }
  }
};

function getCaptcha(response: any) {
  captcha.value = response;
};

let email = ref("");
let captcha = ref("");
let error = ref("");
let success = ref("");
</script>

<style scoped lang="scss">
form {
    min-height: 396px;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
}

.title {
    max-width: 1089px;
    font-size: 40px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #355086;
    padding: 0px 0 0 0;
}

.subtitle {
    font-size: 32px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: #57c18b;
    padding: 53px 0 0 0;
    max-width: 779px;
}

.text-field {
  margin: 3rem 1rem 0;
  width: 320px;
  max-width: 100%;
}

.join-us {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.125rem;
  gap: 0.5rem;
  margin-top: 1rem;
}

@media screen and (max-width: 1150px) {
  .title {
    margin: 0 36px 0 36px;
    font-size: 32px;
  }

  .subtitle {
    margin: 0 36px 0 36px;
    font-size: 25px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    margin: 0 36px 0 36px;
    font-size: 28px;
  }

  .subtitle {
    margin: 0 36px 0 36px;
    font-size: 20px;
  }

  .join-us {
    flex-direction: column;
    padding: 25px 25px 0;
    gap: 1rem;
  }
}
</style>
