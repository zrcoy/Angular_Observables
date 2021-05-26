import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  private activationSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activationSubscription = this.userService.activationEmitter.subscribe(
      (data) => {
        this.isActivated = data;
      }
    );
  }

  ngOnDestroy() {
    this.activationSubscription.unsubscribe();
  }
}
