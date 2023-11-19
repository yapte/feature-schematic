import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs";

import { <%= classify(name) %>Core } from "../../core/<%= dasherize(name) %>.core";

@Injectable()
export class <%= classify(name) %>Mediator {

    constructor(private readonly core: <%= classify(name) %>Core) { }

    init(): void {
        this.fetch();
        // TODO: implement
    }

    private fetch(): void {
        this.core.getList()
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