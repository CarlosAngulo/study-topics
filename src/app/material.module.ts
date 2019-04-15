
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatToolbarModule],
})
export class MaterialModule { }