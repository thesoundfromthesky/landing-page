import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardComponent } from "./card.component";
import { TitleComponent } from "./title/title.component";
import { ContentComponent } from "./content/content.component";
import { ActionComponent } from "./action/action.component";
import { ButtonDirective } from "./action/button.directive";

@NgModule({
  declarations: [
    CardComponent,
    TitleComponent,
    ContentComponent,
    ActionComponent,
    ButtonDirective
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    TitleComponent,
    ContentComponent,
    ActionComponent,
    ButtonDirective
  ]
})
export class CardModule {}
