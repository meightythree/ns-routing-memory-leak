import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [NativeScriptModule, NativeScriptCommonModule, AppRoutingModule,],
})
export class AppModule {}
