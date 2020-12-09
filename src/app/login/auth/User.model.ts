import { Restaurant } from 'src/app/restaurants/restaurant.model';

export class User {
    id: any;
    constructor(
    public authId: number,
    public email: string,
    public username: string,
    public password: string,
    public favorites : Restaurant[],
    public userId?: string,
    ) {}
}   