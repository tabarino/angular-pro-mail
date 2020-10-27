import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MailRoutingModule } from './mail-routing.module';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';

import { MailService } from './services/mail.service';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';

@NgModule({
    declarations: [
        MailFolderComponent,
        MailAppComponent,
        MailItemComponent
    ],
    imports: [
        CommonModule,
        MailRoutingModule,
        HttpClientModule
    ],
    exports: [
        MailAppComponent
    ],
    providers: [
        MailService,
        MailFolderResolve
    ]
})
export class MailModule {
}
