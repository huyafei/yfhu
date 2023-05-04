<template>
  <main class="v-main">
    <a-carousel id="home" :after-change="onChange">
      <img class="img-auto" src="/images/blog/banner_1920x880.jpg" alt="">
    </a-carousel>
    <VAbout />
    <VWork />
    <VProject />
    <VContact @submit-event="createMessage" />
  </main>
</template>

<script>

export default {
  name: 'Index',
  // async asyncData ({ app }) {
  //   const ip = await app.$axios.$get('http://icanhazip.com')
  //   return { ip }
  // },
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
  computed: {},
  mounted () {
    new this.$WOW().init()
  },
  methods: {
    /**
     * 创建message
     * @param data
     */
    createMessage (data) {
      const SENDMSG_TIME = this.$cookies.get('SENDMSG_TIME') || 0
      if (Number(SENDMSG_TIME) >= 3) {
        return this.$message.warn('提交次数已上限')
      }
      // 计算距离今天凌晨 00:00:00 时间
      const dateTime = new Date()
      const dateTimeT = dateTime.getTime()
      const formatDateTime = this.$jtf.formatTime(dateTime, '{y}-{m}-{d}')
      const date = formatDateTime.split(' ')[0]
      const t = new Date(date + ' 23:59:59').getTime()
      this.$axios.post('/api/message', { ...data }).then((res) => {
        if (res.data.code === 200) {
          this.$cookies.set('SENDMSG_TIME', Number(SENDMSG_TIME) + 1, { expires: t - dateTimeT })
          this.$message.success('发送成功')
        }
      })
    },
    /**
     * 获取浏览器信息
     * @returns {*}
     */
    getBrowserInfo () {
      const agent = navigator.userAgent.toLowerCase()
      // eslint-disable-next-line camelcase
      const regStr_ie = /msie [\d.]+;/gi
      // eslint-disable-next-line camelcase
      const regStr_ff = /firefox\/[\d.]+/gi
      // eslint-disable-next-line camelcase
      const regStr_chrome = /chrome\/[\d.]+/gi
      // eslint-disable-next-line camelcase
      const regStr_saf = /safari\/[\d.]+/gi
      let browserIp = []
      // IE
      if (agent.indexOf('msie') > 0) {
        browserIp = agent.match(regStr_ie)
      }

      // firefox
      if (agent.indexOf('firefox') > 0) {
        browserIp = agent.match(regStr_ff)
      }

      // Chrome
      if (agent.indexOf('chrome') > 0) {
        browserIp = agent.match(regStr_chrome)
      }

      // Safari
      if (agent.indexOf('safari') > 0 && !agent.includes('chrome')) {
        browserIp = agent.match(regStr_saf)
      }
      return browserIp[0].split('/')[1]
    },
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
.v-main {
  /*height: calc(~"100% - 24px");*/
  /*.flex-c(center,center);*/
}
</style>
