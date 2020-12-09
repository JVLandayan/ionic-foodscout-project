export class Restaurant {
    id: string;
    constructor(
        public Title: string, 
        public Description: string, 
        public imageMain: string,
        public rating : number,
        public priceMax:number, 
        public priceMin:number,
        public rId: string
        ) {}
}