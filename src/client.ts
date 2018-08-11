import vue from 'vue';
import home from './pages/home/home';

const v = new vue({
  el: '#app',
  template: `
  <div>
    <home-component :name="name" :title="title" />
  </div>`,
  data: {
    name: 'World',
    title: 'Law Date Calculator',
  },
  components: {
    HomeComponent: home,
  },
});
