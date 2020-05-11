import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  
  city: any;
  cityArray: any;
  constructor(
    private cityservice: CitiesService,
    private router: Router
  ) { }

  // public cities = [];
  ngOnInit(): void {
    this.getCity()

    console.log('test');
  }

  getCity() {
    this.cityservice.getCity().subscribe(data => {
      this.city =  data;
      console.log(this.city.cities);
      this.cityArray =this.city.cities;

    })
  }

  deleteCity(id) {
    this.cityservice.deleteCity(id).subscribe(result =>{this.getCity();
    });
  }

  editCity(id) {
    this.cityservice.updateCity(id, Object).subscribe(a => console.log('test update')
    )
  }

  onAdd() {
    this.router.navigate(['city/new']);
  }

   onEdit(cityId) {
    this.router.navigate(['city', cityId]);
  }
}
