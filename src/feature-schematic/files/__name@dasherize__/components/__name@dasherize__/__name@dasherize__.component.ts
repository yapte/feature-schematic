import { Component, OnInit } from '@angular/core';
import { <%= classify(name) %>Mediator } from '../../services/<%= dasherize(name) %>.mediator';
import { <%= classify(name) %>Data } from '../../data/<%= dasherize(name) %>.data';

@Component({
    selector: 'app-<%=dasherize(name)%>.component',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['./<%=dasherize(name)%>.component.scss'],
    providers: [<%= classify(name) %>Mediator, <%= classify(name) %>Data],
})
export class <%= classify(name) %>Component implements OnInit {

    constructor(private _mediator: <%= classify(name) %>Mediator) { }

    ngOnInit(): void {
        this._mediator.init();
    }
}
