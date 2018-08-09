import { Vue, Component, Prop } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';

@Component({
  template: require('./home.html'),
  style: require('./home.scss'),
  components: { Datepicker },
})
export default class Home extends Vue {
  name: string = 'Test';
  title: string = 'Title';
}
