import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(
    private http: HttpClient
    ) { }

  getCity() {
    return this.http.get(environment.apiUrl + '/cities').pipe(
      map( data => {
        return data
      })
    );
  }

  submitCity(city: any) {
    console.log('log od city servisa',city);

    return this.http.post(environment.apiUrl + '/cities', city);
  }

  deleteCity(id) {
    return this.http.delete(environment.apiUrl +  '/cities/' + id);

  }

  updateCity(id, city) {
    return this.http.put(environment.apiUrl + '/cities/' + id, city)
  }

  getOne(id) {
    console.log(id);

    return this.http.get(environment.apiUrl + '/cities/' + id);
  }

}

//).subscribe(result => {
  // ovdje je korisnik uspjesno izbrisan
       //this.loadUsers();
      //});