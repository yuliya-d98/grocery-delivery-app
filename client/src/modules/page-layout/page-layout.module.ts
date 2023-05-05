import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppMainComponent } from "./components/app-main/app-main-component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { PageLayoutRoutingModule } from "./page-layout-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [AppMainComponent, AppHeaderComponent, AppFooterComponent],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
  ],
})
export class PageLayoutModule {}
