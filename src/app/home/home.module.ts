import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../shared/components/card/card.module';
import { InputModule } from '../shared/components/input/input.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SectionHowComponent } from './section-how/section-how.component';
import { SectionDomainComponent } from './section-domain/section-domain.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { SectionFormComponent } from './section-form/section-form.component';
import { SectionInfoComponent } from './section-info/section-info.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, SectionHowComponent, SectionDomainComponent, SectionAboutComponent, SectionContactComponent, SectionFormComponent, SectionInfoComponent],
  imports: [
    CommonModule,
    CardModule,
    InputModule
  ]
})
export class HomeModule { }
