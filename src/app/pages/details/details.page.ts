import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false
})
export class DetailsPage implements OnInit {
  breed: any;

  constructor( private navCtrl: NavController) {}

  ngOnInit() {
    const nav = window.history.state;
    this.breed = nav.breed || {};
  }

  goBack() {
    this.navCtrl.back();
  }
}