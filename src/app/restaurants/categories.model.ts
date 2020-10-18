export class Categories {
    constructor(
        public id: number,
        public details: {
        name: string, 
        svgUrl: string,
        clrCode: string
        } 
        ) {}
}