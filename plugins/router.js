/**
 * @name: router
 * @author: yfhu
 * @date: 2021/10/21 17:20
 * @description：router
 * @update: 2021/10/21 17:20
 */
import cookies from './cookies.js'
const whiteList = ['index', 'login']
export default function (context) {
  const { app } = context
  app.router.beforeEach((to, from, next) => {
    // console.log(context)
    // console.log(to, from)
    if (whiteList.includes(to.name)) {
      next()
    } else {
      const token = cookies.get('token')
      if (token) {
        next()
      } else {
        next({ path: '/login', query: { redirect: to.fullPath } })
      }
    }
  })
}
