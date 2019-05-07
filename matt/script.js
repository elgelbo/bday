const name = 'Matt'
const a = moment([1984, 9, 9]);
const now = moment();
const y = now.diff(a, 'years', true);
const m = now.diff(a, 'months', true);
const w = now.diff(a, 'weeks', true);
const d = now.diff(a, 'days', true);
const curr = now.date();
const prevMoBday = now.subtract(1, 'months').startOf('month').add((a.date() - 1), 'days');



let age = '';

age += `${name} is`

// DISPLAY YEARS
if (y > 2) {
    age += ' ' + parseInt(y) + ' years'
} else if (y < 2 && y >= 1) {
    age += ' ' + parseInt(y) + ' year';
}

console.log(age);

const m2 = parseInt(m) - (parseInt(y) * 12);  
// TODO: fix months for less than a year
if (m > ((parseInt(y) * 12) + 1)) {
    if (y >= 1) {
        age += ', '
    } else {
        age += ' '
    }
    if (m2 >= 1 && m2 < 2) {
        age += m2 + ' month';
    } else if (m2 >= 2) {
        age += m2 + ' months';
    }
}
console.log(age);
getWeeks = (days) => {
    var weeks = parseInt(days/7);
    var dAdj = days - (weeks*7);
    let wkDy = '';
    if (days === 1) {
        wkDy += ` and ${days} day`
    } else if (days < 7) {
        wkDy += ` and ${days} days`
    } else if (days >= 7 && days < 14) {
        wkDy += `, ${weeks} week`
        if (dAdj === 1) {
            wkDy += `, and ${dAdj} day`
        } else if (dAdj > 1) {
            wkDy += `, and ${dAdj} days`
        }
    } else if (days > 14) {
        wkDy += `, ${weeks} weeks`
        if (dAdj === 1) {
            wkDy += `, and ${dAdj} day`
        } else if (dAdj > 1) {
            wkDy += `, and ${dAdj} days`
        }
    }
    console.log(wkDy);
    

    return wkDy;
}

if (curr < a.date()){
    var dDiff = moment().diff(prevMoBday, 'days');
    var weeks = getWeeks(dDiff);
    age += weeks;
} else if (curr > a.date()){
    var dDiff = curr - a.date();  
    var weeks = getWeeks(dDiff);
    age += weeks;
}
console.log(age);
age += ' old today!'

document.getElementById("demo").innerHTML = age;
document.getElementById("detail-days").innerHTML = `${parseInt(d)} days |`;
document.getElementById("detail-weeks").innerHTML = `${parseInt(w)} weeks |`;
document.getElementById("detail-months").innerHTML = `${parseInt(m)} months`;