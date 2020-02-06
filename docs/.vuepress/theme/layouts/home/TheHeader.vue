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
              <a href="#intro" class="navbar-brand hidden-lg-and-down">MADE BY ZOLOTAR</a>
              <a href="#intro" class="navbar-brand hidden-lg-and-up">Made by Zolotar</a>
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
          name: 'Gallery',
          id: 'gallery'
        },
        {
          name: 'Text',
          id: 'text'
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

<style lang="stylus">
.header-wrap {
  min-height 43px
}
.header {
  width 100%
  background #fff
  z-index 1003

  &.fixed {
    position fixed
    top 0
  }
}

a {
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.navbar {
  position: relative
  font-family: "Cardo", "Times New Roman", Times, serif;
  font-style: italic;
  min-height: 40px;
  height 43px
  margin-bottom: 0;
  border-bottom: 1px solid transparent;

  i {
    outline none
  }
}

@media (min-width 1100px) {
  .nav {
    display: flex
    align-items center
  }
  .navbar-nav {
    display flex
    justify-content flex-end
    padding-right 35px !important

    a {
      padding 8px 15px
    }
  }
}

@media (max-width 1100px) {
  .navbar-brand {
    padding-left 5px
  }
  .navbar-nav {
    padding 5px 0 !important
    top 43px
    position absolute
    width 100%
    z-index 11
    background-color white
    border-bottom 1px solid #e6e6e6
    box-shadow inset 0 1px 0 rgba(255, 255, 255, .1)

    div {
      padding 8px 15px
    }
  }
}

.navbar-nav a {
  line-height 22px
}

.navbar {
  background-color: #ffffff;
  border-bottom-color: #e6e6e6;
}

.navbar-brand {
  color black !important
  text-decoration none !important
  font-size 24px
  line-height 45px
}

.navbar-brand:hover,
.navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}

.navbar-nav a {
  color: #777777;
  text-decoration none !important
  border-bottom: solid 1px transparent;
}

.navbar-nav a:hover,
.navbar-nav a:focus {
  color: #333333;
  background-color: transparent;
}

.navbar-nav > .active > a,
.navbar-nav > .active > a:hover,
.navbar-nav > .active > a:focus {
  color: #000000;
  background-color: transparent;
  -webkit-transition: all 2s ease-out;
  -moz-transition: all 2s ease-out;
  transition: all 2s ease-out;
}

@media (min-width: 767px) {
  .navbar-nav > .active > a,
  .navbar-nav > .active > a:hover,
  .navbar-nav > .active > a:focus {
    border-bottom: solid 1px #666;
  }
}
</style>
