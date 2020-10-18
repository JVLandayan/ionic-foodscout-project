export class Restaurant {
    constructor(
        public id: string, 
        public rTitle: string, 
        public rDescription: string, 
        public rimageUrl: 
            {imgMain: string,imgSub: {}[]},
        public rRating : number,
        public rPrice: 
            {min:number, max:number},
        public isFavorite: boolean) {}
}