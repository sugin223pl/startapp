<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="screen1" href="/screens/screen1">
          <ion-icon :icon="triangle" />
          <ion-label>screen 1</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="screen2" href="/screens/screen2">
          <ion-icon :icon="ellipse" />
          <ion-label>screen 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="screen3" href="/screens/screen3">
          <ion-icon :icon="square" />
          <ion-label>screen 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Screens',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>