<template>
  <v-footer
    id="contact"
    style="background-color: #111;"
    class="section-inverse"
    v-intersect="onIntersect"
  >
    <v-container class="pa-0 px-sm-3">
      <v-row class="copyright">
        <v-col cols="4" md="6">
          <h2>
            <a href="#intro" class="brand hidden-md-and-down">MADE BY ZOLOTAR</a>
            <a href="#intro" class="brand hidden-lg-and-up">
              M<span style="font-size: 22px">by</span>Z
            </a>
          </h2>
          <p class="brand">
            &copy; {{ new Date().getFullYear() }}
            <span class="hidden-md-and-down">made by Zolotar</span>
          </p>
        </v-col>
        <v-col cols="8" md="6">
          <div style="height: 54px;">
            <v-fade-transition>
              <div
                class="text-right pb-4"
                v-show="iconVisible"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=100010382959034"
                  target="_blank"
                  class="social"
                >
                  <v-icon
                    dark
                    size="35"
                  >
                    mdi-facebook
                  </v-icon>
                </a>
                <a
                  href="https://www.instagram.com/margarita_zolotar"
                  target="_blank"
                  class="social"
                >
                  <v-icon
                    dark
                    size="35"
                  >
                    mdi-instagram
                  </v-icon>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC9faHpz354UB8RlEL9foDag"
                  target="_blank"
                  class="social"
                >
                  <v-icon
                    dark
                    size="40"
                  >
                    mdi-youtube
                  </v-icon>
                </a>
              </div>
            </v-fade-transition>
          </div>

          <p class="credit">Work with <v-icon dark>mdi-heart</v-icon> for you :)</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      iconVisible: false
    }
  },
  methods: {
    onIntersect (entries) {
      setTimeout(() => {
        this.iconVisible = entries[0].isIntersecting
      }, 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
.brand {
  text-transform none
  font-family "Cardo", "Times New Roman", Times, serif
  font-style italic
  text-decoration none !important
  color #ffffff
}

.social {
  text-decoration none!important
  margin: 0 10px 0 0;
  color: #fff;
  display: inline-block;
  width: 38px;
  height: 38px;
  border-radius: 19px;
  line-height: 38px;
  font-size: 15px;
  text-align: center;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  vertical-align: bottom;
}
</style>

<style lang="stylus">
.copyright {
  color: #eeeeee;
  font-style: italic;
}
.copyright p.credit {
  text-align: right;
}
.copyright p.credit a {
  color: #eeeeee;
}
@media (max-width: 991px) {
  .copyright p.credit {
    text-align: center !important;
  }
}
@media (max-width: 991px) {
  .copyright {
    text-align: center !important;
  }
}
</style>
