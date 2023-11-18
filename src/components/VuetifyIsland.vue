<script setup lang="ts">
  import SampleCard from './SampleCard.vue'
  import { getCurrentInstance } from 'vue'
  import vuetify from '@/vuetify/plugin'

  const app = getCurrentInstance().appContext.app
  app.use(vuetify)
</script>

<template>
  <div>
    <v-app
      class="bg-background text-on-background"
      style="min-height: 100vh !important"
    >
      <v-main class="py-4">
        <SampleCard />
      </v-main>
    </v-app>
  </div>
</template>

<style></style>
