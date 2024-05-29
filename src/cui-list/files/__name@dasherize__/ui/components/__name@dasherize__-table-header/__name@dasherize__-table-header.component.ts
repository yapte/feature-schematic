import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {<%= classify(name) %>Mediator} from '../../services/<%= dasherize(name) %>.mediator';
import {SelectedData} from '../../models/selected-data';

@Component({
  selector: 'tr[cui-<%= dasherize(name) %>-table-header]',
  templateUrl: '<%= dasherize(name) %>-table-header.component.html',
  styleUrls: ['./<%= dasherize(name) %>-table-header.component.scss'],
})
export class <%= classify(name) %>TableHeaderComponent {
  readonly loadingInProgress$: Observable<boolean> = this.mediator.loading$.pipe(map((l) => l.inProgress));
  readonly selected$: Observable<SelectedData> = this.mediator.selected$;

  constructor(private readonly mediator: <%= classify(name) %>Mediator) {}

  todo(): void {
    // this.mediator.todo();
  }
}
