import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: 'facebook', loadChildren: () => import('./facebook/facebook.module').then(m => m.FacebookModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { initialNavigation: 'disabled' })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
