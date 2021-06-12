import { Vue, Component } from 'vue-property-decorator';
import vuejsDatepicker from 'vuejs-datepicker';
import holidays from '../../data/holidays';

@Component({
  template: require('./dateForm.html'),
  style: require('./dateForm.scss'),
  components:{
    Datepicker: vuejsDatepicker,
  },
})

export default class dateForm extends Vue {

  custom = '';
  selected = '';
  selectedDate = null;
  dates = [];

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
      case '30':
        this.calculateDate(30, this.selectedDate);
        break;
      case '21':
        this.calculateDate(21, this.selectedDate);
    }
  }

  checkForWeekend(dateObj) {
    const day = dateObj.actualDate.getDay();
    if (day === 6 || day === 0) {
      dateObj.updatedForWeekend = true;
      this.updateDate(dateObj, (!day ? 1 : 2));
      this.checkForHoliday(dateObj);
    }
  }

  checkForHoliday(dateObj) {
    if (dateObj.actualDate.getDate() === 1 && dateObj.actualDate.getMonth() === 0) {
      this.updateDate(dateObj, 1);
      dateObj.holidayName = 'New Years Day';
      dateObj.updatedForHoliday = true;
      this.checkForWeekend(dateObj);
    } else if (dateObj.actualDate.getDate() === 4 && dateObj.actualDate.getMonth() === 6) {
      this.updateDate(dateObj, 1);
      dateObj.holidayName = '4th of July';
      dateObj.updatedForHoliday = true;
      this.checkForWeekend(dateObj);
    } else if (dateObj.actualDate.getDate() === 11 && dateObj.actualDate.getMonth() === 10) {
      this.updateDate(dateObj, 1);
      dateObj.holidayName = 'Veterans Day';
      dateObj.updatedForHoliday = true;
      this.checkForWeekend(dateObj);
    } else if (dateObj.actualDate.getDate() === 25 && dateObj.actualDate.getMonth() === 11) {
      this.updateDate(dateObj, 1);
      dateObj.holidayName = 'Christmas Day';
      dateObj.updatedForHoliday = true;
      this.checkForWeekend(dateObj);
    }
    holidays.forEach((holiday) => {
      if (holiday.date.getDate() === dateObj.actualDate.getDate() &&
          holiday.date.getMonth() === dateObj.actualDate.getMonth() &&
          holiday.date.getFullYear() === dateObj.actualDate.getFullYear()) {
        this.updateDate(dateObj, 1);
        dateObj.holidayName = holiday.name;
        dateObj.updatedForHoliday = true;
        this.checkForWeekend(dateObj);
      }
    });
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
    this.checkForHoliday(dateObj);
    this.checkForWeekend(dateObj);
    this.dates.push(dateObj);
    return dateObj.actualDate;
  }

  calculateAllDates(date) {
    const allDates = [90, 60, 60, 30, 21];
    let tempDate = date;
    allDates.forEach((i) => {
      tempDate = this.calculateDate(i, tempDate);
    });
  }

  updateDate(dateObj, i) {
    dateObj.modifiedDate = new Date(dateObj.actualDate);
    dateObj.modifiedDate.setDate(dateObj.actualDate.getDate() + parseInt(i, 10));
    dateObj.actualDate = dateObj.modifiedDate;
    dateObj.readableActualDate = dateObj.reabableModifiedDate = dateObj.actualDate.toDateString();
  }
}
