export interface AuthData{
    firstName:string;
    lastName:string;
    mailId:string;
    password:string;
    collegeId:number;
    
}

export interface Auth{
    mailId:string;
    password:string;
}

export interface Update{
    
    score:string;
    testId:string;
    startTime:string;
    endTime:string;
    
}
export interface Overall{
    score:string;
}

export interface updateProfile{
    firstName:string;
    lastName:string;
    // mailId:string;
    // profilePicture:any
}

