<template>
  <ul class="v-pagination v-pagination--circle theme--light">
    <li>
      <a
        :href="prevPagePath"
        style="line-height: 31px;"
        class="v-pagination__item"
        :class="{ 'v-pagination__navigation--disabled': !prevPagePath }"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </a>
    </li>

    <li v-for="(page, index) in pages">
      <a
        :href="page.path"
        style="line-height: 34px;"
        class="v-pagination__item"
        :class="{ 'v-pagination__item--active grey darken-2': checkIsCurrentPage(page) }"
      >
        {{ index + 1 }}
      </a>
    </li>

    <li>
      <a
        :href="nextPagePath"
        style="line-height: 31px;"
        class="v-pagination__item"
        :class="{ 'v-pagination__navigation--disabled': !nextPagePath }"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </a>
    </li>
  </ul>
</template>

<script>
function parsePageNumber (path) {
  return Number(path.replace(/\D+/g, ''))
}

function getPageParent (path) {
  return path.replace(/\/\d+(.html)?/g, '')
}

export default {
  name: 'GalleryLayout',
  props: {
    current: Object
  },
  computed: {
    pages () {
      let currentPage = getPageParent(this.current.path)
      console.log(currentPage)
      return this.$site.pages
        .filter(x => x.path.match(new RegExp(`(${currentPage})(?=.*html)`)))
        .sort((a, b) => parsePageNumber(a.path) - parsePageNumber(b.path))
    },
    list () {
      return this.pages && this.pages[0] ? this.pages[0] : []
    },
    currentPageNumber () {
      return parsePageNumber(this.current.path) || 1
    },
    prevPagePath () {
      const prevNumber = this.currentPageNumber - 1
      const page = this.pages.find(item => parsePageNumber(item.path) === prevNumber)
      return page && page.path ? page.path : null
    },
    nextPagePath () {
      const prevNumber = this.currentPageNumber + 1
      const page = this.pages.find(item => parsePageNumber(item.path) === prevNumber)
      return page && page.path ? page.path : null
    }
  },
  methods: {
    checkIsCurrentPage (page) {
      return parsePageNumber(page.path) === this.currentPageNumber
    }
  }
}
</script>
