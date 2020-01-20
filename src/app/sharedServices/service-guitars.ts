export class ServiceGuitars {
private readonly guitars:object[]=[
    {
        name:"Les Paul",
        price:1650,
        woodType:"Alce",
        clavijeroType:"Doble arco"
    },
    {
        name:"Stratocaster",
        price:1650,
        woodType:"Alce",
        clavijeroType:"Doble arco"
    },
    {
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
