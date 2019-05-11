import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [LayoutComponent, ContentComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule
  ]
})
export class LayoutModule { }
