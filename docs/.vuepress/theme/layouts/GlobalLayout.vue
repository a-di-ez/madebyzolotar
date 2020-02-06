<template>
  <v-app>
    <v-content>
      <DefaultGlobalLayout />
    </v-content>

    <TheFooter/>
  </v-app>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import TheHeader from '@theme/components/TheHeader'
import TheFooter from '@theme/components/TheFooter'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    TheHeader,
    TheFooter
  }
}
</script>
