export class Profile {
    name: string;
    associateId: string;
    mobile: string;
    email : string;
    technicalSkills: TechnicalSkills;
    nonTechnicalSkills: NonTechnicalSkills;
    technicalSkill: TechnicalSkill;
    nonTechnicalSkill: NonTechnicalSkill;
    constructor(name: string,associateId: string,mobile: string,email : string,
        technicalSkills: TechnicalSkills, nonTechnicalSkills: NonTechnicalSkills,
        technicalSkill: TechnicalSkill, nonTechnicalSkill: NonTechnicalSkill) {
            this.name = name;
            this.associateId = associateId;
            this.mobile = mobile;
            this.email = email;
            this.technicalSkills = technicalSkills;
            this.nonTechnicalSkills = nonTechnicalSkills;
            this.technicalSkill = technicalSkill;
            this.nonTechnicalSkill = nonTechnicalSkill;
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
export class TechnicalSkill {
    skillName: string;
    expertiseLevel: number;
}
export class NonTechnicalSkill {
    skillName: string;
    expertiseLevel: number;
}