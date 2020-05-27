export class ServiceGuitarsVenta {
         private readonly guitars: object[] = [
           {
             id: 0,
             instrumento: "guitarra",
             name: "Guitarra Etayo Venta", //En pag Guitarras NOMBRE GUITARRA
             tipo:
               "Guitarra eléctrica Klein Sólida de madera de sapelly y fresno.", //En pag Guitarras RESUMEN CARACTERISTICAS GUITARRA
             woodTapa: "Tapa de madera de Fresno",
             woodCuerpo: "Cuerpo sólido de madera de Sapelly",
             clavijeroType: "Doble arco",
            //  horizontal:true,
             precio: 10000,
             imagePath: "./../../assets/images/GuitarrasVenta/Guitar_01/",
             images: [
               "GuitVenta1_Foto1_Comp20-1500x844.jpg",
               "GuitVenta1_Foto2_Comp20-1500x844.jpg",
               "GuitVenta1_Foto3_Comp20-1500x844.jpg",
               "GuitVenta1_Foto4_Comp20-1500x844.jpg",
               "GuitVenta1_Foto5_Comp20-1500x844.jpg",
               "GuitVenta1_Foto6_Comp20-1500x844.jpg",
              ],
             imageList: "GuitVenta1_Foto1_Comp20-1500x844.jpg",
             imageShowR: "GuitVenta1_Foto6_Comp20-1500x844.jpg",
             chars: {
               //En pag Show Guitars TabsCARACTERISTICAS GUITARRA
               Cuerpo: ["Cuerpo Sólido de madera de sapelly y fresno."],
               Mástil: ["Madera de arce.", "Diapasón de ébano."],
               Componentes: [
                 "Puente Jcustom headless.",
                 "Cejuela de bloqueo Jcustom Headless.",
               ],
               Pastillas: ["Pastillas: Gibson 57 Classic Humbucker."],
             },
           },
         ];

         getGuitarsVenta() {
           return this.guitars;
         }
         constructor() {}
       }
