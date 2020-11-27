<template>
  <TwentyTwenty
    :before="$withBase(before)"
    after="//placehold.it/500x333/CCCCCC/FFFFFF"
  />
</template>

<script>
import TwentyTwenty from 'vue-twentytwenty'

export default {
  name: 'HomePhotos',
  components: {
    TwentyTwenty
  },
  props: {
    before: String,
    after: String,
  }
}
</script>
