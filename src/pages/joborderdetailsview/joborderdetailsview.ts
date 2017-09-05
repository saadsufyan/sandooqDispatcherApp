import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the JoborderdetailsviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joborderdetailsview',
  templateUrl: 'joborderdetailsview.html',
})
export class JoborderdetailsviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoborderdetailsviewPage');
  }
  goBack(){
    this.navCtrl.push(HomePage);
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

}
