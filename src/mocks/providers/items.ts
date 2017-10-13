import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Geranios",
    "profilePic": "assets/img/plantas/plants.jpg",
    "about": "Descripción del geranio",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Suculentas",
        "profilePic": "assets/img/plantas/suculentas.png",
        "about": "Descripción del geranio."
      },
      {
        "name": "Hoya",
        "profilePic": "assets/img/plantas/hoya.jpg",
        "about": "Descripción Hoya."
      },
      {
        "name": "Begonia",
        "profilePic": "assets/img/plantas/begonia.jpg",
        "about": "Descripción Begonia."
      },
      {
        "name": "Iris",
        "profilePic": "assets/img/plantas/iris.jpg",
        "about": "Descripción Iris Japónica."
      },
      {
        "name": "Geranios",
        "profilePic": "assets/img/plantas/geranioF.jpg",
        "about": "Descripción Geranio."
      },
     
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
