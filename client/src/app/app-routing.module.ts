import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageLayoutModule } from "../modules/page-layout/page-layout.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../modules/page-layout/page-layout.module").then(
        ({ PageLayoutModule }) => PageLayoutModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
