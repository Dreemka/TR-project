import Vue from "vue";

export default {
  install(vue) {
    vue.prototype.$broadcast = null; // ссылка для доступа к шине
    vue.mixin({
      beforeCreate() {  // хук события
        if (this.$options.$module) {  // если поле $module задано в самом компоненте,
          this.$broadcast = new Vue();  // создаем новую шину
        } else if (this.$parent && this.$parent.$broadcast) {  // если поле $module не задано в самом компоненте,
          this.$broadcast = this.$parent.$broadcast;  // передадим ссылку на родительскую через поле $parent
        }
      },
    });
  },
}