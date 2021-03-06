import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { AuthGuard } from '../auth/auth.guard';
import { MailViewGuard } from './components/mail-view/mail-view.guard';

export const routes: Routes = [
    {
        path: 'mail',
        component: MailAppComponent,
        canActivateChild: [AuthGuard],
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
                canDeactivate: [MailViewGuard],
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
