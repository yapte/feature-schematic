import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {SkeletonModule} from 'primeng/skeleton';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';

import {ShowTooltipIfOverflownModule} from '@platform-ui/common/uikit/show-tooltip-if-overflown';
import {TableVirtualScrollScrolledToEndDirectiveModule, ActionsOfCheckedTableRowsModule} from '@platform-ui/table-kit';

import {<%= classify(name) %>Component} from './<%= dasherize(name) %>.component';
import {<%= classify(name) %>TableHeaderComponent} from './ui/components/<%= dasherize(name) %>-table-header/<%= dasherize(name) %>-table-header.component';
import {<%= classify(name) %>TableRowComponent} from './ui/components/<%= dasherize(name) %>-table-row/<%= dasherize(name) %>-table-row.component';

const routes: Routes = [{path: '', component: <%= classify(name) %>Component}];

@NgModule({
  declarations: [<%= classify(name) %>Component, <%= classify(name) %>TableHeaderComponent, <%= classify(name) %>TableRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ButtonModule,
    CheckboxModule,
    SkeletonModule,
    TableModule,
    TooltipModule,
    ShowTooltipIfOverflownModule,
    TableVirtualScrollScrolledToEndDirectiveModule,
    ActionsOfCheckedTableRowsModule,
  ],
})
export class <%= classify(name) %>Module {}
