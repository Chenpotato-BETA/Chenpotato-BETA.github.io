import {
    c as e,
    e as t,
    a6 as a,
    g as o
} from "./el-select.e274bb48.js";
import {
    b as r,
    a as n
} from "./index.0e1148e8.js";
var l = {
    name: "en",
    el: {
        colorpicker: {
            confirm: "OK",
            clear: "Clear",
            defaultLabel: "color picker",
            description: "current color is {color}. press enter to select a new color."
        },
        datepicker: {
            now: "Now",
            today: "Today",
            cancel: "Cancel",
            clear: "Clear",
            confirm: "OK",
            dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
            monthTablePrompt: "Use the arrow keys and enter to select the month",
            yearTablePrompt: "Use the arrow keys and enter to select the year",
            selectedDate: "Selected date",
            selectDate: "Select date",
            selectTime: "Select time",
            startDate: "Start Date",
            startTime: "Start Time",
            endDate: "End Date",
            endTime: "End Time",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            year: "",
            month1: "January",
            month2: "February",
            month3: "March",
            month4: "April",
            month5: "May",
            month6: "June",
            month7: "July",
            month8: "August",
            month9: "September",
            month10: "October",
            month11: "November",
            month12: "December",
            week: "week",
            weeks: {
                sun: "Sun",
                mon: "Mon",
                tue: "Tue",
                wed: "Wed",
                thu: "Thu",
                fri: "Fri",
                sat: "Sat"
            },
            weeksFull: {
                sun: "Sunday",
                mon: "Monday",
                tue: "Tuesday",
                wed: "Wednesday",
                thu: "Thursday",
                fri: "Friday",
                sat: "Saturday"
            },
            months: {
                jan: "Jan",
                feb: "Feb",
                mar: "Mar",
                apr: "Apr",
                may: "May",
                jun: "Jun",
                jul: "Jul",
                aug: "Aug",
                sep: "Sep",
                oct: "Oct",
                nov: "Nov",
                dec: "Dec"
            }
        },
        inputNumber: {
            decrease: "decrease number",
            increase: "increase number"
        },
        select: {
            loading: "Loading",
            noMatch: "No matching data",
            noData: "No data",
            placeholder: "Select"
        },
        dropdown: {
            toggleDropdown: "Toggle Dropdown"
        },
        cascader: {
            noMatch: "No matching data",
            loading: "Loading",
            placeholder: "Select",
            noData: "No data"
        },
        pagination: {
            goto: "Go to",
            pagesize: "/page",
            total: "Total {total}",
            pageClassifier: "",
            deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
        },
        dialog: {
            close: "Close this dialog"
        },
        drawer: {
            close: "Close this dialog"
        },
        messagebox: {
            title: "Message",
            confirm: "OK",
            cancel: "Cancel",
            error: "Illegal input",
            close: "Close this dialog"
        },
        upload: {
            deleteTip: "press delete to remove",
            delete: "Delete",
            preview: "Preview",
            continue: "Continue"
        },
        slider: {
            defaultLabel: "slider between {min} and {max}",
            defaultRangeStartLabel: "pick start value",
            defaultRangeEndLabel: "pick end value"
        },
        table: {
            emptyText: "No Data",
            confirmFilter: "Confirm",
            resetFilter: "Reset",
            clearFilter: "All",
            sumText: "Sum"
        },
        tree: {
            emptyText: "No Data"
        },
        transfer: {
            noMatch: "No matching data",
            noData: "No data",
            titles: ["List 1", "List 2"],
            filterPlaceholder: "Enter keyword",
            noCheckedFormat: "{total} items",
            hasCheckedFormat: "{checked}/{total} checked"
        },
        image: {
            error: "FAILED"
        },
        pageHeader: {
            title: "Back"
        },
        popconfirm: {
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }
    }
};
const c = e => (a, o) => s(a, o, t(e)),
    s = (e, t, a) => n(a, e, e).replace(/\{(\w+)\}/g, ((e, a) => {
        var o;
        return `${null!=(o=null==t?void 0:t[a])?o:`{${a}}`}`
    })),
    d = () => {
        const n = r("locale");
        return (r => ({
            lang: e((() => t(r).name)),
            locale: a(r) ? r : o(r),
            t: c(r)
        }))(e((() => n.value || l)))
    };
export {
    d as u
};