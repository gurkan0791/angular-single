import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ContactModule } from './contact/contact.module';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { GalleryModule } from './gallery/gallery.module';
import { FeatureComponent } from './home/feature/feature.component';
import { CommentComponent } from './home/comment/comment.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    FeatureComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ContactModule,
    GalleryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
