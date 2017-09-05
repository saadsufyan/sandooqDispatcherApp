import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { QuotationPage } from '../quotation/quotation';
import { HomePage } from '../home/home';
import { SelectservicePage } from '../selectservice/selectservice';


/**
 * Generated class for the JoborderdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joborderdetails',
  templateUrl: 'joborderdetails.html',
})
export class JoborderdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoborderdetailsPage');
  }

  goToQuotation(){
    this.navCtrl.push(QuotationPage);
  }

  goToSelectService(){
    this.navCtrl.push(SelectservicePage);
  }

  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  goBack(){
    this.navCtrl.push(HomePage);
  
  }



}
