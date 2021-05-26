import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  private isActivated: boolean = false;

  //old way using event emitter for transfering data cross component
  //activationEmitter = new EventEmitter<boolean>();
  activationEmitter = new Subject<boolean>();
}
