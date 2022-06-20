export class Profile {
    name: string;
    associateId: string;
    mobile: string;
    email : string;
    technicalSkills: TechnicalSkills;
    nonTechnicalSkills: NonTechnicalSkills;
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