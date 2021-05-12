<template>
  <main class="v-main">
    <a-carousel id="home" :after-change="onChange">
      <img class="img-auto" src="/images/blog/banner_1920x880.jpg" alt="">
    </a-carousel>
    <VAbout />
    <VWork />
    <VProject />
    <VContact />
  </main>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: this.$t('index.title')
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {

  },

  mounted () {},
  methods: {
    onChange (a, b, c) {
      console.log(a, b, c)
    },
    jumpPage (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="less">
  .v-main{
    /*height: calc(~"100% - 24px");*/
    /*.flex-c(center,center);*/
  }
</style>
