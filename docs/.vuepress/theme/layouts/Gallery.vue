<template>
  <div>
    <TheHeader/>

    <v-container class="py-12">
      <v-row class="mb-6">
        <v-col
          lg="8"
        >
          <h2 class="heading">Gallery</h2>
          <p>Put your portfolio or gallery images here for example. Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
        </v-col>
      </v-row>

      <v-row class="mb-12">
        <v-col
          cols="12"
          lg="4"
          v-for="item in list"
        >
          <PhotoBA
            :before="item.before"
            after="//placehold.it/500x333/CCCCCC/FFFFFF"
          />
        </v-col>
      </v-row>

      <div class="text-center">
        <Pagination :current="$page"/>
      </div>
    </v-container>
  </div>
</template>

<script>
import TheHeader from '@theme/components/TheHeader'
import PhotoBA from '@theme/components/PhotoBA'
import Pagination from '@theme/components/Pagination'

export default {
  name: 'GalleryLayout',
  components: {
    TheHeader,
    PhotoBA,
    Pagination
  },
  computed: {
    list () {
      if (this.$page.frontmatter.list) {
        return this.$page.frontmatter.list
      }
      return []
    }
  }
}
</script>
