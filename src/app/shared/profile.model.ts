export class Profile {
    name: string;
    associateId: string;
    mobile: string;
    email : string;
    technicalSkills: TechnicalSkills;
    nonTechnicalSkills: NonTechnicalSkills;
    constructor(name: string,associateId: string,mobile: string,email : string,
        technicalSkills: TechnicalSkills, nonTechnicalSkills: NonTechnicalSkills ) {
            this.name = name;
            this.associateId = associateId;
            this.mobile = mobile;
            this.email = email;
            this.technicalSkills = technicalSkills;
            this.nonTechnicalSkills = nonTechnicalSkills;
    }
}
export class TechnicalSkills {
    html_Css_Javascript: string;
    angular: string;
    react : string;
    spring : string;
    restful : string;
    hibernate : string;
    git : string;
    docker : string;
    jenkins : string;
    aws : string;
}
export class NonTechnicalSkills {
    spoken: string;
    communication: number;
    aptitude : string;
}