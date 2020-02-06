<template>
  <section id="gallery" class="gallery">
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

    <div class="text-center mt-9">
      <v-btn
        depressed
        style="border-bottom: 1px solid rgba(0,0,0,.47) !important; border-radius: 0;"
        color="white"
        @click="nextPage()"
      >
        Show more...
      </v-btn>
    </div>
  </section>
</template>

<script>
import TwentyTwenty from 'vue-twentytwenty'
import isMobile from '@theme/mixins/isMobile'

export default {
  name: 'HomePhotos',
  components: {
    TwentyTwenty
  },
  mixins: [
    isMobile
  ],
  data () {
    return {
      page: 1,
      defList: [
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
  },
  computed: {
    pageLimit () {
      return this.mx_isMobile ? 3 : 6
    },
    list () {
      return this.defList.slice(0, this.page * this.pageLimit)
    }
  },
  methods: {
    nextPage () {
      this.page += 1
    }
  }
}
</script>
