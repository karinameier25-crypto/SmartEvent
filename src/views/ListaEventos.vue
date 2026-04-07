<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Lista de Eventos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="$router.push('/home')">HOME</ion-button>

      <ion-card
        v-for="evento in eventos"
        :key="evento.id"
        class="evento-card"
        @click="$router.push(`/eventos/${evento.id}`)"
      >
        <img :src="evento.imagem" :alt="evento.nome" />

        <ion-card-header>
          <ion-card-title>{{ evento.nome }}</ion-card-title>
          <ion-card-subtitle>{{ evento.subtitulo }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{ evento.descricao }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { eventos } from '@/data/eventos'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/vue'
</script>

<style scoped>

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.evento-card {
  margin-top: 16px;
  cursor: pointer;
}

.evento-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>