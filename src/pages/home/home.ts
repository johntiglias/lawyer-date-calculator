import { Vue, Component, Prop } from 'vue-property-decorator';
import dateForm from '../../components/dateForm/dateForm';

@Component({
  template: require('./home.html'),
  style: require('./home.scss'),
  components: { dateForm },
})
export default class Home extends Vue {

}
