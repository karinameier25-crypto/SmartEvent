<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="$router.push('/home')">HOME</ion-button>

      <div v-if="favoritos.length === 0" class="mensagem-vazia">
        Nenhum evento foi favoritado ainda.
      </div>

      <ion-list v-else>
        <ion-item
          v-for="evento in favoritos"
          :key="evento.id"
          button
          @click="$router.push(`/eventos/${evento.id}`)"

          
        >
          <ion-thumbnail slot="start">
           <img :src="evento.imagem" :alt="evento.nome" />
          </ion-thumbnail>

          <ion-label>
            <h2>{{ evento.nome }}</h2>
            <p>{{ evento.subtitulo }}</p>
          </ion-label>

          <ion-icon :icon="star" slot="end"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { star } from 'ionicons/icons'
import { eventos } from '@/data/eventos'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonThumbnail
} from '@ionic/vue'

const favoritos = computed(() => {
  return eventos.filter((evento) => evento.favorito)
})
</script>

<style scoped>

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.mensagem-vazia {
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
  color: gray;
}
</style>