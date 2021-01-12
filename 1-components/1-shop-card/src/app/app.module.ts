import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { TestPipe } from './shop-card/test.pipe';

@NgModule({
  declarations: [AppComponent, ShopCardComponent, TestPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
// @ts-ignore
export class AppModule {}
