import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {SortEvent} from 'primeng/api';

import {SortPrimeng} from '@platform-ui/table-kit';

import {<%= classify(name) %>Core} from './core/<%= dasherize(name) %>.core';
import {Example} from './core/models/example';
import {<%= classify(name) %>Data} from './data/<%= dasherize(name) %>.data';
import {<%= classify(name) %>Mediator} from './ui/services/<%= dasherize(name) %>.mediator';
import {SelectedData} from './ui/models/selected-data';
import {Loading} from './ui/models/loading';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  templateUrl: '<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  providers: [<%= classify(name) %>Mediator, {provide: <%= classify(name) %>Core, useClass: <%= classify(name) %>Data}],
})
export class <%= classify(name) %>Component implements OnInit {
  readonly list$: Observable<Example[]> = this.mediator.list$;
  readonly loading$: Observable<Loading> = this.mediator.loading$;
  readonly selected$: Observable<SelectedData> = this.mediator.selected$;
  readonly itemsPerPage: number = this.mediator.getItemsPerPage();
  readonly initialSort: SortPrimeng = this.mediator.getSort();

  constructor(private readonly mediator: <%= classify(name) %>Mediator) {}

  ngOnInit(): void {
    this.mediator.init();
  }

  selectionChange(items: Example[]): void {
    this.mediator.selectionChange(items);
  }

  selectAllChange(): void {
    this.mediator.selectAllChange();
  }

  sort(sortEvent: SortEvent): void {
    this.mediator.sort(sortEvent);
  }

  fetchMore(): void {
    this.mediator.fetchMore();
  }
}
