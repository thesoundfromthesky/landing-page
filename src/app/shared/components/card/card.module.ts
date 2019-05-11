import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { TitleComponent } from "./title/title.component";
import { ContentComponent } from "./content/content.component";
import { ActionComponent } from "./action/action.component";
import { ActionDirective } from "./action/action.directive";

const components = [
  CardComponent,
  TitleComponent,
  ContentComponent,
  ActionComponent
];

const directives = [ActionDirective];
@NgModule({
  declarations: [...components, ...directives],
  imports: [CommonModule],
  exports: [...components, ...directives]
})
export class CardModule {}
