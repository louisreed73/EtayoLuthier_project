import { ServiceGuitarsKlein } from './../../sharedServices/service-guitarsKlein';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: "app-guitars-klein",
  templateUrl: "./guitars-klein.component.html",
  styleUrls: ["./guitars-klein.component.scss"],
})
export class GuitarsKleinComponent implements OnInit {
  guitarsK: Object[];
  title: string = "Etayo Luthier - Intrumentos personalizados - Madrid";

  constructor(
    private guitars: ServiceGuitarsKlein,
    private metaTitle: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.metaTitle.setTitle(this.title);

    this.metaService.updateTag(
      {
        name: "keywords",
        content:
          "Luthier  en Madrid, construcción Guitarras, construcción Bajos",
      },
      "name='keywords'"
    );
    this.metaService.updateTag(
      {
        name: "description",
        content:
          "En Etayo luthier construimos guitarras customizadas en nuestro taller de luthería situado en Madrid . Utilizamos maderas específicas para instrumentos de cuerda. Elige tus pickups; humbucker single coil o modelo que prefieras. Te asesoramos en el diseño de tu guitarra y también en el sonido que buscas.",
      },
      "name='description'"
    );

    // console.log(this.guitars.getGuitars());
    this.guitarsK = this.guitars.getGuitarsKlein();
  }

  ngOnDestroy() {}
}
