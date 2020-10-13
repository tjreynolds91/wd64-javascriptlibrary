class Polygon {
    constructor (arr){
    this.arr = arr;
    
    }

    perimeter() {
        // create a new var to hold returned value from reduce 
            // use built in method .reduce() on arr
        // return it
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.arr.reduce(reducer);

}
}

let polygon2 = new Polygon([3,3,8,8])
console.log(polygon2.perimeter());