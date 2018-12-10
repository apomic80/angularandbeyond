import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResults } from "./home.models";

@Injectable()
export class HomeService {

    constructor(private httpClient: HttpClient) { }

    getUsers() {
        return this.httpClient.get<IResults>("https://randomuser.me/api/?results=15");
    }
}
