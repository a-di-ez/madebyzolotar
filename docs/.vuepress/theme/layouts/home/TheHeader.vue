<template>
  <div class="header-wrap">
    <header class="header" :class="{ fixed: isFixed }">
      <div class="navbar">
        <v-container class="pa-0">
          <v-row no-gutters>
            <v-col
              cols="10"
              md="4"
              class="pl-3"
            >
              <a href="#intro" class="navbar-brand">Made by Zolotar</a>
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
                  :class="{ active: item.id === currentId }"
                  @click="scrollTo(item.id)"
                >
                  <a>{{ item.name }}</a>
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

function offset (el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export default {
  name: 'Header',
  mixins: [
    isMobile
  ],
  data () {
    return {
      linksVisibleMobile: false,
      isFixed: false,
      currentId: 'intro',
      links: [
        {
          name: 'Home',
          id: 'intro'
        },
        {
          name: 'About',
          id: 'about'
        },
        {
          name: 'Services',
          id: 'services'
        },
        {
          name: 'Video',
          id: 'video'
        },
        {
          name: 'Text',
          id: 'text'
        },
        {
          name: 'Gallery',
          id: 'gallery'
        },
        {
          name: 'Contact',
          id: 'contact'
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
    },
    scrollTo (id) {
      const element = document.getElementById(id)
      if (!element) {
        return
      }
      this.$vuetify.goTo(element)
      this.linksVisibleMobile = false
    }
  },
  mounted () {
    this.links = this.links.map(item => {
      item.offsetTop = 0
      const element = document.getElementById(item.id)
      if (element) {
        item.offsetTop = offset(element).top
      }
      return item
    })

    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > document.getElementById('intro').offsetHeight

      const current = this.links
        .slice()
        .sort((a, b) => b.offsetTop - a.offsetTop)
        .find(item => item.offsetTop && (scrollTop + 100) > item.offsetTop)
      this.currentId = current && current.id ? current.id : 'intro'
    })
  }
}
</script>
