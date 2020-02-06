export default {
  data () {
    return {
      mx_isMobile: false
    }
  },
  mounted () {
    this.mx_isMobile = window.innerWidth < 1100
  }
}
