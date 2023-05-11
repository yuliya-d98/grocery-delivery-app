import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { PageLayoutHttpService } from "../../services/page-layout.http.service";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.scss"],
})
export class LoginModalComponent {
  selectedTab: number = 0;
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private pageLayoutHttpService: PageLayoutHttpService
  ) {
    this.initForm();
  }

  initForm(event?: MatTabChangeEvent) {
    if (event) {
      this.selectedTab = event.index;
    }
    this.form = this.formBuilder.group({
      ...(this.selectedTab === 1 && {
        username: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(30),
          ],
        ],
      }),
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
    });
  }

  login() {
    console.log(this.form.getRawValue());
  }
  registration() {
    const form = this.form.getRawValue();
    (this.pageLayoutHttpService.registration(form) as any).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => console.log(error),
    });
  }
}
