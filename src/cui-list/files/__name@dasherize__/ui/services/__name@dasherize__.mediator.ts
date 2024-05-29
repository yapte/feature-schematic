import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, finalize, map, tap} from 'rxjs/operators';

import {SortEvent} from 'primeng/api';

import {SortPrimeng} from '@platform-ui/table-kit';

import {<%= classify(name) %>Core} from '../../core/<%= dasherize(name) %>.core';
import {Example} from '../../core/models/example';
import {<%= classify(name) %>Request} from '../../core/models/<%= dasherize(name) %>-request-data';
import {SelectedData} from '../models/selected-data';
import {Loading} from '../models/loading';

@Injectable()
export class <%= classify(name) %>Mediator {
  private readonly listRequest: <%= classify(name) %>Request = {
    page: 1,
    itemsPerPage: 50,
    sort: {field: 'name', direction: 'ASC'},
  };

  private readonly _list$ = new BehaviorSubject<Example[] | null>(null);
  private readonly _loading$ = new BehaviorSubject<Loading>({inProgress: false});
  private readonly _selected$ = new BehaviorSubject<SelectedData>({areAllSelected: false, items: []});

  readonly list$: Observable<Example[]> = this._list$.pipe(
    filter(Boolean),
    map((list) => list as Example[]),
  );

  readonly loading$: Observable<Loading> = this._loading$.asObservable();
  readonly selected$: Observable<SelectedData> = this._selected$.asObservable();

  constructor(private readonly core: <%= classify(name) %>Core) {}

  init(): void {
    this.fetch();
  }

  fetchMore(): void {
    // TODO: implement
  }

  search(value: string): void {
    this.listRequest.search = value;
    this.fetch();
  }

  sort(sortEvent: SortEvent): void {
    this.listRequest.sort = undefined;

    if (!sortEvent.field)
      this.listRequest.sort = {field: sortEvent.field as string, direction: sortEvent.order === -1 ? 'DESC' : 'ASC'};

    this.fetch();
  }

  selectAllChange(): void {
    const selected: SelectedData = this._selected$.value.areAllSelected
      ? {items: [], areAllSelected: false}
      : {items: this._list$.value ?? [], areAllSelected: true};

    this._selected$.next(selected);
  }

  selectionChange(items: Example[]): void {
    const selected: SelectedData = {items, areAllSelected: items.length === this._list$.value?.length};

    this._selected$.next(selected);
  }

  getItemsPerPage(): number {
    return this.listRequest.itemsPerPage;
  }

  getSort(): SortPrimeng {
    return {
      field: this.listRequest.sort?.field ?? '',
      direction: this.listRequest.sort?.direction === 'DESC' ? -1 : 1,
    };
  }

  private fetch(): void {
    this._loading$.next({inProgress: true});

    this.core
      .getList(this.listRequest)
      .pipe(
        tap({
          next: (list) => this._list$.next(list),
          error: (err: unknown) => console.log('TODO: ', err),
        }),
        finalize(() => this._loading$.next({inProgress: false})),
      )
      .subscribe();
  }
}
