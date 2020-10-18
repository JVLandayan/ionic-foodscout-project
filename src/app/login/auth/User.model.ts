
export class User {
    constructor(
    public authId: number,
    public userId: number,
    public email: string,
    public username: string,
    public password: string
    ) {}
}