export class ServiceGuitarsVenta {
  private readonly guitars: object[] = [
    {
      id: 1,
      instrumento: "guitarra",
      name: "Guitarra tipo Klein Standard.",
      tipo: "Guitarra eléctrica tipo Klein Sólida en madera de Sapelly.", //En pag Guitarras solo esta Caract
      woodTapa: "",
      woodCuerpo: "Cuerpo sólido de madera de Sapelly",
      clavijeroType: "Doble arco",
      //  horizontal:true,
      precio: 950,
      vendido: false,
      //  envio:30,
      envio: "- No incluidos -",
      imagePath: "../../assets/images/GuitarrasVenta/Guitar_02/",
      images: [
        "GuitVenta2_Foto1_Comp20-1200x900.jpg",
        "GuitVenta2_Foto2_Comp20-1200x900.jpg",
        "GuitVenta2_Foto3_Comp20-1200x900.jpg",
        "GuitVenta2_Foto4_Comp20-1200x900.jpg",
        "GuitVenta2_Foto5_Comp20-1200x900.jpg",
        "GuitVenta2_Foto6_Comp20-1200x900.jpg",
      ],
      imageList: "GuitVenta2_Foto1_Comp20-1200x900.jpg",
      imageShowR: "GuitVenta2_Foto3_Comp20-1200x900.jpg",
      chars: {
        //En pag Show Guitars TabsCARACTERISTICAS GUITARRA
        Cuerpo: [
          "Cuerpo Sólido de madera de Sapelly.",
          "Tapa de madera de Fresno rizado.",
          "Golpeador de madera de Palo Santo India.",
        ],
        Mástil: ["Mango en madera de Caoba.", "Diapasón de ébano."],
        Componentes: [
          "Puente Headless individual monocuerda.",
          "Cejuela de bloqueo Headless.",
        ],
        Pastillas: [
          "Pastillas - Puente - Kent Armstrong Vintage 57 Humbucker.",
          "Pastillas - Mástil - ToneRider Single Coil Hot Classic.",
        ],
      },
    },
    {
      id: 0,
      instrumento: "guitarra",
      name: "Guitarra tipo Klein Standard", //En pag Guitarras NOMBRE GUITARRA
      tipo: "Guitarra eléctrica tipo Klein Sólida en madera de Fresno.", //En pag Guitarras RESUMEN CARACTERISTICAS GUITARRA
      woodTapa: "Tapa armónica de madera de Mongoy. Tapa trasera de Caoba.",
      woodCuerpo: "Cuerpo sólido de madera de Sapelly",
      clavijeroType: "Doble arco",
      //  horizontal:true,
      precio: null,
      vendido: true,
      //  envio:30,
      envio: "- No incluidos -",
      imagePath: "../../assets/images/GuitarrasVenta/Guitar_01/",
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
        Cuerpo: [
          "Cuerpo Sólido de madera de Fresno.",
          "Tapa armónica de madera de Mongoy.",
          "Tapa trasera de madera de Caoba.",
        ],
        Mástil: ["Madera de Caoba.", "Diapasón de ébano de 24' 75."],
        Componentes: [
          "Puente tensor headless.",
          "Cejuela de bloqueo Headless.",
        ],
        Pastillas: [
          "Pastillas - Puente - Kent Armstrong Vintage 57 Humbucker.",
          "Pastillas - Mástil - ToneRider Single Coil Hot Classic.",
        ],
      },
    },
  ];

  getGuitarsVenta() {
    return this.guitars;
  }
  constructor() {}
}
