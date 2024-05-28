import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs";
import { Router } from '@angular/router';
import { InProgressService, ToastService } from '@shared/uikit';

@Injectable()
export class <%= classify(name) %>Mediator {

    constructor(
        // private _api: Api,
        private _inProgress: InProgressService,
        private _toast: ToastService,
        private _router: Router,
    ) { }

    init(): void {
        this.fetch();
        // TODO: implement
    }

    private fetch(): void {
        this._inProgress.show();

        // this._api.getList()
        //     .pipe(
        //         tap({
        //             next: list => console.log(list),
        //             error: err => this._toast.showHttpResponseError(err),

        //         }),
        //         finalize(() => this._inProgress.hide()),
        //     )
        //     .subscribe();
    }
}