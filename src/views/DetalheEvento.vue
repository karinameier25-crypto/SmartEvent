<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalhe do Evento</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button @click="$router.push('/eventos')">Voltar</ion-button>

      <ion-card v-if="evento">
        <img :src="evento.imagem" :alt="evento.nome" />

        <ion-card-header>
          <ion-card-title>{{ evento.nome }}</ion-card-title>
          <ion-card-subtitle>{{ evento.subtitulo }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p><strong>Descrição:</strong> {{ evento.descricao }}</p>
          <p><strong>Data:</strong> {{ evento.data }}</p>
          <p><strong>Local:</strong> {{ evento.local }}</p>

          <ion-button expand="block" @click="alternarFavorito">
            <ion-icon
              slot="start"
              :icon="evento.favorito ? star : starOutline"
            />
            {{ evento.favorito ? 'Remover dos favoritos' : 'Favoritar' }}
          </ion-button>
        </ion-card-content>
      </ion-card>

      <p v-else>Evento não encontrado.</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { star, starOutline } from 'ionicons/icons'
import { eventos } from '@/data/eventos'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon
} from '@ionic/vue'

const route = useRoute()

const evento = computed(() => {
  const id = Number(route.params.id)
  return eventos.find((e) => e.id === id)
})

function alternarFavorito() {
  if (evento.value) {
    evento.value.favorito = !evento.value.favorito
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

p {
  margin-bottom: 10px;
}
</style>