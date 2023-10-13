import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Example } from '../models/example';

@Injectable()
export class <%= classify(name) %>Data {
    // TODO: Inject one or several API services
    // constructor(
    //     private _api1: Api1,
    //     private _api2: Api2,
    // ) { }

    getList(): Observable<Example[]> {
        // TODO: 
        // 1. Adapt request to DTO model using MyFeatureAdapter
        // 2. Adapt response to business logic model using MyFeatureAdapter
        return of([]);
    }
}