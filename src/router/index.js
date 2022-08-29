const { loadModule } = window['vue3-sfc-loader'];
const options = {
  moduleCache: {
    vue: Vue
  },
  async getFile(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    }
    return {
      getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
    }
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;

    document.head.insertBefore(style, ref);
  },
};

Vue.importComponent = url => Vue.defineAsyncComponent(() => loadModule(url, options));

const Index = { template: '<div>index</div>' }
const Home = { template: '<div>home</div>' }

// const routes = [
//   { path: '/', component: Index },
//   { path: '/home', component: Home },
// ]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Vue.importComponent('/src/views/login/index.vue'),
    },
    //   {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('../views/AboutView.vue')
    //   }
  ],
})
