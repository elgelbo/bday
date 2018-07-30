var a = moment([2018, 0, 27]);
var b = moment();
var m = b.diff(a, 'months');
var w = b.diff(a, 'weeks');
var d = b.diff(a, 'days');
var curr = moment().date();

if (curr < 27) {
    var prevMoBday = b.subtract(1, 'months').startOf('month').add(26, 'days').format('YYYY-MM-DD');
    var mDays = moment().diff(prevMoBday, 'days');
} else if (curr > 27) {
    var dDiff = curr - 27;
    var mDays = " and " + dDiff + " days ";
} else if (curr = 27){
    var mDays =  '';
}

console.log(dDiff);


var wPlus = Math.round(d - (w * 7));
var mPlus = m;

document.getElementById("demo").innerHTML = 

"Quincy is " + m + " months" + mDays +" old today!<br>" +

"Quincy is " + w + " weeks and " + wPlus + " days old today!<br> Quincy is " + "<strong>" + d +"</strong>" + " days old today!";