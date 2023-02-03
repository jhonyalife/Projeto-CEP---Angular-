import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HistorySearchComponent } from './components/historySearch/history-search.component';
import { ResultsModalComponent } from './components/resultsModal/results-modal.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'home', component: ResultsModalComponent, canActivate: [AuthGuard] },
  { path: 'history-search', component: HistorySearchComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
