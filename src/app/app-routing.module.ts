import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { PracticeComponent } from './components/practice/practice.component';
import { TricksComponent } from './components/tricks/tricks.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LearningportalComponent } from './components/learningportal/learningportal.component';
import { AgespartnersComponent } from './components/agespartners/agespartners.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SolveComponent } from './components/solve/solve.component';
import { HttpClientModule} from '@angular/common/http';
import { ClockcalComponent } from './components/clockcal/clockcal.component';
import { AuthGuard } from 'src/app/auth-guard';
import { DocsComponent } from './components/docs/docs.component';
import { PracticetestComponent } from './components/practicetest/practicetest.component';
import { PortalComponent } from './components/portal/portal.component';
import { CportalComponent } from './components/cportal/cportal.component';
import { AportalComponent } from './components/aportal/aportal.component';
import { AsolveComponent } from './components/asolve/asolve.component';
import { CsolveComponent } from './components/csolve/csolve.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { TestresultComponent } from './components/testresult/testresult.component';
import { AcportalComponent } from './components/acportal/acportal.component';
import { AcsolveComponent } from './components/acsolve/acsolve.component';
import { DocComponent } from './components/doc/doc.component';
import { ComfirmationComponent } from './components/comfirmation/comfirmation.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TopicsComponent } from './components/topics/topics.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { InterviewComponent } from './components/interview/interview.component';






const routes: Routes = [
  
  //{path:'',redirectTo:'login'},
  //{path:'',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'clockcal',component:ClockcalComponent},
  //{path:'',redirectTo:'/practice',pathMatch:'full'},
  {path:'practice',component:PracticeComponent,canActivate:[AuthGuard]},
  {path:'tricks',component:TricksComponent,canActivate:[AuthGuard]},
  {path:'leaderboard',component:LeaderboardComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'practice/learningportal',component:LearningportalComponent,canActivate:[AuthGuard]},
  {path:'practice/learningportal/agespartners',component:AgespartnersComponent,canActivate:[AuthGuard]},
  {path:'practice/learningportal/clockcal',component:ClockcalComponent,canActivate:[AuthGuard]},
  {path:'learningportal',component:LearningportalComponent,canActivate:[AuthGuard]},
  {path:'practicetest',component:PracticetestComponent,canActivate:[AuthGuard]},
  {path:'practice/practicetest',component:PracticetestComponent,canActivate:[AuthGuard]},
  {path:'practice/learningportal/agespartners/solve',component:SolveComponent,canActivate:[AuthGuard]},
  {path:'practice/learningportal/clockcal/solve',component:SolveComponent,canActivate:[AuthGuard] },
  {path:'solve',component:SolveComponent,canActivate:[AuthGuard]},
  {path:'practicetest/solve',component:SolveComponent,canActivate:[AuthGuard]},
  {path:'practice/practicetest/solve',component:SolveComponent,canActivate:[AuthGuard]},
  {path:'docs',component:DocsComponent,canActivate:[AuthGuard]},
  {path:'portal',component:PortalComponent,canActivate:[AuthGuard]},
  {path:'portal',component:PortalComponent,canActivate:[AuthGuard]},
  {path:'practice/portal',component:PortalComponent,canActivate:[AuthGuard]},
  {path:'aportal',component:AportalComponent,canActivate:[AuthGuard]},
  {path:'practice/portal/aportal',component:AportalComponent,canActivate:[AuthGuard]},
  {path:'cportal',component:CportalComponent,canActivate:[AuthGuard]},
  {path:'practice/portal/cportal',component:CportalComponent,canActivate:[AuthGuard]},
  {path:'asolve',component:AsolveComponent,canActivate:[AuthGuard]},
  {path:'practice/portal/aportal/asolve',component:AsolveComponent,canActivate:[AuthGuard]},
  {path:'csolve',component:AsolveComponent,canActivate:[AuthGuard]},
  {path:'practice/portal/cportal/csolve',component:CsolveComponent,canActivate:[AuthGuard]},
  {path:'instructions',component:InstructionsComponent,canActivate:[AuthGuard]},
  {path:'practice/portal/cportal/instructions',component:InstructionsComponent,canActivate:[AuthGuard]},
  {path:'practice/portal/aportal/instructions',component:InstructionsComponent,canActivate:[AuthGuard]},
  {path:'testresult',component:TestresultComponent,canActivate:[AuthGuard]},  
  {path:'acsolve',component:AcsolveComponent,canActivate:[AuthGuard]},
  {path:'doc',component:DocComponent,canActivate:[AuthGuard]},
  {path:'comfirmation/:id',component:ComfirmationComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  {path:'practice/learningportal/topics',component:TopicsComponent},
  {path:'documentation',component:DocumentsComponent},
  {path:'practice/interview',component:InterviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
