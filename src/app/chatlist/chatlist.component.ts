/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChattingComponent } from '../chatting/chatting.component';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss'],
})
export class ChatlistComponent implements OnInit {
  chatData: any;
  segmentTab: any;
  buttonClicked: boolean;
  clickData: any;
  imageData: any;
  constructor(public modalCtrl: ModalController) {
    this.chatData = [{
      'name': 'Some Driver',
      'image': '../../assets/chat/enappd.png',
      'description': 'Hi I\'m near the pickup location',
      'count': '1',
      'time': '7:30 AM',

      'distance': '0.5km',
      'crown': '../../assets/chat/crown.png'

    }
    ];
  }

  ngOnInit() { }
  async goforChat(chat) {
    const modal = await this.modalCtrl.create({
      component: ChattingComponent,
      componentProps: { value: chat }
    });
    return await modal.present();
  }
}
