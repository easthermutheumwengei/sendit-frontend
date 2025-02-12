import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {SenditComponent} from "./sendit/sendit.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {AuthGuard} from "./auth/auth.guard";
import {LogoutComponent} from "./logout/logout.component";

export const appRoutes: Routes = [
  { path: 'dashboard', component: HomeComponent, canActivate:[AuthGuard] },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path : '', component: SenditComponent },
  { path : 'logout', component: LogoutComponent },
];
