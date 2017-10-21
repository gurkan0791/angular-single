import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
//import { HomeComponent } from './home/index';
//import { ProductListComponent, ProductAddEditComponent } from './products/index';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'gallery', pathMatch: 'full', component: GalleryComponent },
    { path: 'contact', pathMatch: 'full', component: ContactComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ContactComponent, HomeComponent, GalleryComponent];