import { ServiceGuitarsVenta } from '../../sharedServices/service-guitarsVenta';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: "app-guitars-venta",
  templateUrl: "./guitars-venta.component.html",
  styleUrls: ["./guitars-venta.component.scss"],
})
export class GuitarsVentaComponent implements OnInit {
  guitarsV: Object[];
  title: string = "Etayo Luthier - Intrumentos personalizados - Madrid";

  constructor(
    private guitars: ServiceGuitarsVenta,
    private metaService: Meta,
    private metaTitle: Title
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.metaTitle.setTitle(this.title);

    this.metaService.updateTag(
      {
        name: "keywords",
        content:
          "Luthier  en Madrid, construccion Guitarras, contruccion Bajos",
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
    this.guitarsV = this.guitars.getGuitarsVenta();
  }

  ngOnDestroy() {}
}