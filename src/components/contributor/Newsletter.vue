<template>
  <form @submit.prevent="submitForm">
    <div class="headings">
      <h2 class="heading-2">Rejoins ecoCode !</h2>
      <h3 class="heading-3">Rejoins-nous et contribue à faire du numérique un domaine plus durable.</h3>
    </div>

    <div class="text-field">
      <Textfield id="email" v-model="email" type="email" label="E-mail * :" required autocomplete="email" centered/>
    </div>

    <div style="margin-top: 15px;">
      <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d"></vue-hcaptcha>
    </div>
    <div style="margin-top: 15px;" class="error-message" v-if="error">{{ error }}</div>
    <div style="margin-top: 15px;" class="success-message" v-if="success">{{ success }}</div>

    <AppButton type="submit" variant="primary" text="Recevoir les informations"/>

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
import AppButton from '@/components/shared/AppButton.vue';
import { post } from '@/util/fetch';
import Textfield from "@/components/shared/form/AppTextfield.vue";

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
    } catch {
      error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
    }
  }
};

function getCaptcha(response: any) {
  captcha.value = response;
}

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

.headings {
  display: flex;
  flex-direction: column;
  gap: 3rem;
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

@media screen and (max-width: 768px) {
  .join-us {
    flex-direction: column;
    padding: 25px 25px 0;
    gap: 1rem;
  }
}
</style>
