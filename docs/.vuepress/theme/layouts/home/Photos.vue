<template>
  <div>
    <v-row wrap class="mb-6">
      <v-col
        lg="8"
      >
        <h2 class="heading">Gallery</h2>
        <p>Put your portfolio or gallery images here for example. Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        lg="4"
        v-for="item in list"
      >
        <TwentyTwenty
          :before="$withBase(item.before)"
          after="//placehold.it/500x333/CCCCCC/FFFFFF"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TwentyTwenty from 'vue-twentytwenty'

export default {
  name: 'HomePhotos',
  components: {
    TwentyTwenty
  },
  data () {
    return {
      list: [
        {
          before: '/img/portfolio-1.jpg',
          after: '/img/portfolio-1.jpg',
        },
        {
          before: '/img/portfolio-1.jpg',
          after: '/img/portfolio-1.jpg',
        },
        {
          before: '/img/portfolio-1.jpg',
          after: '/img/portfolio-1.jpg',
        },
        {
          before: '/img/portfolio-1.jpg',
          after: '/img/portfolio-1.jpg',
        },
        {
          before: '/img/portfolio-1.jpg',
          after: '/img/portfolio-1.jpg',
        },
        {
          before: '/img/portfolio-1.jpg',
          after: '/img/portfolio-1.jpg',
        },
      ]
    }
  }
}
</script>
