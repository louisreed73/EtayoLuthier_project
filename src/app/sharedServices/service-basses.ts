export class ServiceBasses {
    private readonly basses:object[]=[
        {
            name:"Bass Les Paul",
            price:1650,
            woodType:"Alce",
            clavijeroType:"Doble arco"
        },
        {
            name:"Bass Stratocaster",
            price:1650,
            woodType:"Alce",
            clavijeroType:"Doble arco"
        },
        {
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