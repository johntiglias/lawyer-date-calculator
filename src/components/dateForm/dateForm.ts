import { Vue, Component } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';
import holidays from '../../data/holidays';

@Component({
  template: require('./dateForm.html'),
  style: require('./dateForm.scss'),
  components:{
    Datepicker,
  },
})

export default class DateForm extends Vue {

 custom = '';
 selected = '';
 selectedDate = null;
 dates = [];
 
 humanReadableDate(date) {
   const calc = new Date(date);
   return calc.toDateString();
  }
 
  calculateDates() {
    this.dates = [];
    switch (this.selected){
      case 'Custom':
        this.calculateDate(this.custom, this.selectedDate);
        break;
      case 'All':
        this.calculateAllDates(this.selectedDate);
        break;
      case '90':
        this.calculateDate(90, this.selectedDate);
        break;
      case '60':
        this.calculateDate(60, this.selectedDate);
        break;
      case '21':
        this.calculateDate(21, this.selectedDate);
    }
  }

  checkForWeekend(dateObj) {
    const day = dateObj.actualDate.getDay();
    if (day === 6 || day === 0) {
      dateObj.modifiedDate = new Date(dateObj.calculatedDate);
      dateObj.updatedForWeekend = true;
      dateObj.modifiedDate.setDate(dateObj.calculatedDate.getDate() + (!day ? 1 : 2));
      dateObj.actualDate = dateObj.modifiedDate;
      dateObj.readableActualDate = dateObj.reabableModifiedDate = dateObj.actualDate.toDateString();
    }
  }

  checkForHoliday(dateObj) {
    if (dateObj.actualDate.getDay() === 1 && dateObj.actualDate.getMonth() === 1) {
      // new years
    } else if (dateObj.actualDate.getDay() === 4 && dateObj.actualDate.getMonth() === 7) {
      // july 4th
    } else if (dateObj.actualDate.getDay() === 11 && dateObj.actualDate.getMonth() === 11) {
      // veterans day
    } else if (dateObj.actualDate.getDay() === 25 && dateObj.actualDate.getMonth() === 12) {
      // christmas
    }
  }

  calculateDate(i, date) {
    const dateObj = {
      calculatedDate: new Date(date),
      reabableCalculatedDate: null,
      modifiedDate: null,
      readableModifiedDate: null,
      actualDate: null,
      readableActualDate: null,
      updatedForWeekend: false,
      updatedForHoliday: false,
      holidayName: null,
    };
    dateObj.calculatedDate.setDate(dateObj.calculatedDate.getDate() + parseInt(i, 10));
    dateObj.reabableCalculatedDate = dateObj.calculatedDate.toDateString();
    dateObj.actualDate = dateObj.calculatedDate;
    dateObj.readableActualDate = dateObj.reabableCalculatedDate;
    this.checkForWeekend(dateObj);
    this.dates.push(dateObj);
    return dateObj.actualDate;
  }

  calculateAllDates(date) {
    const allDates = [90, 60, 60, 21];
    let tempDate = date;
    allDates.forEach((i) => {
      tempDate = this.calculateDate(i, tempDate);
    });
  }
}
