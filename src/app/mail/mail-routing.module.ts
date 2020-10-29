import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailAppComponent } from './components/mail-app/mail-app.component';

export const routes: Routes = [
    {
        path: 'mail',
        component: MailAppComponent,
        children: [
            {
                path: 'folder/:name',
                component: MailFolderComponent,
                resolve: {
                    messages: MailFolderResolve
                }
            },
            {
                path: 'message/:id',
                component: MailViewComponent,
                outlet: 'pane',
                resolve: {
                    message: MailViewResolve
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MailRoutingModule { }
