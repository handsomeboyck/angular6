import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O1800Component } from './components/o1800/o1800.component';
import { O8800Component } from './components/o8800/o8800.component';
import { O9800Component } from './components/o9800/o9800.component';
import { OSN902Component } from './components/osn902/osn902.component';

import { LocationComponent } from './components/O9800/location/location.component';
import { NumberComponent } from './components/O9800/number/number.component';
import { NumberSelectComponent } from './components/O9800/number/number-select/number-select.component';



const routes: Routes = [
  {
    path: 'osn902',
    component : OSN902Component
  },
  {
    path: 'o1800',
    component: O1800Component

  },
  {
    path: 'o8800',
    component: O8800Component

  },
  {
    path: 'o9800',
    component: O9800Component,
    //配置子路由
    children:[
      {
        path: 'number',
        component:NumberComponent,
        children:[
          {
            path: 'number_select',
            component:NumberSelectComponent,
        
          }
        ]
    
      },
      {
        path: 'location',
        component: LocationComponent
    
      },
      {   
        path: '**',  /*任意的路由*/
        // component:HomeComponent
        redirectTo:'o9800'
      }
  
    ]
  },

  
  {   /*匹配不到路由的时候加载的组件*/
    path: '**',  /*任意的路由*/
    // component:HomeComponent
    redirectTo:'o1800'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
