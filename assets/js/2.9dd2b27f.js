(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{45:function(o,i,t){},46:function(o,i,t){},65:function(o,i,t){"use strict";t(64),t(58),t(97);var p={name:"Header",mixins:[t(8).a],data:function(){return{linksVisibleMobile:!1,isFixed:!1,currentId:"intro",links:[{name:"Home",id:"intro"},{name:"About",id:"about"},{name:"Services",id:"services"},{name:"Video",id:"video"},{name:"Text",id:"text"},{name:"Gallery",id:"gallery"},{name:"Contact",id:"contact"}]}},computed:{linksVisible:function(){return!this.mx_isMobile||this.linksVisibleMobile}},methods:{toggleLinksVisible:function(){this.linksVisibleMobile=!this.linksVisibleMobile},scrollTo:function(o){var i=document.getElementById(o);i&&(this.$vuetify.goTo(i),this.linksVisibleMobile=!1)}},mounted:function(){var o=this;this.links=this.links.map((function(o){o.offsetTop=0;var i,t,p,g,m=document.getElementById(o.id);return m&&(o.offsetTop=(i=m,t=i.getBoundingClientRect(),p=window.pageXOffset||document.documentElement.scrollLeft,g=window.pageYOffset||document.documentElement.scrollTop,{top:t.top+g,left:t.left+p}).top),o})),window.addEventListener("scroll",(function(){var i=document.documentElement.scrollTop||document.body.scrollTop;o.isFixed=i>document.getElementById("intro").offsetHeight;var t=o.links.slice().sort((function(o,i){return i.offsetTop-o.offsetTop})).find((function(o){return o.offsetTop&&i+100>o.offsetTop}));o.currentId=t&&t.id?t.id:"intro"}))}},g=t(2),m=Object(g.a)(p,(function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("div",{staticClass:"header-wrap"},[t("header",{staticClass:"header",class:{fixed:o.isFixed}},[t("div",{staticClass:"navbar"},[t("v-container",{staticClass:"pa-0"},[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pl-3",attrs:{cols:"10",md:"4"}},[t("a",{staticClass:"navbar-brand",attrs:{href:"#intro"}},[o._v("Made by Zolotar")])]),o._v(" "),t("v-col",{directives:[{name:"show",rawName:"v-show",value:o.mx_isMobile,expression:"mx_isMobile"}],staticClass:"pt-1 px-3 text-right",attrs:{cols:"2"}},[t("v-icon",{attrs:{size:"32"},on:{click:function(i){return o.toggleLinksVisible()}}},[o._v("\n              "+o._s(o.linksVisible?"mdi-close":"mdi-menu")+"\n            ")])],1),o._v(" "),t("v-expand-transition",[t("v-col",{directives:[{name:"show",rawName:"v-show",value:o.linksVisible,expression:"linksVisible"}],staticClass:"nav navbar-nav",attrs:{cols:"12","offset-md":"2",md:"6"}},o._l(o.links,(function(i){return t("div",{key:i.id,class:{active:i.id===o.currentId},on:{click:function(t){return o.scrollTo(i.id)}}},[t("a",[o._v(o._s(i.name))])])})),0)],1)],1)],1)],1)])])}),[],!1,null,null,null);i.a=m.exports},66:function(o,i,t){"use strict";var p={name:"HomePhotos",components:{TwentyTwenty:t(68).a},data:function(){return{list:[{before:"/img/portfolio-1.jpg",after:"/img/portfolio-1.jpg"},{before:"/img/portfolio-1.jpg",after:"/img/portfolio-1.jpg"},{before:"/img/portfolio-1.jpg",after:"/img/portfolio-1.jpg"},{before:"/img/portfolio-1.jpg",after:"/img/portfolio-1.jpg"},{before:"/img/portfolio-1.jpg",after:"/img/portfolio-1.jpg"},{before:"/img/portfolio-1.jpg",after:"/img/portfolio-1.jpg"}]}}},g=t(2),m=Object(g.a)(p,(function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("div",[t("v-row",{staticClass:"mb-6",attrs:{wrap:""}},[t("v-col",{attrs:{lg:"8"}},[t("h2",{staticClass:"heading"},[o._v("Gallery")]),o._v(" "),t("p",[o._v("Put your portfolio or gallery images here for example. Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. ")])])],1),o._v(" "),t("v-row",o._l(o.list,(function(i){return t("v-col",{attrs:{cols:"12",lg:"4"}},[t("TwentyTwenty",{attrs:{before:o.$withBase(i.before),after:"//placehold.it/500x333/CCCCCC/FFFFFF"}})],1)})),1)],1)}),[],!1,null,null,null);i.a=m.exports},67:function(o,i,t){"use strict";var p={name:"HomeVideos",mixins:[t(8).a],data:function(){return{page:1,defList:[{name:"Простые идеи для фото || Осенние идеи для фото в Инстаграм",link:"https://www.youtube.com/embed/vAG_wg4R0fM",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"❤ ПРОСТЫЕ ИДЕИ ДЛЯ ОСЕННЕЙ ФОТОСЕССИИ II Инстаграм в осеннем стиле",link:"https://www.youtube.com/embed/hN3mp7kJFEc",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Обработка фотографии в Photoshop || Пейзажная обработка",link:"https://www.youtube.com/embed/5u4NsGP4lrQ",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Инстаграм ТРЕНДЫ || ГЛАВНЫЙ СЕКРЕТ эстетичной обработки. Lightroom на телефоне",link:"https://www.youtube.com/embed/fm5M0jOL1gE",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО С ПОДРУГОЙ НА УЛИЦЕ || Как вести красивый профиль в Инстаграм",link:"https://www.youtube.com/embed/SbLbYTfzVBQ",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ЛЁГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ 📸 Простые фото в Инстаграм в маленьком городе",link:"https://www.youtube.com/embed/lqJ9XGVqwgc",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ 📸 ФОТОСЕССИЯ НА УЛИЦЕ",link:"https://www.youtube.com/embed/rdZPV-FPFPE",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Мобильная обработка в Lightroom 📱 Как круто обработать фото на телефоне. Киношная цветокоррекция",link:"https://www.youtube.com/embed/jZ4QRcNk5x8",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО В ПОДСОЛНУХАХ || ФОТОСЕССИЯ В ПОЛЕ ПОДСОЛНУХОВ",link:"https://www.youtube.com/embed/chsrfyzSPAc",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ || ФОТОСЕССИЯ С КРАСКАМИ ХОЛИ",link:"https://www.youtube.com/embed/qVToxFJcnW0",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ || ИДЕИ ДЛЯ ФОТОСЕССИИ НА КАЖДЫЙ ДЕНЬ",link:"https://www.youtube.com/embed/PDRWyoUOBgg",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Мобильная обработка 📱 Как круто обработать фото на телефоне | Lightroom Mobile #5",link:"https://www.youtube.com/embed/oaxz3JSnC4c",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ЛЁГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ || Идеи для фото в маковом поле",link:"https://www.youtube.com/embed/R-wdpXOexgE",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ЛЕГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ || Креативные фото в Инстаграм",link:"https://www.youtube.com/embed/dKPk_Fu29_Y",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Мобильная обработка || Как круто обработать фото на телефоне || Трендовая обработка в Инстаграм",link:"https://www.youtube.com/embed/guzS-7Tmx-0",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Легкие идеи для фото дома в Инстаграм || Проверяем идеи фото с тик ток",link:"https://www.youtube.com/embed/VxV2VsChdAo",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ЛЁГКИЕ ИДЕИ ДЛЯ ФОТОСЕССИИ НА УЛИЦЕ || Простые фото в Инстаграм в маленьком городе",link:"https://www.youtube.com/embed/bcdTVbz13G0",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"6 фото лайфхаков для Инстаграм || Креативные идеи для фото дома на карантине за один день",link:"https://www.youtube.com/embed/2tgdRVaLRqE",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Обработка фото в Lightroom на телефоне📱 Как создать пресет в лайтрум👍",link:"https://www.youtube.com/embed/6AaHL7BIB4M",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Идеи для фото дома 🌼 Идеи для фото с цветами",link:"https://www.youtube.com/embed/Qv5DFePEuic",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Мобильная обработка || Как круто обработать фото на телефоне || Lightroom Mobile #2",link:"https://www.youtube.com/embed/YCCsz3BEyls",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"18 идей для фото дома || Идеи для фото в Инстаграм",link:"https://www.youtube.com/embed/h1r5V0lhgHc",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО НА УЛИЦЕ || ФОТОСЕССИЯ ЗИМОЙ",link:"https://www.youtube.com/embed/udGI7qx_PL8",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"Мобильная обработка | Как круто обработать фото на телефоне | Lightroom Mobile",link:"https://www.youtube.com/embed/H5bO_mJkAoA",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО ЗИМОЙ || ЗИМНЯЯ ЛЕНТА INSTAGRAM",link:"https://www.youtube.com/embed/hO6R4N1eoew",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ФОТО С ПЛЕДОМ || ЗИМНИЕ ИДЕИ В ИНСТАГРАМ",link:"https://www.youtube.com/embed/baBKXreKt4M",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ІВАНО-ФРАНКІВСЬК, УКРАЇНА. TRAVEL VLOG: IVANO-FRANKIVSK, UKRAINE",link:"https://www.youtube.com/embed/19FMWsVyF9Q",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ФОТОСЕССИЯ ЗИМОЙ БЕЗ СНЕГА || ИДЕИ ФОТО В ИНСТАГРАМ",link:"https://www.youtube.com/embed/kaJt7-aXtlE",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ИНСТАГРАМ ФОТО В КАМЫШАХ || REEDS PHOTO IDEAS INSTAGRAM",link:"https://youtube.com/embed/SDAXP_1Eb6g",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ЛЬВІВ. Високий замок. Тревел влог",link:"https://youtube.com/embed/igd8H7KLJwE",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ФОТО НА ХЭЛЛОУИН || HALLOWEEN PHOTO IDEAS",link:"https://youtube.com/embed/xXayKUMxsFM",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ЛЕГКИЙ МАКИЯЖ НА ХЭЛЛОУИН || EASY MAKEUP FOR HALLOWEEN",link:"https://youtube.com/embed/L3enfPfjD6E",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"HORROR SCARY HALLOWEEN PARTY || DO NOT WATCH THIS VIDEO AT NIGHT",link:"https://youtube.com/embed/7Hu2-ndcRpM",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ДЛЯ ФОТО В ПОДСОЛНУХАХ || SUNFLOWERS PHOTO IDEAS",link:"https://youtube.com/embed/0SZD30ChSJ0",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ИДЕИ ЛЕТНЕЙ ФОТОСЕССИИ || IDEAS OF SUMMER PHOTOSESSION",link:"https://youtube.com/embed/H3LHENKoQTU",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ОДЕССА, УКРАИНА. TRAVEL VLOG: ODESSA, UKRAINE",link:"https://youtube.com/embed/-_2tPvspXdc",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]},{name:"ВЕСЕННЯЯ ФОТОСЕССИЯ ДЛЯ ИНСТАГРАМ || SPRING HOLIDAYS PHOTOSESSION",link:"https://youtube.com/embed/3egwzvM1lYs",images:["/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg","/img/portfolio-1.jpg"]}]}},computed:{pageLimit:function(){return this.mx_isMobile?2:3},list:function(){return this.defList.slice(0,this.page*this.pageLimit)}},methods:{nextPage:function(){this.page+=1}}},g=t(2),m=Object(g.a)(p,(function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("section",{staticClass:"gallery",attrs:{id:"video"}},[t("v-row",{staticClass:"mb-6"},[t("v-col",{attrs:{lg:"8"}},[t("h2",{staticClass:"heading"},[o._v("Youtube Video")]),o._v(" "),t("p",[o._v("Put your portfolio or gallery images here for example. Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. ")])])],1),o._v(" "),o._l(o.list,(function(i){return t("div",{key:i.link,staticClass:"mb-12"},[t("h5",[o._v(o._s(i.name))]),o._v(" "),t("v-divider",{staticClass:"mt-2 mb-2"}),o._v(" "),t("v-row",[t("v-col",{attrs:{lg:"5"}},[t("iframe",{staticStyle:{width:"100%",height:"260px"},attrs:{src:i.link,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),o._v(" "),t("v-col",{staticClass:"pt-sm-1 pt-0 pb-0",attrs:{lg:"7"}},[t("v-row",{attrs:{"no-gutters":""}},o._l(i.images,(function(i){return t("v-col",{staticClass:"pa-sm-2 pa-1",attrs:{cols:"3"}},[t("v-img",{attrs:{src:o.$withBase(i),"max-height":"76"}})],1)})),1)],1)],1)],1)})),o._v(" "),t("div",{staticClass:"text-center"},[t("v-btn",{staticStyle:{"border-bottom":"1px solid rgba(0,0,0,.47) !important","border-radius":"0"},attrs:{depressed:"",color:"white"},on:{click:function(i){return o.nextPage()}}},[o._v("\n      Show more...\n    ")])],1)],2)}),[],!1,null,null,null);i.a=m.exports},69:function(o,i,t){"use strict";t(98),t(99);var p=t(2),g=Object(p.a)({},(function(){var o=this.$createElement;this._self._c;return this._m(0)}),[function(){var o=this.$createElement,i=this._self._c||o;return i("section",{staticClass:"intro",attrs:{id:"intro"}},[i("div",{staticClass:"overlay"},[i("img",{staticStyle:{height:"1300px"},attrs:{src:"https://c.stocksy.com/a/IFb000/z9/143176.jpg?1574203835",alt:""}})]),this._v(" "),i("div",{staticClass:"pr-lg-12 ml-lg-n12 px-5",staticStyle:{position:"absolute","z-index":"11"}},[i("p",{staticClass:"font-italic"},[this._v("Oh, hello, nice to meet you!")]),this._v(" "),i("h1",{staticClass:"mb-5 pt-2 main-text"},[this._v("I am Margarita Zolotar.")]),this._v(" "),i("p",{staticClass:"font-italic"},[this._v("I am a ready to show you my work presentations.")])])])}],!1,null,"54addf57",null);i.a=g.exports},70:function(o,i,t){"use strict";var p=t(2),g=Object(p.a)({},(function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("section",{staticClass:"text",attrs:{id:"about"}},[t("v-row",{attrs:{wrap:""}},[t("v-col",{attrs:{md:"6"}},[t("h2",{staticClass:"heading"},[o._v("About me")]),o._v(" "),t("p",{staticClass:"lead"},[o._v("This can be an about section.")]),o._v(" "),t("p",[o._v("Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. ")]),o._v(" "),t("p",[o._v("Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. ")])]),o._v(" "),t("v-col",{staticClass:"text-center",attrs:{"offset-md":"1",md:"5"}},[t("v-avatar",{attrs:{size:"320"}},[t("img",{attrs:{src:"https://instagram.fdnk5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/71788939_418623722363881_65488987019542528_n.jpg?_nc_ht=instagram.fdnk5-1.fna.fbcdn.net&_nc_ohc=V3Lj-h7Xhq8AX-yJDEF&oh=8735840eb2b78c39edd6d2c8ac9a6950&oe=5EC7FAC6",alt:""}})])],1)],1)],1)}),[],!1,null,null,null);i.a=g.exports},97:function(o,i,t){"use strict";var p=t(25),g=t(42)(1);p(p.P+p.F*!t(44)([].map,!0),"Array",{map:function(o){return g(this,o,arguments[1])}})},98:function(o,i,t){"use strict";var p=t(45);t.n(p).a},99:function(o,i,t){"use strict";var p=t(46);t.n(p).a}}]);