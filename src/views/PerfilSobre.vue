<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Perfil / Sobre</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="$router.push('/home')">HOME</ion-button>

      <div class="perfil-topo">
        <ion-icon :icon="personCircleOutline" class="icone-perfil"></ion-icon>
        <h2>Perfil do Usuário</h2>
      </div>

      <p>
        O SmartEvent é um aplicativo criado para visualizar, consultar e favoritar
        eventos locais como shows, palestras, esportes e workshops.
      </p>

      <ion-item>
        <ion-input
          label="Seu nome"
          label-placement="stacked"
          placeholder="Digite seu nome"
          v-model="nome"
        ></ion-input>
      </ion-item>

      <p class="mensagem">Nome digitado: {{ nome }}</p>
      <p class="mensagem-secundaria">{{ mensagem }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { personCircleOutline } from 'ionicons/icons'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonIcon
} from '@ionic/vue'

const nome = ref('')
const mensagem = ref('Digite seu nome no campo acima.')

watch(nome, (novoValor) => {
  if (novoValor.trim() === '') {
    mensagem.value = 'Digite seu nome no campo acima.'
  } else {
    mensagem.value = `Olá, ${novoValor}! Seja bem-vinda ao SmartEvent.`
  }
})
</script>

<style scoped>

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.perfil-topo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 10px;
}

.icone-perfil {
  font-size: 60px;
}

.mensagem {
  margin-top: 20px;
  font-weight: bold;
}

.mensagem-secundaria {
  color: gray;
}
</style>