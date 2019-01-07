import { Component, OnInit } from '@angular/core';
import {Http,Jsonp} from '@angular/http';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
 
  j = 0;
  c_dgh = 0 ; //总功耗
  c_max_gh = 0; //总热耗
  c_weight = 0 ; //总重量
  selectedValue;
  num1 = 1;
  list:any;
  editCache = {};
  dataSet1 = [        //测试数据集，dataSet1
    {
      id    : 1 ,
      name   : '0号单板',
      number : 2,
      dgh    : 145.5,
      max_gh    : 793.9,
      weight : 52.1
     
    },
    {
      id    : 2,
      name   : '1号单板',
      number : 1,   //数量
      dgh   : 125,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    },
    {
      id    : 3,
      name   : '2号单板',
      number : 1,   //数量
      dgh   : 125,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    },
    {
      id    : 4,
      name   : '3号单板',
      number : 1,   //数量
      dgh   : 125,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    },
    {
      id    : 5,
      name   : '4号单板',
      number : 1,
      dgh    : 4.5,
      max_gh    : 35.9,
      weight : 8.1
    },
    {
      id    : 6,
      name   : '5号单板',
      number : 1,
      dgh    : 4.5,
      max_gh    : 35.9,
      weight : 8.1
    }
  ];



  dataSet = [      //前端页面显示数据集
    {
      id    : 0,
      name   : '子架：OSN 9800 U16',
      number : 1,   //数量
      dgh   : 145.5,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    }
  ];
    data = [
    ['1','a','aa'],
    ['2','b','bb'],
    ['3','c','cc']
       ]
       
  constructor(private http:Http,private jsonp:Jsonp) { }

  ngOnInit() {
    this.requestHttp();
    this.updateEditCache();
  }
  addOne(): void{        //按钮：新增单板，设置一个div控件显示隐藏
    document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';
  }
  AllDelete():void{
    this.dataSet=[    {
      id    : 0,
      name   : '子架：OSN 9800 U16',
      number : 1,   //数量
      dgh   : 145.5,  //典型功耗
      max_gh    : 793.9,  //最大功耗
      weight : 52.1  ,  //重量
    }];
  }
  close():void{   // 按钮:使div页面关闭
    document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';
  }

  // addthis():void{  //按钮：点击添加单板数据
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
  //    this.updateEditCache();
  //    document.getElementById('addForm').style.display = document.getElementById('addForm').style.display=='none'?'block':'none';
  //      }
  //   }
  //  }
  addData(){
    for(var j=0;j<this.dataSet1.length;j++){
      if(this.selectedValue==this.dataSet1[j].name){ //找到dataSet1中对应的数据
        this.dataSet1[j].number = this.num1;
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


  //  addOptions():void{               //按钮：点击获取后台数据
  //   var sel = document.getElementById('sel');  //获得select的id“sel”
    
  //   var x = (<HTMLSelectElement>document.getElementById('sel')).length; //获得option的个数
    
  //   if(x != this.dataSet1.length){                 //第一种要更新的情况：数据集的数据个数个option的个数不一致得进行更新
  //     alert("前端数据与后台数据长度不一致，需要更新数据");

  //     var ctrl1=<HTMLSelectElement>document.getElementById("sel");   
  //     for(var i=0;i<ctrl1.options.length;)      //removechild全部option
  //     { 
  //         ctrl1.removeChild(ctrl1.options[i]); 
  //     }

  //     for(var i=0;i<this.dataSet1.length;i++) { //重新appendchild全部option 
  //     var op = document.createElement("option"); 
  //     op.value = this.dataSet1[i].name;
  //     op.text = this.dataSet1[i].name;
  //     sel.appendChild(op);
  //  }
  //   }else{      //第二种要更新的情况：option个数一致，比较每一项是否相同，通过name比较，设置flag进行每一项的判断
  //   for(var i=0;i<this.dataSet1.length;i++){    
  //     var flag = false;
  //     for(var j=0;j<x;j++){         
  //       if(this.dataSet1[i].name ==  (<HTMLSelectElement>document.getElementById('sel')).options[j].text) {
  //         flag = true;
  //         continue;        //无序数据的比较，需要比较每一项，如果相同，则打上标记跳过此次循环
  //       }       
  //     }
  //     if(flag == false){  //如果比较某一项比较结束，发现值不相等，则更新数据
  //       alert("不一样，要更新"); 
  //        var ctrl1=<HTMLSelectElement>document.getElementById("sel");   
  //     for(var i=0;i<ctrl1.options.length;)      //removechild全部option
  //     { 
  //         ctrl1.removeChild(ctrl1.options[i]); 
  //     }

  //     for(var i=0;i<this.dataSet1.length;i++) { //重新appendchild全部option 
  //     var op = document.createElement("option"); 
  //     op.value = this.dataSet1[i].name;
  //     op.text = this.dataSet1[i].name;
  //     sel.appendChild(op);
  //  }
  //     }
  //   }
  //   if(flag == true){
  //     alert("数据与后台一致，不需要更新");
  //   }

  //    }
  //   }

  deleteRow(i): void {
    const dataSet = this.dataSet.filter(d => d.id !== i);
    this.dataSet = dataSet;
    this.c_dgh = 0;
    this.c_weight = 0;
    this.c_max_gh = 0;
  }

  startEdit(id): void {
    this.editCache[ id ].edit = true;
  }

  finishEdit(id): void {
    this.editCache[ id ].edit = false;
    this.dataSet.find(item => item.id === id).name = this.editCache[ id ].name;
  }
  //更新改造数据
  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.id ]) {
        this.editCache[ item.id ] = {
          edit: false,
          name: item.name
        };
      }
    });
  }
  //数量加
  plusnumber(t) 
  {
    this.dataSet[t].number = this.dataSet[t].number + 1;

  }
  //数量减
  minusnumber(t)
  {
    if(this.dataSet[t].number > 1){    //做减法的时候判断一下数量是否小于1
    this.dataSet[t].number = this.dataSet[t].number - 1;  
    }
  }
  //计算功耗
  calculate()
  {
    // var result = document.getElementById('result');
    // result.style.display = "block";
    //if(this.c_weight ==0)  //此处有bug~~~~~~~~~~~~~~~点击计算时。。。。。。。。。。。。。。。。。。。。。。
    this.c_weight = 0; 
    this.c_dgh = 0;
    this.c_max_gh = 0;

    for(this.j=0;this.j<this.dataSet.length;this.j++)
    {
      this.c_weight =this.c_weight+this.dataSet[this.j].number*this.dataSet[this.j].weight; 
    }

    for(this.j=0;this.j<this.dataSet.length;this.j++)
    {
      this.c_dgh =this.c_dgh+this.dataSet[this.j].number*this.dataSet[this.j].dgh; 
    }
    
    for(this.j=0;this.j<this.dataSet.length;this.j++)
    {
      this.c_max_gh =this.c_max_gh+this.dataSet[this.j].number*this.dataSet[this.j].max_gh; 
    }
    
  }

  tableToExcel(){       //按钮：导出配置单
    //列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str =  '单板ID号,型号,数量,典型功率,最大功率,重量\n';
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

  plusnum1(){
    this.num1 = this.num1+1;
  }
  minusnum1(){
    if(this.num1>1)
    this.num1 = this.num1-1;
  }




  Test01(){
    /*测试数据*/ 
  var dataSet3 = {
  "code": 0,
  "data": [
      {
          "id": 0,
          "name": "8080_u_p1",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      },
      {
          "id": 1,
          "name": "8080_u_p2",
          "number": 98,
          "dgh": 100,
          "max_gh": 90,
          "weight": 97
      },
      {
          "id": 2,
          "name": "8080_u_p3",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      },
      {
          "id": 3,
          "name": "8080_u_p4",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      },
      {
          "id": 4,
          "name": "8080_u_p5",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      },
      {
          "id": 5,
          "name": "8080_u_p6",
          "number": 5444,
          "dgh": 44,
          "max_gh": 444,
          "weight": 88
      },
      {
          "id": 6,
          "name": "8080_u_p7",
          "number": 1,
          "dgh": 1,
          "max_gh": 1,
          "weight": 1
      },
      {
          "id": 7,
          "name": "8080_u_p8",
          "number": 1,
          "dgh": 1,
          "max_gh": 1,
          "weight": 1
      },
      {
          "id": 8,
          "name": "8080_u_p",
          "number": 1,
          "dgh": 1,
          "max_gh": 1,
          "weight": 1
      },
      {
          "id": 9,
          "name": "8080_u_p",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      },
      {
          "id": 10,
          "name": "8080_u_p",
          "number": 1,
          "dgh": 1,
          "max_gh": 1,
          "weight": 1
      },
      {
          "id": 11,
          "name": "8080_u_p",
          "number": 1,
          "dgh": 1,
          "max_gh": 1,
          "weight": 1
      },
      {
          "id": 12,
          "name": "8080_u_p",
          "number": 1,
          "dgh": 1,
          "max_gh": 1,
          "weight": 1
      },
      {
          "id": 13,
          "name": "8080_u_p",
          "number": 2,
          "dgh": 2,
          "max_gh": 2,
          "weight": 2
      },
      {
          "id": 14,
          "name": "8080_u_p",
          "number": 3,
          "dgh": 4,
          "max_gh": 5,
          "weight": 6
      },
      {
          "id": 15,
          "name": "8080_u_p",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      },
      {
          "id": 16,
          "name": "8080_u_p",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      },
      {
          "id": 17,
          "name": "8080_u_p",
          "number": 98,
          "dgh": 100,
          "max_gh": 99,
          "weight": 97
      }
  ],
  "msg": null
}
this.dataSet1 = [];
  for(var j=0;j<dataSet3.data.length;j++){
    this.dataSet1 = [ ...this.dataSet1, {
    id    : dataSet3.data[j].id,
    name   : dataSet3.data[j].name,
    number : dataSet3.data[j].number,
    dgh     : dataSet3.data[j].dgh,
    max_gh   : dataSet3.data[j].max_gh,
    weight : dataSet3.data[j].weight
  } ];
  }
  console.log(this.dataSet1)
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




