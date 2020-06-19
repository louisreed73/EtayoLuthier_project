export const { log: l } = console;

export class Carrousel {
  datosFotos: string[];
  ruta: string;
  selector: any;
  count: number = 0;
  init=true;
  // active=0;
  initiated: boolean = false;

  constructor(d: string[], r: string, s: string) {
    this.datosFotos = d;
    this.ruta = r;
    this.selector = document.querySelector(`${s}`);

        console.log("Verdad!!!!");
        // console.log(this.selector.querySelector(".imagenes img"));
        setTimeout(()=>{
          console.log(this.selector.querySelector(".imagenes img").style.opacity=1);

        },0)


    // this.selector.querySelector("img").classList.add("active");
  }




  setClick(forward: boolean) {
    if(this.init) {
      this.init = !this.init;

    console.log("Solo una vez!!!!")

    }
    
    // this.init=false;
                          if (
                            !this.init &&
                            !!this.selector.querySelector(".imagenes img").style
                              .opacity
                          ) {
                            // console.log("Venga!!!!")


                              this.selector
                                .querySelector(".imagenes img")
                                .removeAttribute("style");
                            
                          }



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
                               l(this.selector);
        /*                        let imagenes = this.selector.querySelectorAll(
                                 "img"
                               ); */

                               let source =
                                 this.ruta + this.datosFotos[this.count];

                               let imgActive = this.selector.querySelector(
                                 "img.active"
                               );
                               let select = this.selector.querySelector(
                                 `.imagenes > [src="${source}"]`
                               );
                               let selectNo = this.selector.querySelectorAll(
                                 `.imagenes > :not([src="${source}"])`
                               );
                               // let notimgActive = this.selector.querySelector(":not(.active)");
                               l(
                                 source,
                                 "selecccion",
                                 select,
                                 `[src="${source}"]`,
                                 selectNo
                               );

                               for (let elem of selectNo) {
                                 elem.classList.remove("active");
                               }

                               // imgActive.setAttribute("src", source);
                               select.classList.toggle("active");
                             }
}
