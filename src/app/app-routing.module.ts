import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy Loading Dashboard Module using loadChildren
export const routes: Routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
