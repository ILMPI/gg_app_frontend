import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { BalanceComponent } from './components/balance/balance.component';
import { GroupFormComponent } from './components/group-form/group-form.component';

export const routes: Routes = [
{ path: '', pathMatch:'full', redirectTo:'home' },
{ path: 'home', component: HomeComponent},
{ path: 'groups', component: GroupsComponent},
{ path: 'newgroup', component: GroupFormComponent},
{ path: 'editgroup/:id', component: GroupFormComponent},
{ path: 'expenses', component: ExpensesComponent},
{ path: 'balance', component: BalanceComponent}
/*,
{ path: '**', redirectTo:'home'}*/

];
