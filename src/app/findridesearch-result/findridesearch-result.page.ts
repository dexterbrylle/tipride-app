/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findridesearch-result',
  templateUrl: './findridesearch-result.page.html',
  styleUrls: ['./findridesearch-result.page.scss'],
})
export class FindridesearchResultPage implements OnInit {
  pickupLoc: any;
  destLoc: any;
  date: any;
  time: any;
  starsCount: number;
  ridesList: any;
  constructor(public service: DataService, public route: Router) {
    this.service.locationFindRide.subscribe(filter => {
      this.pickupLoc = filter;
    });
    this.service.locationFindRideDes.subscribe(filter => {
      this.destLoc = filter;
    });
    this.service.dateForFindride.subscribe(filter => {
      this.date = filter;
    });
    this.service.timeForFindride.subscribe(filter => {
      this.time = filter;
    });

    this.ridesList = [{
      pickup: this.pickupLoc,
      destination: this.destLoc,
      image: '../../assets/image/images.jpg',
      name: 'Juan dela Driver',
      car: 'Honda CR-V (Red)',
      numberPlate: 'DAK 8102',
      cost: ''
    }, {
      pickup: this.pickupLoc,
      destination: this.destLoc,
      image: '../../assets/image/chat2.jpg',
      name: 'Daisy Ridley',
      car: 'Toyota Wigo (White)',
      numberPlate: 'NCZ 2441',
      cost: ''

    }, {
      pickup: this.pickupLoc,
      destination: this.destLoc,
      image: '../../assets/image/chat6.jpg',
      name: 'Sophie Liot',
      car: 'Toyota Fortuner (Black)',
      numberPlate: 'DAR 4229',
      cost: ''
    }];
  }

  ngOnInit() {
  }
  goforBooking(cards) {
    console.log(cards);
    this.route.navigate(['ridedetails', cards]);
  }
}
