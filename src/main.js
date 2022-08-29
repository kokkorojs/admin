const App = Vue.importComponent('/src/App.vue');

Vue.createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
