import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResults } from './list.model';

@Injectable()
export class ListService {

    constructor(private httpClient: HttpClient) { }

    getUsers() {
        return this.httpClient.get<IResults>('https://randomuser.me/api/?results=15');
    }
}
