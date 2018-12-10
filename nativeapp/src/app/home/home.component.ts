import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { IUser } from "./home.models";
import { HomeService } from "./home.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [HomeService]
})
export class HomeComponent implements OnInit {

    users: Array<IUser>;

    constructor(private service: HomeService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.service.getUsers()
            .subscribe((arg) => this.users = arg.results);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
