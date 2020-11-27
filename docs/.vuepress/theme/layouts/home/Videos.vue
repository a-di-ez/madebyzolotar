<template>
  <section id="video" class="gallery">
    <v-row class="mb-6">
      <v-col
        lg="8"
      >
        <h2 class="heading">Youtube Video</h2>
        <p>Put your portfolio or gallery images here for example. Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
      </v-col>
    </v-row>

    <div
      v-for="item in list"
      :key="item.link"
      class="mb-12"
    >
      <h5>{{ item.name }}</h5>
      <v-divider class="mt-2 mb-2"></v-divider>

      <v-row>
        <v-col lg="5">
          <iframe
            style="width: 100%; height: 260px;"
            :src="item.link"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
        <v-col lg="7" class="pt-sm-1 pt-0 pb-0">
          <v-row no-gutters>
            <v-col
              class="pa-sm-2 pa-1"
              cols="3"
              v-for="image in item.images"
            >
              <v-img :src="$withBase(image)" max-height="76"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="text-center">
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
import isMobile from '@theme/mixins/isMobile'

export default {
  name: 'HomeVideos',
  mixins: [
    isMobile
  ],
  data () {
    return {
      page: 1,
      defList: [
        {
          name: 'Простые идеи для фото || Осенние идеи для фото в Инстаграм',
          link: 'https://www.youtube.com/embed/vAG_wg4R0fM',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: '❤ ПРОСТЫЕ ИДЕИ ДЛЯ ОСЕННЕЙ ФОТОСЕССИИ II Инстаграм в осеннем стиле',
          link: 'https://www.youtube.com/embed/hN3mp7kJFEc',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Обработка фотографии в Photoshop || Пейзажная обработка',
          link: 'https://www.youtube.com/embed/5u4NsGP4lrQ',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Инстаграм ТРЕНДЫ || ГЛАВНЫЙ СЕКРЕТ эстетичной обработки. Lightroom на телефоне',
          link: 'https://www.youtube.com/embed/fm5M0jOL1gE',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО С ПОДРУГОЙ НА УЛИЦЕ || Как вести красивый профиль в Инстаграм',
          link: 'https://www.youtube.com/embed/SbLbYTfzVBQ',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ЛЁГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ 📸 Простые фото в Инстаграм в маленьком городе',
          link: 'https://www.youtube.com/embed/lqJ9XGVqwgc',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ 📸 ФОТОСЕССИЯ НА УЛИЦЕ',
          link: 'https://www.youtube.com/embed/rdZPV-FPFPE',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Мобильная обработка в Lightroom 📱 Как круто обработать фото на телефоне. Киношная цветокоррекция',
          link: 'https://www.youtube.com/embed/jZ4QRcNk5x8',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО В ПОДСОЛНУХАХ || ФОТОСЕССИЯ В ПОЛЕ ПОДСОЛНУХОВ',
          link: 'https://www.youtube.com/embed/chsrfyzSPAc',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ || ФОТОСЕССИЯ С КРАСКАМИ ХОЛИ',
          link: 'https://www.youtube.com/embed/qVToxFJcnW0',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ || ИДЕИ ДЛЯ ФОТОСЕССИИ НА КАЖДЫЙ ДЕНЬ',
          link: 'https://www.youtube.com/embed/PDRWyoUOBgg',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Мобильная обработка 📱 Как круто обработать фото на телефоне | Lightroom Mobile #5',
          link: 'https://www.youtube.com/embed/oaxz3JSnC4c',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ЛЁГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ || Идеи для фото в маковом поле',
          link: 'https://www.youtube.com/embed/R-wdpXOexgE',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ЛЕГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ || Креативные фото в Инстаграм',
          link: 'https://www.youtube.com/embed/dKPk_Fu29_Y',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Мобильная обработка || Как круто обработать фото на телефоне || Трендовая обработка в Инстаграм',
          link: 'https://www.youtube.com/embed/guzS-7Tmx-0',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Легкие идеи для фото дома в Инстаграм || Проверяем идеи фото с тик ток',
          link: 'https://www.youtube.com/embed/VxV2VsChdAo',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ЛЁГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ || Простые фото в Инстаграм в маленьком городе',
          link: 'https://www.youtube.com/embed/bcdTVbz13G0',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: '6 фото лайфхаков для Инстаграм || Креативные идеи для фото дома на карантине за один день',
          link: 'https://www.youtube.com/embed/2tgdRVaLRqE',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Обработка фото в Lightroom на телефоне📱 Как создать пресет в лайтрум👍',
          link: 'https://www.youtube.com/embed/6AaHL7BIB4M',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Идеи для фото дома 🌼 Идеи для фото с цветами',
          link: 'https://www.youtube.com/embed/Qv5DFePEuic',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Мобильная обработка || Как круто обработать фото на телефоне || Lightroom Mobile #2',
          link: 'https://www.youtube.com/embed/YCCsz3BEyls',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: '18 идей для фото дома || Идеи для фото в Инстаграм',
          link: 'https://www.youtube.com/embed/h1r5V0lhgHc',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ || ФОТОСЕССИЯ ЗИМОЙ',
          link: 'https://www.youtube.com/embed/udGI7qx_PL8',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'Мобильная обработка | Как круто обработать фото на телефоне | Lightroom Mobile',
          link: 'https://www.youtube.com/embed/H5bO_mJkAoA',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО ЗИМОЙ || ЗИМНЯЯ ЛЕНТА INSTAGRAM',
          link: 'https://www.youtube.com/embed/hO6R4N1eoew',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ФОТО С ПЛЕДОМ || ЗИМНИЕ ИДЕИ В ИНСТАГРАМ',
          link: 'https://www.youtube.com/embed/baBKXreKt4M',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ІВАНО-ФРАНКІВСЬК, УКРАЇНА. TRAVEL VLOG: IVANO-FRANKIVSK, UKRAINE',
          link: 'https://www.youtube.com/embed/19FMWsVyF9Q',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ФОТОСЕССИЯ ЗИМОЙ БЕЗ СНЕГА || ИДЕИ ФОТО В ИНСТАГРАМ',
          link: 'https://www.youtube.com/embed/kaJt7-aXtlE',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ИНСТАГРАМ ФОТО В КАМЫШАХ || REEDS PHOTO IDEAS INSTAGRAM',
          link: 'https://youtube.com/embed/SDAXP_1Eb6g',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ЛЬВІВ. Високий замок. Тревел влог',
          link: 'https://youtube.com/embed/igd8H7KLJwE',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ФОТО НА ХЭЛЛОУИН || HALLOWEEN PHOTO IDEAS',
          link: 'https://youtube.com/embed/xXayKUMxsFM',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ЛЕГКИЙ МАКИЯЖ НА ХЭЛЛОУИН || EASY MAKEUP FOR HALLOWEEN',
          link: 'https://youtube.com/embed/L3enfPfjD6E',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'HORROR SCARY HALLOWEEN PARTY || DO NOT WATCH THIS VIDEO AT NIGHT',
          link: 'https://youtube.com/embed/7Hu2-ndcRpM',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ДЛЯ ФОТО В ПОДСОЛНУХАХ || SUNFLOWERS PHOTO IDEAS',
          link: 'https://youtube.com/embed/0SZD30ChSJ0',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ИДЕИ ЛЕТНЕЙ ФОТОСЕССИИ || IDEAS OF SUMMER PHOTOSESSION',
          link: 'https://youtube.com/embed/H3LHENKoQTU',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ОДЕССА, УКРАИНА. TRAVEL VLOG: ODESSA, UKRAINE',
          link: 'https://youtube.com/embed/-_2tPvspXdc',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        },
        {
          name: 'ВЕСЕННЯЯ ФОТОСЕССИЯ ДЛЯ ИНСТАГРАМ || SPRING HOLIDAYS PHOTOSESSION',
          link: 'https://youtube.com/embed/3egwzvM1lYs',
          images: [
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
            '/img/portfolio-1.jpg',
          ]
        }
      ]
    }
  },
  computed: {
    pageLimit () {
      return this.mx_isMobile ? 2 : 3
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
