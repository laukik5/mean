import { Component, OnInit } from '@angular/core';
import { faPlane, faHotel, faBus } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  faplane = faPlane;
  fahotel = faHotel;
  fabus = faBus;
  public searchgroup = new FormGroup({
    "src": new FormControl(""),
    "dest": new FormControl("")
  })

  async onsearch() {
    let data = this.searchgroup.value;
    let url = "http:localhost:5000/searchbuses";
    let result: any = await this.http.post(url, data).toPromise();
    console.log(result);
  }

}