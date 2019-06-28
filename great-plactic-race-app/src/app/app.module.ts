import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScannerComponent } from './scanner/scanner.component';

import { HeaderComponent } from './header/header.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScannerComponent,
    HeaderComponent,
    InfoBlockComponent,
    ProductListComponent,
    LoggedInPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
