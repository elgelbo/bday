var a = moment([2017, 10, 09]);
var b = moment();
var m = b.diff(a, 'months');
var w = b.diff(a, 'weeks');
var d = b.diff(a, 'days');
var curr = moment().date();

if (curr < 16) {
    var prevMoBday = b.subtract(1, 'months').startOf('month').add(15, 'days').format('YYYY-MM-DD');
    var dDiff = moment().diff(prevMoBday, 'days');
    var mDays = " and " + dDiff + " days ";
} else if (curr > 16) {
    var dDiff = curr - 16;
    var mDays = " and " + dDiff + " days ";
} else if (curr = 16) {
    var mDays = '';
}

var wPlus = Math.round(d - (w * 7));
var mPlus = m;

document.getElementById("demo").innerHTML =

    "Jack is " + m + " months" + mDays + " old today!<br>" +

    "Jack is " + w + " weeks and " + wPlus + " days old today! <br> Jack is " + "<strong>" + d + "</strong>" + " days old today!";