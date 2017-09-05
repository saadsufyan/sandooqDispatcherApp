import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LanguagePage } from '../pages/language/language';
import { JoborderPage } from '../pages/joborder/joborder';
import { AssignedjobPage } from '../pages/assignedjob/assignedjob';
import { ClaimjobPage } from '../pages/claimjob/claimjob';
import { JoborderdetailsPage } from '../pages/joborderdetails/joborderdetails';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  ActivePage: any

  pages: Array<{title: string, component: any, class: string, img:string}>;

  constructor(private menu: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Job Order', component: HomePage, class: 'class1' , img: 'assets/job_icon@2x-2.png' },
      { title: 'Quotes', component: AssignedjobPage, class: 'class2'  , img: 'assets/quotes@2x-2.png'},
      { title: 'Re-Quotes', component: ClaimjobPage, class: 'class3'  , img: 'assets/re-quotes@2x-2.png'},
      { title: 'Claims', component: ClaimjobPage, class: 'class3'  , img: 'assets/claims@3x.png'}
    ];

    this.ActivePage = this.pages[0];

  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.ActivePage = page;
  }
  
  checkActive(page){
    return page == this.ActivePage ;
  }
}
