import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MailModule } from './mail/mail.module';
import { AppRoutingModule, CustomPreload } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MailModule,
        AuthModule,
        AppRoutingModule
    ],
    providers: [
        CustomPreload
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
