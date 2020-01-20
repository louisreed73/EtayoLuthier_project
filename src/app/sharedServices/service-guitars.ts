export class ServiceGuitars {
private readonly guitars:object[]=[
    {
        id:0,
        name:"Les Paul",
        price:1650,
        woodType:"Alce",
        clavijeroType:"Doble arco"
    },
    {
        id:1,
        name:"Stratocaster",
        price:1650,
        woodType:"Alce",
        clavijeroType:"Doble arco"
    },
    {
        id:2,
        name:"Fender ST",
        price:1650,
        woodType:"Alce",
        clavijeroType:"Doble arco"
    },
];

getGuitars() {
    return this.guitars
}
    constructor() {

    }
}
