/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  buttonValue: any;
  public notifications = [
    {
      title: 'system',
      subtitle: 'Booking #1234 has been success...',
      iconUrl: '../../assets/success.png',
    },
    {
      title: 'Promotion',
      subtitle: 'Invite friend - Get 3 coupons each',
      iconUrl: '../../assets/coupon.png',
    },

    {
      title: 'system',
      subtitle: 'Booking #1022 was cancelled...',
      iconUrl: '../../assets/error.png',
    },
  ];
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  segmentValue(ev) {
    this.buttonValue = ev.detail.value;
  }
  async notificationAlert(item) {
    const alert = await this.alertCtrl.create({
      header: `${item.title}`,
      message: `${item.subtitle}`,
      buttons: ['OK']
    });

    await alert.present();
}

}
