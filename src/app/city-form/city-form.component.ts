import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CitiesService } from 'src/app/city.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {


  public city: any = {};
  public cityResponse: any = {};
  // public cities: any = [];
  // public selectedCityId: any = {};
  public errorMessage = '';

  cityGroup = this.fb.group({
      CityId: [''],
      name: [''],
      zip: ['']
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private cityService: CitiesService) { }

              ngOnInit() {
                this.route.params.subscribe((params: any) => {
                  const CityId = params.id;
                  // this.getCities();
                  if (CityId != null) {
                    
                    this.getCity(CityId);
                    console.log('city', this.city);
                    
                    console.log('response', this.cityResponse);
                    
                    this.cityGroup.patchValue({CityId: CityId,
                      name: this.cityResponse.street,
                      zip: this.cityResponse.zip});
                  }
                });
              }

  getCity(CityId) {
    this.cityService.getOne(CityId).subscribe(response => {
      this.city = response;
      console.log(this.city);
      
      this.cityResponse = this.city.response;
      this.city.id = CityId;
      
    });

  }

  onSubmit() {
    console.log(this.cityGroup.value);
    this.cityService.submitCity(this.cityGroup.value).subscribe(a => console.log('test submit')
    );
  }
  
  cancelForm() {
    this.router.navigate(['cities']);
  }
}
