import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppMainComponent } from "./components/app-main/app-main-component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { PageLayoutRoutingModule } from "./page-layout-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginModalComponent } from "./components/login-modal/login-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { PageLayoutHttpService } from "./services/page-layout.http.service";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppMainComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LoginModalComponent,
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSlideToggleModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [PageLayoutHttpService, HttpClientModule],
})
export class PageLayoutModule {}
