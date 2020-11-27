<template>
  <div class="header-wrap" id="header">
    <header class="header fixed">
      <div class="navbar">
        <v-container class="pa-0" style="height: inherit">
          <v-row no-gutters style="height: inherit">
            <v-col
              cols="10"
              md="4"
              class="pl-3"
            >
              <a href="/" class="navbar-brand">Made by Zolotar</a>
            </v-col>
            <v-col
              v-show="mx_isMobile"
              cols="2"
              class="pt-1 px-3 text-right"
            >
              <v-icon
                size="32"
                @click="toggleLinksVisible()"
              >
                {{ linksVisible ? 'mdi-close' : 'mdi-menu' }}
              </v-icon>
            </v-col>
            <v-expand-transition>
              <v-col
                v-show="linksVisible"
                cols="12"
                offset-md="2" md="6"
                class="nav navbar-nav"
              >
                <div
                  v-for="item in links"
                  :key="item.id"
                  :class="{ active: item.link === '/' }"
                >
                  <a :href="item.link">{{ item.name }}</a>
                </div>
              </v-col>
            </v-expand-transition>
          </v-row>
        </v-container>
      </div>
    </header>
  </div>
</template>

<script>
import isMobile from '@theme/mixins/isMobile'

export default {
  name: 'Header',
  mixins: [
    isMobile
  ],
  data () {
    return {
      linksVisibleMobile: false,
      isFixed: false,
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About',
          link: 'about'
        },
        {
          name: 'Video',
          link: 'video'
        },
        {
          name: 'Gallery',
          link: '/gallery'
        },
        {
          name: 'Contact',
          link: 'contact'
        }
      ]
    }
  },
  computed: {
    linksVisible () {
      if (!this.mx_isMobile) {
        return true
      }
      return this.linksVisibleMobile
    }
  },
  methods: {
    toggleLinksVisible () {
      this.linksVisibleMobile = !this.linksVisibleMobile
    }
  }
}
</script>

<style lang="stylus">

</style>
