import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MailModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
