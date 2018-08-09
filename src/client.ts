import Vue from 'vue';
import HomeComponent from './pages/home/home';

const v = new Vue({
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
    HomeComponent,
  },
});
