import { Component, OnInit } from '@angular/core';
import { <%= classify(name) %>Mediator } from '../../services/<%= dasherize(name) %>.mediator';
import { <%= classify(name) %>Data } from '../../../data/<%= dasherize(name) %>.data';
import { <%= classify(name) %>Core } from '../../../core/<%= dasherize(name) %>.core';

@Component({
    selector: 'app-<%=dasherize(name)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['./<%=dasherize(name)%>.component.scss'],
    providers: [
        <%= classify(name) %>Mediator, 
        { provide: <%= classify(name) %>Core, useClass: <%= classify(name) %>Data },
    ],
})
export class <%= classify(name) %>Component implements OnInit {

    constructor(private readonly mediator: <%= classify(name) %>Mediator) { }

    ngOnInit(): void {
        this.mediator.init();
    }
}
