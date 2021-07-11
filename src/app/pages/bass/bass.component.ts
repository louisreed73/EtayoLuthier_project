import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ServiceBasses } from 'src/app/sharedServices/service-basses';

@Component({
  selector: "app-basses",
  templateUrl: "./bass.component.html",
  styleUrls: ["./bass.component.scss"],
})
export class BassesComponent implements OnInit {
  bassesA: Object[];
  title: string = "Etayo Luthier Bass";

  constructor(
    private basses: ServiceBasses,
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

    console.log(this.basses.getBasses());
    this.bassesA = this.basses.getBasses();
  }
}
