import {Routes} from '@angular/router';
import {dashboardUserGuard} from "./guard/dashboard-user.guard";

export const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {
    path: "login", loadComponent:
      () => import('./components/log-in/log-in.component')
        .then(e => e.LogInComponent)
  },
  {
    path: "dashboard", loadChildren:
      () => import('./modules/dashboard/dashboard.module')
        .then(e => e.DashboardModule),canActivate:[dashboardUserGuard]
  }
];
