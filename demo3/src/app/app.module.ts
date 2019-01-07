import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule,JsonpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { OSN902Component } from './components/osn902/osn902.component';
import { O9800Component } from './components/o9800/o9800.component';
import { O1800Component } from './components/o1800/o1800.component';
import { O8800Component } from './components/o8800/o8800.component';
import { LocationComponent } from './components/O9800/location/location.component';
import { NumberComponent } from './components/O9800/number/number.component';
import { NumberSelectComponent } from './components/O9800/number/number-select/number-select.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    OSN902Component,
    O9800Component,
    O1800Component,
    O8800Component,
    LocationComponent,
    NumberComponent,
    NumberSelectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    HttpModule,
    JsonpModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
