export default {
  install(Vue, options) {
    console.log(options)
    Vue.prototype.$message = function (html) {
      window.M.toast({html , classes: 'toast' , displayLength: 100, inDuration: 10000})
    }
    Vue.prototype.$error = function (html) {
      window.M.toast({html: `[Ошибка]: ${html}` , classes: 'toast-error', displayLength: 4000, inDuration: 10000})
    }
  }
}