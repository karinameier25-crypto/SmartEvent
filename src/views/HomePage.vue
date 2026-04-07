<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>SmartEvent</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="$router.push('/eventos')">EVENTOS</ion-button>
      <ion-button @click="$router.push('/favoritos')">FAVORITOS</ion-button>
      <ion-button @click="$router.push('/perfil')">PERFIL</ion-button>

      <div class="linha-eventos">
        <ion-card
          v-for="evento in eventos"
          :key="evento.id"
          class="card-evento"
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
      </div>
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

.linha-eventos {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card-evento {
  width: 320px;
  cursor: pointer;
}

.card-evento img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
</style>