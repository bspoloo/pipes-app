import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MenubarModule,
    MenuModule,
    AvatarModule,
    BadgeModule,
    PanelModule,
    CardModule,
    FieldsetModule,
    ButtonModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
