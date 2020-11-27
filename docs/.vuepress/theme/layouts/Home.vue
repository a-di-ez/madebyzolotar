<template>
  <div>
    <WelcomeScreen/>

    <TheHeader/>

    <v-container>
      <About/>
    </v-container>

    <!-- Services-->
    <section id="services" style="background-color: #eee">
      <div class="container">
        <div class="row services">
          <div class="col-md-12">
            <h2 class="heading">Services</h2>
            <div class="row">
              <div class="col-sm-4">
                <div class="box">
                  <div class="icon"><i class="fa fa-desktop"></i></div>
                  <h4>Webdesign</h4>
                  <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="box">
                  <div class="icon"><i class="fa fa-print"></i></div>
                  <h4>Print</h4>
                  <p>Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="box">
                  <div class="icon"><i class="fa fa-globe"></i></div>
                  <h4>SEO and SEM</h4>
                  <p>Am terminated it excellence invitation projection as. She graceful shy. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services end-->

    <v-container>
      <Videos/>
    </v-container>

    <!-- text page-->
    <section id="text" style="background-color: #333;" class="text-page section-inverse">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="heading">Text page</h2>
            <div class="row">
              <div class="col-sm-6">
                <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
                <p>Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other. </p>
              </div>
              <div class="col-sm-6">
                <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
                <p>Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected its mrs literature. Behaviour new set existence dashwoods. It satisfied to mr commanded consisted disposing engrossed. Tall snug do of till on easy. Form not calm new fail. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- text page end-->

    <v-container>
      <Photos/>

      <div class="text-center mt-9">
        <v-btn
          depressed
          style="border-bottom: 1px solid rgba(0,0,0,.47) !important; border-radius: 0;"
          color="white"
          @click="nextPage()"
        >
          <a href="/gallery">Show more...</a>
        </v-btn>
      </div>
    </v-container>

    <Content/>
  </div>
</template>

<script>
import TheHeader from '@theme/layouts/home/TheHeader'
import WelcomeScreen from '@theme/layouts/home/WelcomeScreen'
import About from '@theme/layouts/home/About'
import Videos from '@theme/layouts/home/Videos'
import Photos from '@theme/layouts/home/Photos'

export default {
  components: {
    TheHeader,
    WelcomeScreen,
    About,
    Videos,
    Photos
  }
}
</script>
