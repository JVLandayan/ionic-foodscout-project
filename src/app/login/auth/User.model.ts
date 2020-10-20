import { Restaurant } from 'src/app/restaurants/restaurant.model';

export class User {
    constructor(
    public authId: number,
    public userId: number,
    public email: string,
    public username: string,
    public password: string,
    public favorites : Restaurant[],
    public ownRestaurant : Restaurant,
    ) {}
}   