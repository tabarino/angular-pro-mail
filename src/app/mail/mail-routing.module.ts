import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

const ROUTES: Routes = [
    { path: 'folder/:name', component: MailFolderComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class MailRoutingModule { }
