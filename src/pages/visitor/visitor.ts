import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TutorialPage} from "../tutorial/tutorial";
import {PlantasListProvider, Planta} from "../../providers/plantas-list/plantas-list";
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-visitor',
  templateUrl: 'visitor.html',
})

  
export class VisitorPage {

  plantas: Planta[];
  currentItems: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: PlantasListProvider,public items: Items) {
    this.plantas=this.service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorPage');
  }

  goBack(){
    this.navCtrl.setRoot("TutorialPage");
  }

  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
