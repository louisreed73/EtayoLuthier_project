export class ServiceGuitarsVenta {
         private readonly guitars: object[] = [
           {
             id: 0, 
             instrumento: "guitarra",
             name: "Guitarra Etayo Venta Klein Standard", //En pag Guitarras NOMBRE GUITARRA
             tipo:
               "Guitarra eléctrica Klein Sólida de madera de sapelly y fresno.", //En pag Guitarras RESUMEN CARACTERISTICAS GUITARRA
             woodTapa: "Tapa de madera de Fresno",
             woodCuerpo: "Cuerpo sólido de madera de Sapelly",
             clavijeroType: "Doble arco",
             imagePath: "./../../assets/images/GuitarrasVenta/Guitar_01/",
             images: ["image_1.png"],
             imageList: "image_1.png",
             imageShowR: "image_1.png",
             chars: {  //En pag Show Guitars TabsCARACTERISTICAS GUITARRA
               Cuerpo: ["Cuerpo Sólido de madera de sapelly y fresno."],
               Mástil: [
                 "Madera de arce.",
                  "Diapasón de ébano."
                ],
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
