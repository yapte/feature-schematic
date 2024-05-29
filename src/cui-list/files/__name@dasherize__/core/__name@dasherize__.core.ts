import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Example} from './models/example';
import {<%= classify(name) %>Request} from './models/<%= dasherize(name) %>-request-data';

@Injectable()
export abstract class <%= classify(name) %>Core {
  abstract getList(model: <%= classify(name) %>Request): Observable<Example[]>;

  abstract usecase2(): Observable<void>;
}
