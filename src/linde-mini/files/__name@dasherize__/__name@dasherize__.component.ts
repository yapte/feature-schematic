import { Component, OnInit } from '@angular/core';
import { <%= classify(name) %>Mediator } from './services/<%= dasherize(name) %>.mediator';

@Component({
    selector: 'app-<%=dasherize(name)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['./<%=dasherize(name)%>.component.scss'],
    providers: [<%= classify(name) %>Mediator],
})
export class <%= classify(name) %>Component implements OnInit {

    constructor(private _mediator: <%= classify(name) %>Mediator) { }

    ngOnInit(): void {
        this._mediator.init();
    }
}
