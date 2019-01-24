import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { SharedModule } from './shared/shared.module';
import { TopModule } from './pages/top/top.module';

@NgModule({
  declarations: [AppComponent, LogoComponent, HeaderMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: false,
      scope: environment.swScope
    }),
    LayoutModule,
    SharedModule,
    TopModule // Initial Page (Eager Loading)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
