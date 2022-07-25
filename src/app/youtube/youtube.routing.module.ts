import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { YoutubeComponent } from "./youtube.component";

const routes: Routes = [{ path: '', component: YoutubeComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class YoutubeRoutingModule {}
