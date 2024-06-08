const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");

//function to show total number of reviews and only accepts numbers

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
      "review total" +
      value.toString() +
      "| last reviewed by " +
      reviewer +
      " " +
      iconDisplay;
  }

  function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
      returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
  }
  

  