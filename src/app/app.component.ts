import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Offline Forms',
      url: '/folder/Inbox',
      icon: 'archive'
    },
    {
      title: 'Sync Data',
      url: '/folder/Outbox',
      icon: 'cloud-download'
    },
    {
      title: 'Language',
      url: '/folder/Favorites',
      icon: 'language'
    },
    {
      title: 'Notifications',
      url: '/folder/Archived',
      icon: 'notifications'
    },
    {
      title: 'Version',
      url: '/folder/Trash',
      icon: 'server'
    },
    {
      title: 'Settings',
      url: '/folder/Spam',
      icon: 'options'
    }
  ];
  public labels = ['Information','Log Out'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
