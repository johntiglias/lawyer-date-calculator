import { Vue, Component, Prop } from 'vue-property-decorator';
import DateForm from '../../components/dateForm/dateForm';

@Component({
  template: require('./home.html'),
  style: require('./home.scss'),
  components: { DateForm },
})
export default class Home extends Vue {
  name: string = 'Test';
  title: string = 'Title';
}
