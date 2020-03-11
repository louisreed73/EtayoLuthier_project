export class ServiceGuitarsKlein {
         private readonly guitars: object[] = [           
           {
             id: 0,
             instrumento:"guitarra",
             name: "Guitarra Etayo Klein Standard",
             tipo: "Guitarra eléctrica Klein Sólida de madera de sapelly y fresno.",//En pag Guitarras solo esta Caract
             woodTapa: "Tapa de madera de Fresno",
             woodCuerpo: "Cuerpo sólido de madera de Sapelly",
             clavijeroType: "Doble arco",
             imagePath: "./../../assets/images/Guitarras/Guitar_05/",
             images: [
               "Guit5_Foto1_Comp20-1024x682.jpg",
               "Guit5_Foto2_Comp20-570x380.jpg",
               "Guit5_Foto3_Comp20-938x1250.jpg",
               "Guit5_Foto4_Comp20-938x1250.jpg",
               "Guit5_Foto5_Comp20-938x1250.jpg",
               "Guit5_Foto6_Comp20-938x1250.jpg",
               "Guit5_Foto7_Comp20-1374x933.jpeg",
               "Guit5_Foto8_Comp20-1599x1600.jpeg",
               "Guit5_Foto9_Comp20-1250x938.jpg",
               "Guit5_Foto10_Comp20-938X1250.jpg"
             ],
             imageList: "Guit5_Foto1_Comp20-570x380.jpg",
             imageShowR: "Guit5_Foto7_Comp20-1374x933.jpeg",
             chars:
             {
               Cuerpo:
                 ["Cuerpo Sólido de madera de sapelly y fresno.",
 
                 ],
               Mástil:
                 ["Madera de arce.",
                   "Diapasón de ébano.",

                 ],
               Componentes:
                 ["Puente Jcustom headless.",
                   "Cejuela de bloqueo Jcustom Headless.",

                 ],
               Pastillas:
                 ["Pastillas: Gibson 57 Classic Humbucker.",


                 ]
             }
           },
           
         ];

         getGuitarsKlein() {
           return this.guitars;
         }
         constructor() {}
       }
