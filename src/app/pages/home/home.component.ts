
// import { Carrousel } from './../../sharedClasses/carrousel.class';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title:string="Etayo Luthier";

  constructor(
    private metaTitle:Title,
    private metaService:Meta
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(this.metaTitle);
    console.log(this.metaService);

    this.metaTitle.setTitle(this.title);

        this.metaService.updateTag(
          { name: "keywords", content: "Luthier  en Madrid, construccion Guitarras, contruccion Bajos" },
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

        this.metaService.addTags([
          { name: "robots", content: "index, follow" },
        ]);
      

  }

}
