import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { JsAdvancedComponent } from './js-advanced/js-advanced.component';
import { AngularAdvancedComponent } from './angular-advanced/angular-advanced.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TocComponent } from './toc/toc.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    AngularBasicComponent,
    JsAdvancedComponent,
    AngularAdvancedComponent,
    TocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
