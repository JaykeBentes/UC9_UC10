import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './home/header/header.component';
import { CarrosselComponent } from './home/carrossel/carrossel.component';
import { JogosComponent } from './home/jogos/jogos.component';
import { FooterComponent } from './home/footer/footer.component';
import { SanduicheComponent } from './home/header/sanduiche/sanduiche.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from './home/banner/banner.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrosselComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    BannerComponent,
    JogosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    SanduicheComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
