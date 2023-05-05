import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppMainComponent } from "./components/app-main/app-main-component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { PageLayoutRoutingModule } from "./page-layout-routing.module";

@NgModule({
  declarations: [AppMainComponent, AppHeaderComponent, AppFooterComponent],
  imports: [CommonModule, PageLayoutRoutingModule],
})
export class PageLayoutModule {}
