import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardModule } from '../shared/components/card/card.module';

import { HomeComponent } from "./home.component";
import { TopComponent } from "./top/top.component";
import { MidComponent } from "./mid/mid.component";
import { BotComponent } from "./bot/bot.component";
import { MaterialModule } from "../shared/material/material.module";
import { HeaderComponent } from './top/header/header.component';
import { SectionHowComponent } from './top/section-how/section-how.component';


import { SectionDomainComponent } from './mid/section-domain/section-domain.component';
import { SectionAnotherComponent } from './mid/section-another/section-another.component';
import { SectionContactionComponent } from './bot/section-contaction/section-contaction.component';
import { FormComponent } from './bot/form/form.component';
import { SectionAboutComponent } from './bot/section-about/section-about.component';
import { ContactInfoComponent } from './bot/form/contact-info/contact-info.component';

@NgModule({
  declarations: [HomeComponent, TopComponent, MidComponent, BotComponent, HeaderComponent, SectionHowComponent, SectionDomainComponent, SectionAnotherComponent, SectionContactionComponent, FormComponent, SectionAboutComponent, ContactInfoComponent],
  imports: [CommonModule, MaterialModule, CardModule]
})
export class HomeModule {}
