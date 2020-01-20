export class ServiceBasses {
    private readonly basses:object[]=[
        {
            id:0,
            name:"Bass Les Paul",
            price:1650,
            woodType:"Alce",
            clavijeroType:"Doble arco"
        },
        {
            id:1,
            name:"Bass Stratocaster",
            price:1650,
            woodType:"Alce",
            clavijeroType:"Doble arco"
        },
        {
            id:2,
            name:"Bass Fender ST",
            price:1650,
            woodType:"Alce",
            clavijeroType:"Doble arco"
        },
    ];
    
    getBasses() {
        return this.basses
    }
        constructor() {
    
        }
    }