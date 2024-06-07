
const reviewTotalDisplay = document.querySelector("#reviews");

const reviews = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

//function to show total number of reviews and only accepts numbers

function showReviewTotal(value: number, reviewer: string, isLoyalty : boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
  reviewTotalDisplay.innerHTML = "review total" + value.toString() +'| last reviewed by ' + reviewer + " " + iconDisplay
}

//Calling the function to display
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

//Object Paramaters: keys assigned types to ensure that the data that goes into the object matches the specialised object assignments.
const you: {
    firstName : string;
    lastName: string;
    isReturning: boolean;
    age: number;
} = {

    firstName: 'Bobby',
    lastName: 'Brown'
    isReturning: true,
    age: 35
}

function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)