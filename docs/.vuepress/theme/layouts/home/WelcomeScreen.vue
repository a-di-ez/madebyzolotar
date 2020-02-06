<template>
  <section id="intro" class="intro">
    <div class="overlay">
      <img src="https://c.stocksy.com/a/IFb000/z9/143176.jpg?1574203835" style="height: 1300px" alt="">
    </div>
    <div
      class="pr-lg-12 ml-lg-n12 px-5"
      style="position: absolute; z-index: 11;"
    >
      <p class="font-italic">Oh, hello, nice to meet you!</p>
      <h1 class="mb-5 pt-2 main-text">I am Margarita Zolotar.</h1>
      <p class="font-italic">I am a ready to show you my work presentations.</p>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@media (max-width 1100px) {
  .main-text {
    font-size 38px
  }
}

.intro {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #111;
  min-height: 600px;
  padding: 0;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  background-attachment: fixed;
}
.intro h1,
.intro h2,
.intro h3,
.intro p {
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
@media (min-width: 992px) {
  .intro p {
    font-size: 22px;
  }
}
</style>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  z-index: 2;
  opacity: 0.6;
  filter: alpha(opacity=60);
}
</style>
