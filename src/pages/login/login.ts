import { Component } from '@angular/core';
import { IonicPage,AlertController,LoadingController,Loading, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  loginCredentials = {username: '', password: ''};

  constructor(private menu: MenuController,public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider ,public loadingCtrl:LoadingController, public alertCtrl:AlertController, public viewCtrl:ViewController) {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }
  // ionViewDidEnter() {
  //   this.menu.swipeEnable(false);
  // }





}
