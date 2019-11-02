var dann = {
    firstName: "Danny",
    middleName: "A",
    lastName: "Torregroza",
    dob: [06,17,1951], //month, day, year
    likesPizza: true,
    heightInInches: 75,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return (myAge);
    },
};
var matt = {
    firstName: "Matt",
    middleName: "Charles",
    lastName: "Barnhart",
    dob: [2, 5, 1987], //month, day, year
    likesPizza: true,
    heightInInches: 70,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return (myAge);
    },
};
var marie = {
    firstName: "Marie",
    middleName: "Ann",
    lastName: "Antons",
    dob: [12, 27, 1991], // month, day, year
    likesPizza: true,
    heightInInches: 69,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        //getMonth will result in 0 for Jan, 1 for Feb, etc...
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var age = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            age--;
        }
        return (age);
    },
};
var mike = {
    firstName: "Mike",
    middleName: "Danger",
    lastName: "Rusnak",
    dob: [7, 1, 1985], //M, D, Y. This is added as an array so we can utlize this later.
    likesPizza: true,
    heightInInches: 73,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        // getMonth will result in 0 for Jan.
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return (myAge);
    },
};
var zach = {
    firstName: "Zachary",
    lastName: "Murrell",
    middleName: "Allyn",
    dob: [3, 22, 1994], //month, day, year of birth
    heightInInches: 75,
    likesPizza: true,
    fullName: function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return myAge;
    },
};
var kristine = {            //object exclusive to Kristine's details
    firstName: "Kristine",  //comma not semi-colon
    middleName: "Marie",
    lastName: "Bullock",
    dob: [10, 23, 1986],  //create array for birthday mm/dd/yyyy
    heightInches: 69,
    fullName: function() {    //function stored as a key is known as a method
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;  //the word 'this' refers to the property of the current object and tries to find firstName
      },
      age: function() {
        var today = new Date(); //built in JS object that gets today's date
        var year = today.getFullYear(); //gets year for today's date
        
        // getMonth will result in 0 for January, 1 for February, etc.    
        var month = today.getMonth() +1; //list of months starts at 0 in the array so you have to add 1 to get 1-12
        var day = today.getDate();
        
        // The birth year is at index position 2 of the DOB array
        var myAge = year - this.dob[2];
        
        if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {  //dob[0] pulls the month position from my dob array
          // Subtract one from the age if you haven't had your birthday this year.
          myAge--;
        }
        return(myAge);
      }
};  
var courtney = {
    firstName: "Courtney",
    middleName: "Beth",
    lastName: "Magner",
    dob: [11, 1, 1994], // month, day, year
    likesPizza: true,
    heightInInches: 63,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date(); // new Date is built in function that pulls in the date
        var year = today.getFullYear();
        var month = today.getMonth() + 1; // getMonth will result in 0 for Jan, 1 for Feb, ect. Adding 1 add the end to match numbers we know
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return (myAge);
    },
}; 
var dusty = {
    firstName: "Dusty",
    middleName: "Wyatt",
    lastName: "Juhl",
    dob: [1, 3, 1977], //month, day, year
    likesPizza: true,
    heightInInches: 69,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        };
        return (myAge);
    },
};
var kyle = {
    firstName: "Kyle",
    middleName: "Lynn",
    lastName: "Kuhlers",
    dob: [4, 3, 1970],
    likesPizza: false,
    heightInInches: 65,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' +
            this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return (myAge);
    },
};
var lexie = {
    firstName: "Lexie",  // key followed byvalue, astring
    middleName: "Elaine",
    lastName: "Hawkins",
    dob: [2, 14, 1968], //month, day, year
    likesPizza: true,
    heightInInches: 66,
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' +
            this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return (myAge);
    },
};
var bryan = {
    firstName: "Bryan",
    middleName: "Christopher",
    lastName: "Dietzler",
    dob: [8, 24, 1973], //month, day, year
    likesPizza: "true",
    heightInInches: "68",
    fullName: function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        //getMonth will result in 0 for January, 1 for February, etc.
        var month = today.getMonth() + 1;
        var day = today.getDate();
        //The birth year is at index position 2 of the group
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myage--;
        }
        return (myAge);
    }
};
var lilly =
{
    firstName: "Lilly",
    middleName: "Violet",
    lastName: "McBride",
    dob: [9, 14, 1991],
    likesPizza: true,
    fullName: function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return myAge;
    }
};
var danny = {
    firstName: "Daniel",
    middleName: "A",
    lastName: "Torregroza",
    dob: [6, 17, 1971],//month, day, year
    likesPizza: true,
    heightInInches: 75,
    fullName: function() {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    },
    age: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
            myAge--;
        }
        return (myAge);
    }, 
};
var friends = [];
friends.push(marc);
friends.push(matt);
friends.push(marie);
friends.push(mike);
friends.push(zach);
friends.push(kristine);
friends.push(courtney);
friends.push(dusty);
friends.push(kyle);
friends.push(lexie);
friends.push(bryan);
friends.push(lilly);
friends.push(danny);
friends.forEach(function(person) {
    var result = "";
    result += person.fullName() + " is " + person.age() + " years young and ";
    result += person.likesPizza ? "does" : "doesn't";
    result += " like pizza.";
    print(result);
});
