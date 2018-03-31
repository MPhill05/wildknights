import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SocialDirective } from './shared/social.directive';

import { FooterToggle } from './footertoggle';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    EventsComponent,
    NewsComponent,
    ContactComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FooterToggle],
  bootstrap: [AppComponent]
})
export class AppModule { }
