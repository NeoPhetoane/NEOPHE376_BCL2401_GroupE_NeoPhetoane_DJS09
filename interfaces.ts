import { LoyaltyUser } from "./enums";
import { Price, Country } from "./types";

//Interface used to combat repetition of declaring what types of data are allowed.
export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

//Interface Property
export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}
