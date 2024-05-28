import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';


@NgModule({
  declarations: [
    <%= classify(name) %>Component,
  ],
  imports: [
    CommonModule,
    <%= classify(name) %>RoutingModule,
  ]
})
export class <%= classify(name) %>Module { }
