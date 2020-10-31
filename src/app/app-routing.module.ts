import { NgModule } from '@angular/core';
import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreload implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return route.data && route.data.preload ? fn() : of(null);
    }
}

// Lazy Loading Dashboard Module using loadChildren
export const routes: Routes = [
    {
        path: 'dashboard',
        data: { preload: true },
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: CustomPreload
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
