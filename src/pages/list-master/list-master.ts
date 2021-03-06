import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { Http } from '@angular/http';
import {TutorialPage} from '../tutorial/tutorial';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  public items2 : any = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: Http) {
    //this.currentItems = this.items.query();
    //public items: Items;
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {

    this.load();
  }

  // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get('http://localhost/greensky.com/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.items2 = data;         
      });
   }

   goToFirstPage(){
     this.navCtrl.parent.parent.setRoot("TutorialPage");
   }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  /*
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  /*
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  /*
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  */
}
