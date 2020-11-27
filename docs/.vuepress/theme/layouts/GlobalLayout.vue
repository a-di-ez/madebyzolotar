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
  },
  beforeMount() {
    let recaptchaScript = document.createElement('noscript')
    recaptchaScript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTK9BJH"\n' +
      'height="0" width="0" style="display:none;visibility:hidden"></iframe>'
    document.body.appendChild(recaptchaScript)
  }
}
</script>
