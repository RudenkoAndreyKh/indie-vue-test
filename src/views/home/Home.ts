import { Component, Vue } from 'vue-property-decorator';
import SearchingResults from '../../components/searching-results';
import DatePicker from 'vue2-datepicker'

@Component({
    components: {
        SearchingResults,
        DatePicker 
    },
})
export default class Home extends Vue {
    public fromWhereText = '';
    public cities = [
        'Kharkiv',
        'Kiev',
        'Amsterdam',
        'Paris',
        'Berlin',
        'Montecarlo',
    ];

    time1 = '';
    time2 = '';
    time3 = '';
    // custom lang
    lang = {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
            date: 'Select Date',
            dateRange: 'Select Date Range'
        }
    }
    shortcuts = [
        {
            text: 'Today',
            onClick: () => {
                this.time3 = [new Date(), new Date()].toString();
            }
        }
    ];
    timePickerOptions = {
        start: '00:00',
        step: '00:30',
        end: '23:30'
    }



    public fromWhere() {
        this.fromWhereText = this.fromWhereText;
    }
}
