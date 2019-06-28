import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScannerComponent } from './scanner/scanner.component';

import { HeaderComponent } from './header/header.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScannerComponent,
    HeaderComponent,
    InfoBlockComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
