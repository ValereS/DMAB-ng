import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
 imports: [ CommonModule, AppRoutingModule ],
 declarations: [ NavBarComponent ],
 exports: [ NavBarComponent ],
 providers: []
})
export class CoreModule { }
