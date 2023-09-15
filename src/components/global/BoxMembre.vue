<template>
    <div v-if="team === 'core team'" class="container">
        <div class="boxMembre" v-for="membre in tabcoreteam">
            <div class="box-container">
                <img class="img" :src="getImageUrl(membre.img)" :width="membre.width" :height="membre.height" />
            </div>
            <span class="name">{{ membre.name }}</span>
            <span v-if="membre.entreprise" class="entreprise">{{ membre.entreprise }}</span>
            <span v-else class="empty"></span>
            <a :href="membre.link" target="_blank"><img width="24" height="24"
                    src="@/assets/img/icon/icon-linkedIn.png"></a>
        </div>
    </div>

    <div v-if="team === 'contributeur team'" class="container">
        <div class="boxMembre" v-for="membre in tabContributeur">
            <div class="box-container">
                <img class="img" :src="getImageUrl(membre.img)" :width="membre.width" :height="membre.height" />
            </div>
            <span class="name">{{ membre.name }}</span>
            <span v-if="membre.entreprise" class="entreprise">{{ membre.entreprise }}</span>
            <span v-else class="empty"></span>
            <a :href="membre.link" target="_blank"><img width="24" height="24"
                    src="@/assets/img/icon/icon-linkedIn.png"></a>
        </div>
    </div>
</template>

<script setup lang="ts">
import CoreTeamData from '@/assets/data/core-team.json';

import ContributeurData from '@/assets/data/contribution.json';

const props = defineProps({
    team: String,
});


const tabcoreteam= CoreTeamData;

const tabContributeur= ContributeurData;

function getImageUrl(imgPath: string) {
    return (`/img/profil/${imgPath}`);
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 37px 0  0;
    max-width: 900px;
}

.boxMembre {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 37px 0 0 0;
    max-width: 1200px;
    margin: 0px 23.5px 9px 23.5px;
    width: 160px;
}

.box-container {
    border-radius: 100%;
    
    height: 80px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    position: relative;
}

.img {
    position: absolute;
    bottom: 0;
    transform: rotate(4deg);
    -webkit-transform: rotate(4deg);
    -moz-transform: rotate(4deg);
    -ms-transform: rotate(4deg);
    -o-transform: rotate(4deg);
    overflow: hidden;
    border-radius: 100%;
    border: solid 3px #87ccff;
}

.name {
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #022826;
}

.entreprise{
    font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #022826;
  margin: 0 0 8px 0;
}

.empty {
    margin-bottom: 16px !important;
}

@media screen and (max-width: 425px) {
.boxMembre{
    margin: 0 0 0 0;
}
    
}

</style>
