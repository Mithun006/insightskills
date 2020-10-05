import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Update, Overall,updateProfile} from './auth-data.model';
import { GlobalDataSummary,GlobalData, GlobalPracticeSummary, GlobalPracticeTest} from './models/global-data'; 
import { Observable, Subject, of } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { NotifierService } from 'angular-notifier';
import {MatSnackBar } from '@angular/material/snack-bar';
// import { stat } from 'fs';


@Injectable({providedIn:"root"})
export class AuthService{
    
private clgURl:string='/assets/data/college.csv'
  // private _url:string='http://localhost:4600/apiAgesPart/questionsAgesPart';
  //private _url:string='/assets/data/data.csv';
  public message;
  enable=false;
  private updatedResult=new Subject<boolean>();
    public u3:any;
    public u4:any;
    public userId:Object;
    public id:string;
    public mail:string;
    public response:string;
    private isAuthenticated=false;
    private token:string;
    private tokenTimer:any;
    public testid;
    public duraation;
    public testname
    public count;
    public fildata;
    private authStatusListner=new Subject<boolean>();
    private notifier: NotifierService;

    constructor(private http:HttpClient,private router:Router,notifier: NotifierService,public snackBar: MatSnackBar ){
        this.notifier = notifier;
    }
    getToken(){
        return localStorage.getItem("token");
    }
    getAuthStatusListner(){
        return this.authStatusListner.asObservable();
    }
    getIsAuth(){
        return this.isAuthenticated;
    }

    createUser(firstName:string,lastName:string,mailId:string,password:string,collegeId:number){
        const authData={firstName:firstName,lastName:lastName,mailId:mailId,password:password,collegeId:collegeId};
        return this.http.post("apiRegister/studentRegister",authData).subscribe(()=>{
             console.log('register Successfully');
             this.handle1()
             this.router.navigate(['/login']);
         },error=>{         
             this.authStatusListner.next(false);
         });
    }

   login(mailId:string,password:string){
       console.log(mailId,password)
        const auth={email:mailId,password:password};
         this.http.post<{token:string,expiresIn:number,studentId:Object}>("api/student/login",auth).subscribe(response=>{
            const token=response.token;
            localStorage.setItem("token",token);
            this.token=token;
            this.userId=response.studentId;
            this.handle();
            if(token){
                const expiresInDuration=response.expiresIn;
                this.setAuthTimer(expiresInDuration);             
                this.isAuthenticated=true;              
                this.authStatusListner.next(true);
                const now =new Date();
                const expirationDate=new Date(now.getTime()+expiresInDuration*1000);             
                this.saveAuthData(token,expirationDate);
                this.router.navigate(['/practice'])
            }
            else{
                console.log('hai')

                this.router.navigate(['/'])
            }
        },error=>{
            // console.log('hai')
            this.authStatusListner.next(false);           
            this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
                this.router.navigate(['login']);
            }); 
        });  
        
    
    }
   
    

    hai(u1: any,u2: any){
        this.u3=u1;
        this.u4=u2;
        console.log(this.u3,this.u4);
    }

 getData():Observable<GlobalDataSummary[]>{
        return this.http.get<GlobalDataSummary[]>(`/${this.u3}/${this.u4}`);           
}
autoAuthUser(){
    const authInformation=this.getAuthData();  
    if(!authInformation){     
        return;
    }
    const now =new Date();
    const expiresIn=authInformation.expirationDate.getTime()-now.getTime();
    if(expiresIn > 0){
        this.token=authInformation.token;
        this.isAuthenticated=true;  
        this.setAuthTimer(expiresIn/1000);
        this.authStatusListner.next(true);
    }  
}

logout(){
    this.token=null;
    this.isAuthenticated=false;
    this.authStatusListner.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
}

private setAuthTimer(duration:number){
    this.tokenTimer= setTimeout(()=>{
        this.logout();
    },duration*1000)
}

private saveAuthData(token:string ,expirationDate:Date){ 
    localStorage.setItem('expiration',expirationDate.toISOString());   
}

private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem('userId');
    localStorage.removeItem('id');
}

private getAuthData(){
    const token=localStorage.getItem("token");
    const expirationDate=localStorage.getItem("expiration");
    if(token||!expirationDate){
        return{token:token,expirationDate:new Date(expirationDate)};
    }  
}




college(){
    return this.http.get(this.clgURl,{responseType:'text'}).pipe(
        map(result=>{
            let data:GlobalData[]=[]
            let raw={}       
            let rows=result.split('\n');
            rows.splice(0,1);           
            rows.forEach(row=>{
                let cols=row.split(/,(?=\S)/)          
               let cs={
                college:cols[2],               
            };
            let temp=raw[cs.college];
            if(temp){
                raw[cs.college]=cs;
            }
            else{
                raw[cs.college]=cs;
            }               
            })
          
        return <GlobalData[]>Object.values(raw);           
    }))
}

getPractice():Observable<GlobalPracticeSummary[]>{
    return this.http.get<GlobalPracticeSummary[]>('api/practice');  
}
givePracticeId(id){
    this.id=id;
}
getSolve(){
    // if(this.id===undefined){
    //     console.log('came here---->',this.id)
    //     let id=localStorage.getItem("id");
    //     return this.http.get('apiPractice/practice/'+id)
    // }
    // else{

    //     console.log('came podangu---->',this.id)
    //     return this.http.get('apiPractice/practice/'+this.id)
    // }
    return this.http.get(`apiPractice/practice/${this.id}`);
}

getElement(id:string,cs){
    // console.log('my dear bootham->',id,cs)
    this.fildata=cs;
    this.id=id;
    this.savepracticetest(this.id,cs);   
}
savepracticetest(id:string,cs){
    localStorage.setItem('id',id);
    localStorage.setItem('cs',cs);


}

getstatusbar(message:string){
    this.message=message;
    localStorage.setItem('message',message)
}
getstatusbar_1():Observable<GlobalPracticeTest[]>{
    if(this.message==null){
        this.message=localStorage.getItem('message');
    }

    return of(this.message);
}

getUsername(){
    return this.http.get('api/student/profile')
}

    updatePractice(id:string){   
        this.http.post('apiPracticeQuestionsUpdate/',id);    
    }

//    getATest(){
//       return this.http.get('apiTest/getATests'); 
//    }

getATest(){
    return this.http.get('api/aTest')
}
   atestId(id){
       
       this.testid=id;
       console.log(this.testid);  
   }

   getAtestbyID(){ 
       if(this.testname=='Atest'){
        return this.http.get(`apiTest/getATest/${this.testid}`);
       }
       else{
        return this.http.get(`apiTest/getCTest/${this.testid}`);
       }  
   }


//    getCTest(){
//     return this.http.get('apiTest/getCTests');
//    }

getCTest(){
    return this.http.get('api/cTest');
}


getIsAtest(){   
    return this.http.get('apiScoreUpdate/aTestScore/');
}

getIsCtest(){   
    return this.http.get('apiScoreUpdate/cTestScore/')
}

givedurationn(name){
    console.log(name);
    localStorage.setItem('name',name);
    this.testname=name;
}

giveduration(id,name){   
    this.testname=name;
    this.duraation=id; 
}

getDuration(){  
    if(this.testname=='Atest'){
        return this.http.get(`apiTest/getATest/${this.duraation}`);
    }
    else{
        console.log(this.duraation);
        return this.http.get(`apiTest/getCTest/${this.duraation}`);
    }  
}

getName(){
    return this.testname;    
}

updateStudent(testId,count,startTime,endTime,maxMark){ 
    const update={testId:testId,score:count,startTime:startTime,endTime:endTime,maxMark:maxMark}
    console.log(update);
    if(this.testname=='Atest'){ 
        console.log('Atest->')
       return this.http.post('apiScoreUpdate/aTestScoreUpdate/',update)
    }
    else{
        console.log('Ctest->');
        return this.http.post('apiScoreUpdate/cTestScoreUpdate/',update)    
    }
}

PostUpdate(testId,count){
    const update={score:count}
    console.log(update);
    if(this.testname=='Atest'){
        return this.http.put(`apiTest/post-aTestUpdate/${testId}`,update)  
    }
    else{
        return this.http.put(`apiTest/post-cTestUpdate/${testId}`,update)
    }

}



isSolvedAtest(){  
    return this.http.get('apiScoreUpdate/aTestScore/');
}

isSolvedCtest(){
  
    return this.http.get('apiScoreUpdate/cTestScore/');
}

getDashboardoff(){
    this.authStatusListner.next(false);
}
getDashboardon(){
    this.authStatusListner.next(true);
}

getFilterids(){
    this.fildata=localStorage.getItem("cs")
    return this.fildata;
}

getnextpracticeques(id){
    return this.http.get(`apiPractice/practice/${id}`);
}

getAResult(){
    return this.http.get('apiTest/getATests');
}
getCResult(){
  
    return this.http.get('apiTest/getCTests');
}

getProgress(){    
  return  this.http.get('api/student/monthly');   
}

getDailyprogress(){
     return this.http.get('api/student/daily')
}
getweeklyProgress(){
    // console.log('came');
 
    return this.http.get('api/student/weekly')
    
}

overallupdate(score){
   
    const update={score:score}
    return this.http.put('apiScoreUpdate/overallScoreUpdate/',update);
}

Testname(){
    if(this.testname==null){
        return this.testname=localStorage.getItem('name');
    }
    return this.testname;

}

handle(){

    this.snackBar.open('Login Successful','close',{
        duration:2000,
    })
    
 } 
       

   

handle1(){
    this.snackBar.open('Register Successfull Verify your mail sent your registered e-mail id','close',{
        duration:3500,
    })
    // this.notifier.notify('default','Register Successfull Verify your mail sent your registered e-mail id');


}
updateProfile(firstName:string,lastName:string){
    const updateProfile:updateProfile={firstName:firstName,lastName:lastName}
    console.log(updateProfile);
    return this.http.put('apiStudentDashboard/profile/',updateProfile);
}

getIsSolved(){
    return this.http.get('apiPractice/practiceId/');
}
verify(token){
   console.log(token);
    const tokens={token:token};
    this.http.put('apiRegister/confirmation',tokens).subscribe(res=>{
        console.log(res);
    });err=>{
        console.log(err);
    }
    }


    email(mailId){
        console.log('here')
        const mail={mailId:mailId}
        console.log(mail);
       return this.http.post('apiRegister/forgotPassword',mail)
    }

    updatePassword(token,newPassword){
        const updatepassword={token:token,newPassword:newPassword}
        console.log(updatepassword);
        return this.http.put('apiRegister/resetPassword',updatepassword);
    }

getUserToken(){
    // console.log('çame hree')
   return localStorage.getItem("token");
  
}


enableResult(){
     console.log('came')
     this.updatedResult.next(true);
     console.log(this.updatedResult)
}

updated(){
    // this.updatedResult.next(false)
    console.log(this.updatedResult.asObservable())
    return this.updatedResult.asObservable();
}

disableResult(){
    this.updatedResult.next(false)
}


giveCTestId(testId){
    return this.http.post(`api/cTest/start/${testId}`,'hello');

}
giveATestId(testId){
    return this.http.post(`api/aTest/start/${testId}`,'hello');
}



}


