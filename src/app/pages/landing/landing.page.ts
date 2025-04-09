import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: false,
})
export class LandingPage implements OnInit {

  data: any[] = [];
  filtroRaza: any[] = [];
  searchTerm = '';

  constructor(private _catService: CatService, private router: Router) {}

  ngOnInit() {
    this._catService.getRazas().subscribe((info:any) => {
      this.data = info;
      this.filtroRaza = info;
    })
  }

  goToDetails(breed: any) {
    this.router.navigateByUrl('/details', { state: { breed } });
  }

  filtroRazas() {
    const term = this.searchTerm.toLowerCase();
    this.filtroRaza = this.data.filter(breed =>
      breed.name.toLowerCase().includes(term)
    );
  }
}

