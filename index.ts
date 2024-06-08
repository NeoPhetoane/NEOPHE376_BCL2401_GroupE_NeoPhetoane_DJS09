import { showReviewTotal, populateUser } from "./utils";
let isOpen: boolean;

//Reviews list
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
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

//Object Paramaters: keys assigned types to ensure that the data that goes into the object matches the specialised object assignments.
const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//Properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: "",
    title: "Red Container",
    price: 6000,
    location: {
      firstLine: "23 Lenatong",
      city: "Rustenburg",
      code: 2999,
      country: "South Africa",
    },
    contact: "lebogang@gmail.com",
    isAvailable: true,
  },
  {
    image: "",
    title: "Car wash",
    price: 50000,
    location: {
      firstLine: "no 27",
      city: "London",
      code: 343903,
      country: "England",
    },
    contact: "garydavis@hotmail.com",
    isAvailable: false,
  },
  {
    image: "",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: "andyluger@aol.com",
    isAvailable: true,
  },
];

//Calling the function to display
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
