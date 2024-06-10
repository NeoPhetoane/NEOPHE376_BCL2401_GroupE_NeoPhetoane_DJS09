const returningUserDisplay = document.querySelector("#returning-user") as HTMLElement;
const userNameDisplay = document.querySelector("#user") as HTMLElement;
const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;
import { LoyaltyUser, Permissions } from "./enums";
import { Review } from "./interfaces";

//function to show total number of reviews and only accepts numbers
export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value.toString() +
    "Review" +
    makeMultiple(value) +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

//Function to display the price
export function showDetails(
  value: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

// Other Broken code from Function Type practice
export function getTopTwoReviews(reviews: Review[]) : Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
