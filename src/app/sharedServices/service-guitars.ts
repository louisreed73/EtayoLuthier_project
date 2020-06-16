export class ServiceGuitars {
         private readonly guitars: object[] = [
           {
             id: 0,
             instrumento: "guitarra",
             name: "Guitarra Etayo Tipo Telecaster",
             tipo: "Guitarra eléctrica sólida en madera de caoba y nogal.", //En pag Guitarras solo esta Caract
             woodTapa: "Tapa de madera precompuesta Cebra",
             woodCuerpo: "Cuerpo sólido de maderas de Caoba y Nogal",
             clavijeroType: "Doble arco",
/*              precio: 800,
             //  envio:30,
             envio: "- No incluidos -", */
             imagePath: "./../../assets/images/Guitarras/Guitar_01/",
             images: [
               "Guit1_Foto3_Comp20-1024x682.jpg",
               "Guit1_Foto2_Comp20-1024x682.jpg",
               "Guit1_Foto4_Comp20-1024x682.jpg",
               "Guit1_Foto5_Comp20-1024x682.jpg",
               "Guit1_Foto6_Comp20-1024x682.jpg",
               "Guit1_Foto7_Comp20-1024x682.jpg",
               "Guit1_Foto1_Comp20-1024x682.jpg",
             ],
             imageList: "Guit1_Foto1_Comp20-1024x682.jpg",
             imageShowR: "Guit1_Foto3_Comp20-1024x682.jpg",
             chars: {
               Cuerpo: [
                 "Cuerpo Sólido, en madera de caoba y nogal.",
                 " Tapa de madera precompuesta cebra.",
               ],
               Mástil: [
                 "Neck Trough, alistonado en madera de caoba y nogal.",
                 "Diapasón de ébano.",
               ],
               Componentes: ["Puente fender telecaster.", "Clavijero Gotoh."],
               Pastillas: ["Pastillas Fender original Vintage tele pv."],
             },
           },
           {
             id: 1,
             instrumento: "guitarra",
             name: "Guitarra Etayo Vintage A",
             tipo: "Guitarra eléctrica semisólida de madera de tilo y caoba.", //En pag Guitarras solo esta Caract
             woodTapa: "Tapa de madera de Palo Rojo",
             woodCuerpo: "Cuerpo sólido de maderas de Caoba y Nogal",
             clavijeroType: "Doble arco",
/*              precio: 800,
             //  envio:30,
             envio: "- No incluidos -", */
             imagePath: "./../../assets/images/Guitarras/Guitar_02/",
             images: [
               "Guit2_Foto8_Comp20-1024x682.jpg",
               "Guit2_Foto2_Comp20-1024x682.jpg",
               "Guit2_Foto3_Comp20-1024x682.jpg",
               "Guit2_Foto4_Comp20-1024x682.jpg",
               "Guit2_Foto5_Comp20-1024x682.jpg",
               "Guit2_Foto6_Comp20-1024x682.jpg",
               "Guit2_Foto7_Comp20-1024x682.jpg",
               "Guit2_Foto1_Comp20-1024x682.jpg",
             ],
             imageList: "Guit2_Foto1_Comp20-1024x682.jpg",
             imageShowR: "Guit2_Foto8_Comp20-1024x682.jpg",
             chars: {
               Cuerpo: [
                 "Cuerpo Semisólido de madera de tilo y caoba.",
                 "Tapa armónica de madera de palo rojo.",
               ],
               Mástil: [
                 "Neck Trough, alistonado en madera de arce y caoba.",
                 "Diapasón de ébano.",
               ],
               Componentes: [
                 "Bordonero artesanal y Puente tuneomatic.",
                 "Clavijero Gotoh.",
               ],
               Pastillas: ["Pastillas Humbucker gibson 490RNH."],
             },
           },
           {
             id: 2,
             instrumento: "guitarra",
             name: "Guitarra Etayo Vintage B",
             tipo:
               "Guitarra eléctrica semihueca de madera de wengue y amaranto.", //En pag Guitarras solo esta Caract
             woodTapa:
               "Tapa de madera de Amaranto y Caoba con incrustaciones en Arce",
             woodCuerpo: "Cuerpo sólido de maderas de Caoba y Nogal",
             clavijeroType: "Doble arco",
             imagePath: "./../../assets/images/Guitarras/Guitar_03/",
             images: [
               "Guit3_Foto4_Comp20-1024x682.jpg",
               "Guit3_Foto2_Comp20-1024x682.jpg",
               "Guit3_Foto3_Comp20-1024x682.jpg",
               "Guit3_Foto5_Comp20-1024x682.jpg",
               "Guit3_Foto6_Comp20-1024x682.jpg",
               "Guit3_Foto7_Comp20-1024x682.jpg",
               "Guit3_Foto8_Comp20-1024x682.jpg",
               "Guit3_Foto9_Comp20-1024x682.jpg",
               "Guit3_Foto10_Comp20-1024x682.jpg",
               "Guit3_Foto11_Comp20-1024x682.jpg",
               "Guit3_Foto12_Comp20-1024x682.jpg",
               "Guit3_Foto13_Comp20-1024x682.jpg",
               "Guit3_Foto14_Comp20-1024x682.jpg",
               "Guit3_Foto15_Comp20-1024x682.jpg",
               "Guit3_Foto16_Comp20-1024x682.jpg",
               "Guit3_Foto1_Comp20-1024x682.jpg",
             ],
             imageList: "Guit3_Foto1_Comp20-1024x682.jpg",
             imageShowR: "Guit3_Foto4_Comp20-1024x682.jpg",
             chars: {
               Cuerpo: [
                 "Cuerpo Semihueco de madera de wengue y amaranto.",
                 "Tapa armónica de amaranto y tapa fondo wengue.",
               ],
               Mástil: [
                 "Alistonado en madera de arce y caoba.",
                 ", diapason de wengue.",
               ],
               Componentes: ["Puente Tuneomatic.", "Clavijero Gotoh."],
               Pastillas: [
                 "Pastillas Gibson 57 Classic con carcasas de madera artesanales.",
               ],
             },
           },
           {
             id: 3,
             instrumento: "guitarra",
             name: "Guitarra Etayo Tipo StratoCaster",
             tipo:
               "Guitarra eléctrica Sólida de diseño ergonómico de madera de aliso.", //En pag Guitarras solo esta Caract
             woodTapa:
               "Cuerpo con tapa delantera de madera de Sapely y trasera de madera de Fresno",
             woodCuerpo: "Cuerpo sólido de maderas de Caoba y Nogal",
             clavijeroType: "Doble arco",
             imagePath: "./../../assets/images/Guitarras/Guitar_04/",
             images: [
               "Guit4_Foto7_Comp20-1024x682.jpg",
               "Guit4_Foto2_Comp20-1024x682.jpg",
               "Guit4_Foto3_Comp20-1024x682.jpg",
               "Guit4_Foto4_Comp20-1024x682.jpg",
               "Guit4_Foto5_Comp20-1024x682.jpg",
               "Guit4_Foto6_Comp20-1024x682.jpg",
               "Guit4_Foto1_Comp20-1024x682.jpg",
             ],
             imageList: "Guit4_Foto1_Comp20-1024x682.jpg",
             imageShowR: "Guit4_Foto7_Comp20-1024x682.jpg",
             chars: {
               Cuerpo: [
                 "Cuerpo Ergonómico Sólido de madera de aliso.",
                 "Tapa armonica de sapely y tapa fondo de fresno.",
               ],
               Mástil: [
                 "Alistonado en madera de arce y wengue.",
                 "Diapasón de madera de ébano.",
               ],
               Componentes: [
                 "Puente fijo stratocaster.",
                 "Clavijero fender American Standard.",
               ],
               Pastillas: ["Pastillas Gibson 57 Classic."],
             },
           },
         ];

         getGuitars() {
           return this.guitars;
         }
         constructor() {}
       }
