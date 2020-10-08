import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){
    this.http.get("http://api-cashier-mail-browser.yedda.tech/companies/by-id/941/files?limit=20&time_from=2019-06-23T08:10:55.000Z&time_to=2021-09-22T08:14:38.418Z").subscribe(data=>{
      console.log(data);
    })
  }
  title = 'angular';
}
