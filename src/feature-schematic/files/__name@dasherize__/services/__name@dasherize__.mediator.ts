import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs";

import { <%= classify(name) %>Data } from "../data/<%= dasherize(name) %>.data";

@Injectable()
export class <%= classify(name) %>Mediator {

    constructor(private data: <%= classify(name) %>Data) { }

    init(): void {
        this.fetch();
        // TODO: implement
    }

    private fetch(): void {
        this.data.getList()
            .pipe(
                tap({
                    next: list => console.log(list),
                    error: err => console.log(err),
                }),
                finalize(() => console.log('finaliize'))
            )
            .subscribe();
    }
}