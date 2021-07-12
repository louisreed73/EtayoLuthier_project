import { ServiceGuitars } from './../../sharedServices/service-guitars';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';








@Component({
  selector: "app-guitars",
  templateUrl: "./guitars.component.html",
  styleUrls: ["./guitars.component.scss"],
})
export class GuitarsComponent implements OnInit, OnDestroy {
  guitarsA: Object[];
  title: string = "Etayo Luthier - Intrumentos personalizados - Madrid";

  constructor(
    private guitars: ServiceGuitars,
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
    this.guitarsA = this.guitars.getGuitars();
  }

  ngOnDestroy() {}
}
