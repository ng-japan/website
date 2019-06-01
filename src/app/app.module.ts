import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { TopModule } from './pages/top/top.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LogoComponent, HeaderMenuComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: true,
    // }),
    LayoutModule,
    SharedModule,
    TopModule,
    BrowserAnimationsModule // Initial Page (Eager Loading)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
