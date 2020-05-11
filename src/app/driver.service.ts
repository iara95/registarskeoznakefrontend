import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private http: HttpClient
  ) { }

  getDrivers () {
    return this.http.get(environment.apiUrl + '/drivers');
  }

  submitDriver(driver: any) {
    return this.http.post(environment.apiUrl + '/drivers', driver);
  }
}
