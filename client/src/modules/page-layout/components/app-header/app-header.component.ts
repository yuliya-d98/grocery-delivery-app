import { Component, OnDestroy } from "@angular/core";

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
  constructor() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", this.listenerHandler);
  }
  changeMode() {
    const bodyTag = document.querySelector("body");
    if (this.isDarkMode) {
      if (!bodyTag!.classList.contains("dark-mode")) {
        bodyTag!.classList.add("dark-mode");
      }
    } else {
      bodyTag!.classList.remove("dark-mode");
    }
  }

  ngOnDestroy() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", this.listenerHandler);
  }
}
