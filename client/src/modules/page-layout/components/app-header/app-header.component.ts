import {
  Component,
  Inject,
  OnDestroy,
  Optional,
  PLATFORM_ID,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginModalComponent } from "../login-modal/login-modal.component";
import { APP_BASE_HREF, isPlatformServer } from "@angular/common";

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"],
})
export class AppHeaderComponent implements OnDestroy {
  isDarkMode: boolean = false;
  listenerHandler = (event: MediaQueryListEvent) => {
    this.isDarkMode = event.matches;
    this.changeMode();
  };
  constructor(
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_BASE_HREF) @Optional() appBaseHref: string
  ) {
    // console.log(this.platformId); // browser
    // console.log(isPlatformServer(this.platformId)); // false
    // console.log(appBaseHref); // null

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", this.listenerHandler);
  }
  changeMode() {
    const bodyTag = document.querySelector("body") as HTMLBodyElement;
    if (this.isDarkMode) {
      if (!bodyTag.classList.contains("dark-mode")) {
        bodyTag.classList.add("dark-mode");
      }
    } else {
      bodyTag.classList.remove("dark-mode");
    }
  }

  openLoginModal() {
    this.dialog
      .open(LoginModalComponent, {
        disableClose: false,
        maxWidth: "400px",
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
  }

  ngOnDestroy() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", this.listenerHandler);
  }
}
