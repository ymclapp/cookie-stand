'use strict';
// use strict is almost always the first line of our js files
console.log('It is working!');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var locOne = {
    name: 'Seattle Store',
    custMin: 23,
    custMax: 65,
    cookieAvgSale: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    // [adapted from Sam's code on Github]
    calcCustomersEachHour: function() { 
        for (var i=0; i< hours.length; i++) {
        this.customersEachHour.push(random(this.customersEachHour, this.custMin, this.custMax));
        }
    },

    calcCookiesEachHour: function() {
        this.calcCookiesEachHour();
        for (var i= 0; i < hours.length; i++) {
            var oneHour = Math.ceil(this.customrEachHour[i] * this.cookieAvgSale);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },

    render() {
        this.calcCookiesEachHour();
        var theUL = document.getElementById('locOne');
        for (var i = 0; i < hours.length; i++) {
          var liEl = document.createElement('li');
          // 6am: 16 cookies
          liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
          theUL.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        theUL.appendChild(liEl);
      }
    
}

// locOne.cookiesEachHour();

// var locTwo = {
//     name: 'Tokyo Store',
//     custMin: 3,
//     custMax: 24,
//     cookieAvgSale: 1.2,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,
//     calcCustomersEachHour: function() { 
//         for (var i=0; i< hours.length; i++) {
//         this.customersEachHour.push(random(this.customersEachHour, this.custMin, this.custMax));
//         }
//     },

//     calcCookiesEachHour: function() {
//         this.calcCookiesEachHour();
//         for (var i= 0; i < hours.length; i++) {
//             var oneHour = Math.ceil(this.customrEachHour[i] * this.cookieAvgSale);
//             this.cookiesEachHour.push(oneHour);
//             this.totalDailyCookies += oneHour;
//         }
//     },

//     render() {
//         this.calcCookiesEachHour();
//         var theUL = document.getElementById('locTwo');
//         for (var i = 0; i < hours.length; i++) {
//           var liEl = document.createElement('li');
//           // 6am: 16 cookies
//           liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//           theUL.appendChild(liEl);
//         }
//         liEl = document.createElement('li');
//         liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         theUL.appendChild(liEl);
//       }
    
// }

// // locTwo.randomCookies();


// var locThree = {
//     name: 'Dubai Store',
//     custMin: 11,
//     custMax: 38,
//     cookieAvgSale: 3.7,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,
//     calcCustomersEachHour: function() { 
//         for (var i=0; i< hours.length; i++) {
//         this.customersEachHour.push(random(this.customersEachHour, this.custMin, this.custMax));
//         }
//     },

//     calcCookiesEachHour: function() {
//         this.calcCookiesEachHour();
//         for (var i= 0; i < hours.length; i++) {
//             var oneHour = Math.ceil(this.customrEachHour[i] * this.cookieAvgSale);
//             this.cookiesEachHour.push(oneHour);
//             this.totalDailyCookies += oneHour;
//         }
//     },

//     render() {
//         this.calcCookiesEachHour();
//         var theUL = document.getElementById('locThree');
//         for (var i = 0; i < hours.length; i++) {
//           var liEl = document.createElement('li');
//           // 6am: 16 cookies
//           liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//           theUL.appendChild(liEl);
//         }
//         liEl = document.createElement('li');
//         liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         theUL.appendChild(liEl);
//       }
    
// }

// // locThree.totalDailyCookies();

// var locFour = {
//     name: 'Paris Store',
//     custMin: 20,
//     custMax: 38,
//     cookieAvgSale: 2.3,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,
//     calcCustomersEachHour: function() { 
//         for (var i=0; i< hours.length; i++) {
//         this.customersEachHour.push(random(this.customersEachHour, this.custMin, this.custMax));
//         }
//     },

//     calcCookiesEachHour: function() {
//         this.calcCookiesEachHour();
//         for (var i= 0; i < hours.length; i++) {
//             var oneHour = Math.ceil(this.customrEachHour[i] * this.cookieAvgSale);
//             this.cookiesEachHour.push(oneHour);
//             this.totalDailyCookies += oneHour;
//         }
//     },

//     render() {
//         this.calcCookiesEachHour();
//         var theUL = document.getElementById('locFour');
//         for (var i = 0; i < hours.length; i++) {
//           var liEl = document.createElement('li');
//           // 6am: 16 cookies
//           liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//           theUL.appendChild(liEl);
//         }
//         liEl = document.createElement('li');
//         liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         theUL.appendChild(liEl);
//       }
    
// }

// // locFour.totalDailyCookies();

// var locFive = {
//     name: 'Lima Store',
//     custMin: 2,
//     custMax: 16,
//     cookieAvgSale: 4.6,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,
//     calcCustomersEachHour: function() { 
//         for (var i=0; i< hours.length; i++) {
//         this.customersEachHour.push(random(this.customersEachHour, this.custMin, this.custMax));
//         }
//     },

//     calcCookiesEachHour: function() {
//         this.calcCookiesEachHour();
//         for (var i= 0; i < hours.length; i++) {
//             var oneHour = Math.ceil(this.customrEachHour[i] * this.cookieAvgSale);
//             this.cookiesEachHour.push(oneHour);
//             this.totalDailyCookies += oneHour;
//         }
//     },

//     render() {
//         this.calcCookiesEachHour();
//         var theUL = document.getElementById('locFive');
//         for (var i = 0; i < hours.length; i++) {
//           var liEl = document.createElement('li');
//           // 6am: 16 cookies
//           liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//           theUL.appendChild(liEl);
//         }
//         liEl = document.createElement('li');
//         liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         theUL.appendChild(liEl);
//       }
    
// }

// locFive.setCookies();

// Copied and updated from kitty adoption code

var parentElement = document.getElementById('locationDetails');

var article = document.createElement('article');
parentElement.appendChild(article);

var h3 = document.createElement('h3');
h3.textContent = locOne.name;
article.appendChild(h3);

// var locParagraph = document.createElement('p');
// locParagraph.textContent = 'placeholder';
// article.appendChild(locParagraph);

var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i<locOne.cookies; i++) {
    var li = document.createElement (`li`);
    li.textContent = locOne.cookies[i];
    ul.appendChild(li);

}

// h3 = document.createElement('h3');
// h3.textContent = locTwo.name;
// article.appendChild(h3);

// var locParagraph = document.createElement('p');
// locParagraph.textContent = 'placeholder';
// article.appendChild(locParagraph);

// ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i<locTwo.cookies; i++) {
//     var li = document.createElement (`li`);
//     li.textContent = locTwo.cookies[i];
//     ul.appendChild(li);

// }

// h3 = document.createElement('h3');
// h3.textContent = locThree.name;
// article.appendChild(h3);

// var locParagraph = document.createElement('p');
// locParagraph.textContent = 'placeholder';
// article.appendChild(locParagraph);

// ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i<locThree.cookies; i++) {
//     var li = document.createElement (`li`);
//     li.textContent = locThree.cookies[i];
//     ul.appendChild(li);

// }

// h3 = document.createElement('h3');
// h3.textContent = locFour.name;
// article.appendChild(h3);

// var locParagraph = document.createElement('p');
// locParagraph.textContent = 'placeholder';
// article.appendChild(locParagraph);

// ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i<locFour.cookies; i++) {
//     var li = document.createElement (`li`);
//     li.textContent = locFour.cookies[i];
//     ul.appendChild(li);

// }

// h3 = document.createElement('h3');
// h3.textContent = locFive.name;
// article.appendChild(h3);

// var locParagraph = document.createElement('p');
// locParagraph.textContent = 'placeholder';
// article.appendChild(locParagraph);

// ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i<locFive.cookies; i++) {
//     var li = document.createElement (`li`);
//     li.textContent = locFive.cookies[i];
//     ul.appendChild(li);

// }

// function randomCookies(min,max){
//     return Math.floor(Math.random()*(max - min +1) + min);
// }

function random(custMin, custMax) {
    return Math.floor(Math.random() * (custMax - custMin + 1)) + min;
  }
//   var allShops = [locOne, locTwo, locThree, locFour, locFive];
    var allShops = [locOne];
  (function renderAllShops() {
    for(var i = 0; i < allShops.length; i++){
      allShops[i].render();
    }
  })();