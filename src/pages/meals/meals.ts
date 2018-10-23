import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the MealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})
export class MealsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toatsCtl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealsPage');
  }
  onInput(){
   let toast = this.toatsCtl.create({
      message: 'Not Found',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  
}
