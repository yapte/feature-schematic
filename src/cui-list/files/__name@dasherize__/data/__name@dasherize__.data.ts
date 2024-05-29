import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

import {SearchRequestBodyDto} from '@platform-ui/common/api';

import {Example} from '../core/models/example';
import {<%= classify(name) %>Core} from '../core/<%= dasherize(name) %>.core';
import {<%= classify(name) %>Request} from '../core/models/<%= dasherize(name) %>-request-data';
import {<%= classify(name) %>Adapter} from './<%= dasherize(name) %>.adapter';

@Injectable()
export class <%= classify(name) %>Data implements <%= classify(name) %>Core {
  // TODO: Inject one or several API services
  // constructor(
  //   private readonly api1: Api1,
  //   private readonly api2: Api2,
  // ) { }

  getList(model: <%= classify(name) %>Request): Observable<Example[]> {
    const requestDto: SearchRequestBodyDto = <%= classify(name) %>Adapter.toRequestDto(model);

    console.log('use api', requestDto);
    // return this.api1.getList(requestDto);

    return of([{id: 'ID_1'}, {id: 'ID_2'}]).pipe(delay(3000));
  }

  usecase2(): Observable<void> {
    // TODO:
    // 1. Adapt request to DTO model using <%= classify(name) %>Adapter
    // 2. Adapt response to business logic model using <%= classify(name) %>Adapter
    return of(void 0);
  }
}
