import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "../main-page/components/main-page/main-page.component";
import { AppMainComponent } from "./components/app-main/app-main-component";

const routes: Routes = [
  {
    path: "",
    component: AppMainComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: MainPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLayoutRoutingModule {}
