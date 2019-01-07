import { Component, OnInit } from '@angular/core';
import { splitDepsDsl } from '@angular/core/src/view/util';
import html2canvas from 'html2canvas';
import {Http,Jsonp} from '@angular/http';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  selectedValue;
  radioValue = 'A';
  j = 0;
  c_dgh = 0 ; 
  c_max_gh = 0;
  c_weight = 0 ;
  editCache = {};
  dataSet1 = [        //前端本地数据集
    {
      id    : 0,
      name   : '子架：OSN 9800 U16',
      number : 1,   //数量
      dgh   : 145.5,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    },
    {
      id    : 1 ,
      name   : 'OSN 9800 U16',
      number : 2,
      dgh    : 145.5,
      max_gh    : 793.9,
      weight : 52.1
     
    },
    {
      id    : 2,
      name   : '1号单板',
      number : 2,   //数量
      dgh   : 125,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    },
    {
      id    : 3,
      name   : 'TSDSDGA',
      number : 2,   //数量
      dgh   : 125,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    },
    {
      id    : 4,
      name   : '3号单板',
      number : 2,   //数量
      dgh   : 125,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    },
    {
      id    : 5,
      name   : '4号单板',
      number : 20,
      dgh    : 4.5,
      max_gh    : 35.9,
      weight : 8.1
    },
    {
      id    : 6,
      name   : '5号单板',
      number : 2,
      dgh    : 4.5,
      max_gh    : 35.9,
      weight : 8.1
    }
  ];



  dataSet = []; //用于前端显示页面的数组

  constructor(private http:Http,private jsonp:Jsonp) {
 

   }

  ngOnInit() {
    this.requestHttp();

  }

qingkong():void{
  document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';
}
addOne(): void{        //按钮：新增单板，设置一个div控件显示隐藏
  document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';

}
close():void{   // 按钮:使div页面关闭
  document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';
}

closePicture():void{   // 按钮:使div页面关闭
  document.getElementById('picture').style.display = document.getElementById('picture').style.display=='none'?'block':'none';
}

test(){
alert(this.selectedValue);
console.log(this.selectedValue);

}
adddata(){
  for(var j=0;j<this.dataSet1.length;j++){
    if(this.selectedValue==this.dataSet1[j].name){ //找到dataSet1中对应的数据
    this.dataSet = [ ...this.dataSet, {
    id    :  this.dataSet1[j].id,
    name   : this.dataSet1[j].name,
    number : this.dataSet1[j].number,
    dgh     : this.dataSet1[j].dgh,
    max_gh   : this.dataSet1[j].max_gh,
    weight : this.dataSet1[j].weight
  } ];
   this.c_weight = 0;
   this.c_dgh = 0;
   this.c_max_gh = 0;
   //this.updateEditCache();
   document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';
     }
  }
}
// addthis():void{//添加数据,主要是1，获取数据 2，添加到哪里 //和第一个一样的，添加的那个就是数据集的第几个
//   var x = (<HTMLSelectElement>document.getElementById('sel')).selectedIndex;
    
//   var y=document.getElementsByTagName("option")[x].value;//通过option获得的name值与dataset1中的数组对象中做比较，如果相等则返回那个索引值
//   //alert(y);
//   //alert(this.dataSet1[0].name);
//   for(var j=0;j<this.dataSet1.length;j++){
//     if(y==this.dataSet1[j].name){
//   // var i = 1
//     this.dataSet = [ ...this.dataSet, {
//     id    :  this.dataSet1[j].id,
//     name   : this.dataSet1[j].name,
//     number : this.dataSet1[j].number,
//     dgh     : this.dataSet1[j].dgh,
//     max_gh   : this.dataSet1[j].max_gh,
//     weight : this.dataSet1[j].weight
//   } ];
//    this.c_weight = 0;
//    this.c_dgh = 0;
//    this.c_max_gh = 0;
//    //this.updateEditCache();
//    document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';
//      }
//   }
// }
calculate()
{
  var result = document.getElementById('result');
  result.style.display = "block";
  if(this.c_weight ==0)
  for(this.j=0;this.j<this.dataSet.length;this.j++)
  {
    this.c_weight =this.c_weight+this.dataSet[this.j].number*this.dataSet[this.j].weight; 
  }

  if(this.c_dgh ==0)
  for(this.j=0;this.j<this.dataSet.length;this.j++)
  {
    this.c_dgh =this.c_dgh+this.dataSet[this.j].number*this.dataSet[this.j].dgh; 
  }
  
  if(this.c_max_gh ==0)
  for(this.j=0;this.j<this.dataSet.length;this.j++)
  {
    this.c_max_gh =this.c_max_gh+this.dataSet[this.j].number*this.dataSet[this.j].max_gh; 
  }
   
}
LookDetails():void{
  var tab = document.getElementById('tab');
  tab.style.display = "block";
}
cutDiv(){ 
  var divContent = document.getElementById("div").innerHTML; 
  var data = "data:image/svg+xml," + 
  "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>" + 
  "<foreignObject width='100%' height='100%'>" + 
  "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:16px;font-family:Helvetica'>" + 
  divContent + 
  "</div>" + 
  "</foreignObject>" + 
  "</svg>"; 
  var img = new Image(); 
  img.src = data; 
  var canvas = document.createElement("canvas"); 
  var ctx =  canvas.getContext("2d"); 
  img.crossOrigin="anonymous"; 
  img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>"; 
  ctx.drawImage(img, 0, 0); 
  var canvasbase = canvas.toDataURL(); 
  alert(canvasbase); 
} 
tableToExcel(){       //按钮：导出配置单
  //列标题，逗号隔开，每一个逗号就是隔开一个单元格
  let str =  '槽位,型号,数量,典型功率,最大功率,重量\n';
  //增加\t为了不让表格显示科学计数法或者其他格式
  for(let i = 0 ; i < this.dataSet.length ; i++ ){
    for(let item in this.dataSet[i]){
        str+=`${this.dataSet[i][item] + '\t'},`;     
    }
    str+='\n';
  }
  //encodeURIComponent解决中文乱码
  let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
  //通过创建a标签实现
  var link = document.createElement("a");
  link.href = uri;
  //对下载的文件命名
  link.download =  "配置清单数据表.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
toPicture(){ //导出配置图
  var picmid = document.getElementById('picmid');
  document.getElementById('picture').style.display = document.getElementById('picture').style.display=='none'?'block':'none';
  if(picmid.childNodes[0] != undefined){
    picmid.removeChild(picmid.childNodes[0])
  }
   html2canvas(document.querySelector("#leftarea")).then(function(canvas) {    
   picmid.appendChild(canvas);  
   console.log(picmid.childNodes)  
});

}



ThisOne(){
    var d4 = document.getElementById('d4').getElementsByTagName('span');
    d4[0].innerHTML = "TNS1UXCS";
    d4[0].style.writingMode = "tb-rl";
    d4[0].style.fontWeight= "bold";
    var d5 = document.getElementById('d5').getElementsByTagName('span');
    d5[0].innerHTML = "TNS1UXCS";
    d5[0].style.writingMode = "tb-rl";
    d5[0].style.fontWeight= "bold";
    var d6 = document.getElementById('d6').getElementsByTagName('span');
    d6[0].innerHTML = "TNS1UXCS";
    d6[0].style.writingMode = "tb-rl";
    d6[0].style.fontWeight= "bold";
    var d7 = document.getElementById('d7').getElementsByTagName('span');
    d7[0].innerHTML = "TNS1UXCS";
    d7[0].style.writingMode = "tb-rl";
    d7[0].style.fontWeight= "bold";
    var d8 = document.getElementById('d8').getElementsByTagName('span');
    d8[0].innerHTML = "TNS1UXCS";
    d8[0].style.writingMode = "tb-rl";
    d8[0].style.fontWeight= "bold";
    var d9 = document.getElementById('d9').getElementsByTagName('span');
    d9[0].innerHTML = "TNS1UXCS";
    d9[0].style.writingMode = "tb-rl";
    d9[0].style.fontWeight= "bold";
    var d10 = document.getElementById('d10').getElementsByTagName('span');
    d10[0].innerHTML = "TNS1UXCS";
    d10[0].style.writingMode = "tb-rl";
    d10[0].style.fontWeight= "bold";

    }
    Another(){
      var d4 = document.getElementById('d4').getElementsByTagName('span');
      d4[0].innerHTML = "TNS1XCS";
      d4[0].style.writingMode = "tb-rl";
      d4[0].style.fontWeight= "bold";
      var d5 = document.getElementById('d5').getElementsByTagName('span');
      d5[0].innerHTML = "TNS1XCS";
      d5[0].style.writingMode = "tb-rl";
      d5[0].style.fontWeight= "bold";
      var d6 = document.getElementById('d6').getElementsByTagName('span');
      d6[0].innerHTML = "TNS1XCS";
      d6[0].style.writingMode = "tb-rl";
      d6[0].style.fontWeight= "bold";
      var d7 = document.getElementById('d7').getElementsByTagName('span');
      d7[0].innerHTML = "TNS1XCS";
      d7[0].style.writingMode = "tb-rl";
      d7[0].style.fontWeight= "bold";
      var d8 = document.getElementById('d8').getElementsByTagName('span');
      d8[0].innerHTML = "TNS1XCS";
      d8[0].style.writingMode = "tb-rl";
      d8[0].style.fontWeight= "bold";
      var d9 = document.getElementById('d9').getElementsByTagName('span');
      d9[0].innerHTML = "TNS1XCS";
      d9[0].style.writingMode = "tb-rl";
      d9[0].style.fontWeight= "bold";
      var d10 = document.getElementById('d10').getElementsByTagName('span');
      d10[0].innerHTML = "TNS1XCS";
      d10[0].style.writingMode = "tb-rl";
      d10[0].style.fontWeight= "bold";
  
      }
      clear(){
        this.dataSet=[];
      }


        //请求数据
  requestHttp()
  {
    // alert('请求数据');
    var _that=this;

    // alert('请求数据');
    
    // var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    var url="http://localhost:8080/api/v1/user/findAll";
    // var url="http://localhost:8080/";
    this.http.get(url).subscribe(function(data){

      
      
      var list=JSON.parse(data['_body']);
      //  console.log(_that.list['result']);

       _that.dataSet1=list['data'];
       console.log(JSON.parse(data['_body']));
    },function(err){

        console.log(err);
    })
  }

      
}

