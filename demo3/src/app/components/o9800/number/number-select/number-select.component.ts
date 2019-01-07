import { Component, OnInit } from '@angular/core';

import {Http,Jsonp} from '@angular/http';

@Component({
  selector: 'app-number-select',
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.css']
})
export class NumberSelectComponent implements OnInit {
  selectedValue = 'lucy';

  constructor(private http:Http,private jsonp:Jsonp) { }

  ngOnInit() {
  }
  requestHttp()
  {
    // alert('请求数据');
    

    // alert('请求数据');
    
    // var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    var url="http://localhost:8080/api/v1/user/findAll";
    // var url="http://localhost:8080/";
    this.http.get(url).subscribe(function(data){

      

       console.log(JSON.parse(data['_body']));
     

      
       

    },function(err){

        console.log(err);
    })
  }

}


