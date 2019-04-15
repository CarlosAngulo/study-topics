import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { AngularAdvancedComponent } from  './angular-advanced/angular-advanced.component';
import { JsAdvancedComponent } from './js-advanced/js-advanced.component';
import { TocComponent } from './toc/toc.component';

const ROUTES: Routes = [
  { path:'', component: TocComponent},
  { path:'tools', component: ToolsComponent},
  { path:'ng-basic', component: AngularBasicComponent },
  { path:'ng-advanced', component: AngularAdvancedComponent },
  { path:'js-advanced', component: JsAdvancedComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
