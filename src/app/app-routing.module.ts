import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
    { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
