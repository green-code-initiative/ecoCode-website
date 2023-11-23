<template>

    <div class="container-doc">
        <h1>Voici une documentation de chaque composant :</h1>
        <h3>Voici le composant titleBox :</h3>
        <ul>Params :
            <li>title: Pour lui donner un titre</li>
            <li>subitle: Pour lui donner un sous titre</li>
            <li>typetitle: style du titre et sous titre (possibilité de rajouter des styles) : </li>
            <li>--------- title blue : titre en blue et sous titre en vert</li>
            <li>--------- white black : titre en blanc et sous titre en noir</li>
            <li>--------- full white : titre en blanc et sous titre en blanc</li>
            <li>--------- blue black light : titre en blue et sous titre en noir est pas en gras</li>
            <li>colorBackground: Pour lui donner une couleur de fond</li>
            <li>image: pour autoriser d'afficher une image</li>
            <li>Exemple utiliser :</li>
            <li>TitleBox image="true" colorBackground="#F3F3F3" title="params : title" subtitle="params : sous titre"
                typetitle="title blue" /TitleBox</li>
        </ul>
        <TitleBox image="true" colorBackground="#F3F3F3" title="params : title" subtitle="params : sous titre"
            typetitle="title blue"></TitleBox>
    </div>

    <div class="container-doc">
        <h3>Voici le composant GraphRule :</h3>
        <GraphRule></GraphRule>
    </div>

    <div class="container-doc">
        <h3>Voici le composant GraphStep :</h3>
        <GraphStep></GraphStep>
    </div>

    <div class="container-doc">
        <h3>Voici le composant BoxTechno :</h3>
        <BoxTechno></BoxTechno>
    </div>

    <div class="container-doc">
        <h3>Voici le composant form :</h3>
        <Form></Form>
    </div>

    <div class="container-doc">
        <h3>Voici le composant formSecond :</h3>
        <FormSecond></FormSecond>
    </div>

    <div class="container-doc">
        <h3>Voici le composant Newsletter :</h3>
        <Newsletter></Newsletter>
    </div>

    <div class="container-doc">
        <h3>Voici le composant Block3 :</h3>
        <ul>Params :
            <li>title: Pour lui donner un titre</li>
            <li>Exemple utiliser :</li>
            <li>Block3 title="params : title" /Block3</li>
        </ul>
        <Block3 title="params: title"></Block3>
    </div>

    <div class="container-doc">
        <h3>Voici le composant Espace Membre :</h3>
        <ul>Params :
            <li>team: Pour montrer les team qu'on souhaite</li>
            <li>Exemple utiliser :</li>
            <li>EspaceMembre team="core team" /EspaceMembre</li>
        </ul>
        <EspaceMembre team="core team"></EspaceMembre>
    </div>

    <div class="container-doc">
        <h3>Voici le composant Espace ButtonBlock :</h3>
        <ul>Params :
            <li>title: Pour donner un titre avant le bouton</li>
            <li>text: Pour donner un text dans le bouton</li>
            <li>typebutton: Pour choisir un style au button : </li>
            <li>--------- blue : bouton bleu avec fleche blanche texte de couleur blanc</li>
            <li>--------- White : bouton blanc avec fleche verte texte de couleur bleu</li>
            <li>link: lien pour être rediriger ou on veut </li>
            <li>Exemple utiliser :</li>
            <li>ButtonBlock title="params: title" text="params: text" typebutton="blue" link="/Documentation" /ButtonBlock</li>
        </ul>
        <ButtonBlock title="params: title" text="params: text" typebutton="blue" link="/Documentation"></ButtonBlock>
    </div>

    <div class="container-doc">
        <h3>Voici le composant ProcessRule :</h3>
        <ul>Params :
            <li>title: Pour donner un titre avant le bouton</li>
            <li>text: Pour donner un text dans le box</li>
            <li>position: Pour choisir la position de la fleche : </li>
            <li>--------- left : fleche gauche</li>
            <li>--------- right : fleche droite</li>
            <li>--------- bottom : fleche vers le bas</li>
            <li>titleposition: Pour choisir la position du tilte : </li>
            <li>--------- left : title gauche</li>
            <li>--------- right : title droite</li>
            <li>--------- bottom : title vers le bas</li>
            <li>opacity: Passe une opacity pour le GraphStep pour le background rgba: </li>
            <li>image: Pour autoriser d'afficher une image</li>
            <li>Exemple utiliser :</li>
            <li>ProcessRule title="params: title" text="params: text" position="bottom" :opacity="0.6" image="true" /ProcessRule</li>
        </ul>
        <ProcessRule title="params: title" text="params: text" position="bottom" :opacity="0.6" image="true"></ProcessRule>
    </div>

    <div class="container-doc">
        <h3>Voici le composant Box info :</h3>
        <ul>Params :
            <li>title: Pour donner un titre avant le bouton</li>
            <li>text: Pour donner du text dans la div</li>
            </ul>
        <Boxinfo title="params: title" text="params: text"></Boxinfo>
    </div>

</template>

<script lang="ts" setup>
import TitleBox from '@/components/global/Title.vue';
import Header from '@/components/global/Header.vue';
import ProcessRule from '@/components/global/ProcessRule.vue';
import GraphRule from '@/components/Shared/GraphRule.vue';
import GraphStep from '@/components/Shared/GraphStep.vue';
import ButtonBlock from '@/components/global/Button.vue';
import Boxinfo from '@/components/global/BoxInfo.vue';
import Form from '@/components/Shared/Form.vue';
import BoxTechno from '@/components/global/BoxTechno.vue';
import Newsletter from '@/components/global/Newsletter.vue';
import Block3 from '@/components/Shared/Block3.vue';
import FormSecond from '@/components/Shared/FormSecond.vue';
import EspaceMembre from '@/components/global/BoxMembre.vue';
</script>

<style scoped lang="scss">
.container-doc {
    padding: 50px 0 50px 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container-doc:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
}

.container-sup {
    padding: 50px 0 0px 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1,
h3 {
    padding-bottom: 25px;
}

ul {
    padding-bottom: 25px;
}

li{
    padding-top: 5px;
    padding-bottom: 5px;
}

ul,
li {
    list-style-type: none;
}
</style>
