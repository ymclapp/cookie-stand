'use strict';
// use strict is almost always the first line of our js files
console.log('It is working!');

var parentElement = document.getElementById('salesData');

var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = locOne.name;
article.appendChild(h2);

var locParagraph = document.createElement('p');
locParagraph.textContent = 'placeholder';
article.appendChild(locParagraph);

var locOne = {
    name: 'Seattle Store',
    cookieMin: 23,
    cookieMax: 65,
    cookieAvg: 6.3,
    cookieNum: 0,
    hoursOpen: 0600,
    hourClose: 1900,
    setCookies: function() {
        this.cookieNum = hoursOpen + randomCookies(23,65);

    }
}

function randomCookies(min,max){
    return Math.floor(Math.random()*(max-min +1) + min);
}

var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i<locOne.hoursOpen.length; i++) {
    var li = document.createElement (`li`);
    li.textContent = locOne.hours[i];
    ul.appendChild(li);

}
