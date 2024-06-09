import { LoyaltyUser } from './enums'


//Interface used to combat repetition of declaring what types of data are allowed.
export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}