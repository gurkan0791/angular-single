import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

@NgModule({
  imports: [
    CommonModule,
    Angular2ImageGalleryModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
