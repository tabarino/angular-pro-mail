import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailRoutingModule } from './mail-routing.module';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';

@NgModule({
    declarations: [
        MailFolderComponent,
        MailAppComponent,
        MailItemComponent
    ],
    imports: [
        CommonModule,
        MailRoutingModule
    ],
    exports: [
        MailAppComponent
    ]
})
export class MailModule {
}
