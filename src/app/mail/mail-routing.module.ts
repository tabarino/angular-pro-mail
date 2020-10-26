import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

export const routes: Routes = [
    { path: 'folder/:name', component: MailFolderComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MailRoutingModule { }