<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>SmartEvent</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="$router.push('/home')"> HOME </ion-button>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item button @click="$router.push('/eventos/1')">
          <ion-label>
            <h2>BTS WORLD TOUR | ARIRANG</h2>
            <p>Turnê confirmada</p>
          </ion-label>
          <ion-icon :icon="starOutline" slot="end"></ion-icon>
        </ion-item>

        <ion-item button @click="$router.push('/eventos/2')">
          <ion-label>
            <h2>ROCK IN RIO</h2>
            <p>Turnê confirmada</p>
          </ion-label>
          <ion-icon :icon="starOutline" slot="end"></ion-icon>
        </ion-item>

        <ion-item button @click="$router.push('/eventos/3')">
          <ion-label>
            <h2>BAD BUNNY</h2>
            <p>Turnê confirmada</p>
          </ion-label>
          <ion-icon :icon="starOutline" slot="end"></ion-icon>
        </ion-item>
      </ion-list>
  
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { starOutline } from 'ionicons/icons'
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
  IonIcon
} from '@ionic/vue'
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
