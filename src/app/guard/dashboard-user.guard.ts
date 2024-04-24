import { CanActivateFn } from '@angular/router';

export const dashboardUserGuard: CanActivateFn = (route, state) => {
  return false;
};
