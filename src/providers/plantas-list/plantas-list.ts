import { Injectable } from '@angular/core';


@Injectable()
export class PlantasListProvider {

  data:Planta[]= [
    
  ];
  constructor() {
    this.data=[
      {nombre:"Celestina", imagen:"https://www.jardineriaon.com/wp-content/uploads/2014/09/celestina.jpg", descripcion:"Una hermosa planta azul"},
      {nombre:"Hiedra uña de gato", imagen:"http://2.bp.blogspot.com/-iCxJHiKkokg/UOHCDpGfUoI/AAAAAAAAAC0/CJ-0nxTxhyw/s1600/imagen+hiedra+santanaturaleza.jpg", descripcion:"Una hermosa planta trepadora"},
      {nombre:"Gazania Amarilla", imagen:"http://www.plantasparaeljardin.cl/inicio/wp-content/uploads/2011/12/Gazania-rigens-Sun-Gold.jpg", descripcion:"Una hermosa flor amarilla"},
    ]
  }

}

export class Planta{
  constructor(public nombre: String,
    public imagen: String,
  public descripcion: String){

    }
}
