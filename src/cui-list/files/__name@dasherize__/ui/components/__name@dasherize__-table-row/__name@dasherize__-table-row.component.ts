import { Component, Input } from '@angular/core';
import { <%= classify(name) %>Mediator } from '../../services/<%= dasherize(name) %>.mediator';
import { Example } from '../../../core/models/example';

@Component({
  selector: 'tr[cui-<%= dasherize(name) %>-table-row]',
  templateUrl: '<%= dasherize(name) %>-table-row.component.html',
  styleUrls: ['./<%= dasherize(name) %>-table-row.component.scss'],
})
export class <%= classify(name) %>TableRowComponent {
  @Input({required: true}) item: Example;

  constructor(private readonly mediator: <%= classify(name) %>Mediator) { }

  todo(): void {
    // this.mediator.todo();
  }
}
