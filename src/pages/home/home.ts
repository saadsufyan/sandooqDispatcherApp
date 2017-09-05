import { Component} from '@angular/core';
import { NavController,ViewController, App, MenuController, Slides } from 'ionic-angular';
import { JoborderdetailsPage } from '../joborderdetails/joborderdetails';
import { QuotationviewPage } from '../quotationview/quotationview';
import { JoborderdetailsviewPage } from '../joborderdetailsview/joborderdetailsview';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})




export class HomePage {


  requests: string = "incoming";
  constructor(public navCtrl: NavController, public viewCtrl : ViewController, app: App, menu: MenuController) {
    menu.enable(true);

  }
  
  ionViewWillEnter() { 
       console.log("entered")
       this.viewCtrl.showBackButton(false)
  }

  viewDetails(){
    this.navCtrl.push(JoborderdetailsPage);
  }

  goToQuotationView(){
    this.navCtrl.push(QuotationviewPage);
  }
  goToJobOrderDetailsView(){
    this.navCtrl.push(JoborderdetailsviewPage);
  }

}
