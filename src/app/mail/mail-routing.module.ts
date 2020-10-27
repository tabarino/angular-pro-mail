import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';

export const routes: Routes = [
    {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
            messages: MailFolderResolve
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MailRoutingModule { }
