<template>
    <form @submit.prevent="submitForm">
        <div class="container">
            <span class="title">Rejoins ecoCode !</span>
            <span class="subtitle">Rejoins-nous et contribue à faire du numérique un domaine plus durable.</span>
            <label class="text-input" for="email">E-mail * :</label>
            <input v-model="email" id="email" type="email" autocomplete="email"/>
            <div style="margin-top: 15px;">
                <vue-hcaptcha @verify="getCaptcha" sitekey="359a430d-a0bf-4548-a583-959e93110b6d"></vue-hcaptcha>
            </div>
            <div style="margin-top: 15px;" class="error-message" v-if="error">{{ error }}</div>
            <div style="margin-top: 15px;" class="success-message" v-if="success">{{ success }}</div>
            <ButtonBlock type="submit" typebutton="blue" text="Recevoir les informations"></ButtonBlock>
            <span class="link">Tu souhaites contribuer sans plus attendre ? Rejoins-nous sur
                <a href="https://github.com/green-code-initiative" target="_blank">
                  <img width="120" height="60" src="/img/logo/LogoGithub.png" />
                </a>
            </span>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import ButtonBlock from '@/components/global/Button.vue';
import { post } from '@/util/fetch';

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
.container {
    width: 100%;
    min-height: 396px;
    padding-top: 50px;
    height: max-content;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
    padding-bottom: 50px;
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

.text-input {
  height: max-content;
  margin: 55px 0px 20px 0px;
  color: #355086;
  font-size: 18px;
  font-weight: 900;
  outline: none;
  margin-bottom: 20px;
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

input {
    max-width: 322px;
    height: 60px;
    margin: 0px 0px 0px 0px;
    background-color: #ffffff;
    padding: 15px 42.5px 17px 20px;
    border-radius: 8px;
    border: solid 1px rgba(0, 0, 0, 0.2);
    color: #022826;
    font-size: 18px;
    font-weight: 500;
    outline: none;
}

.link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;

    >a>img {
        margin-left: 10px;
    }
}

@media screen and (max-width: 1150px) {

    .title{
        margin: 0 36px 0 36px;
        font-size: 32px;
    }
    .subtitle {
        margin: 0 36px 0 36px;
        font-size: 25px;
    }
}

@media screen and (max-width: 768px) {

    .title{
        margin: 0 36px 0 36px;
        font-size: 28px;
    }
    .subtitle {
        margin: 0 36px 0 36px;
        font-size: 20px;
    }
}

@media screen and (max-width: 425px) {
    .link {
        flex-direction: column;
        padding: 25px;
    }
}
</style>
