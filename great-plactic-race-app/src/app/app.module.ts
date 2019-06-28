import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScannerComponent } from './scanner/scanner.component';

import { HeaderComponent } from './header/header.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { ProductListComponent } from './product-list/product-list.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
