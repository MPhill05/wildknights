import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'news', component: NewsComponent },
    { path: 'events', component: EventsComponent },
    { path: '', component: IndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
