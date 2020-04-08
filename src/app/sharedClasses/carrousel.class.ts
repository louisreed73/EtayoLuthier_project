export const { log: l } = console;

export class Carrousel {
  datosFotos: string[];
  ruta: string;
  selector: any;
  count: number = 0;
  // active=0;
  initiated: boolean = false;

  constructor(d: string[], r: string, s: string) {
    this.datosFotos = d;
    this.ruta = r;
    this.selector = document.querySelector(`${s}`);

    this.selector.querySelector("img").classList.add("active");
  }

  setClick(forward: boolean) {
    if (forward) {
      this.count++;
    } else {
      this.count--;
    }

    if (this.count < 0) {
      this.count = this.datosFotos.length - 1;
    }

    if (this.count > this.datosFotos.length - 1) {
      this.count = 0;
    }
    l(this.selector)
    let imagenes=this.selector.querySelectorAll("img");

    for (let elem of imagenes) {
      elem.classList.toggle("active");
    }

    let source = this.ruta + this.datosFotos[this.count];
    let imgActive = this.selector.querySelector(" img.active");
    l(imgActive, this.selector);

    imgActive.setAttribute("src", source);
  }
}
