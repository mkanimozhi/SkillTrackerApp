import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NonTechnicalSkills, Profile, TechnicalSkill, TechnicalSkills } from 'src/app/shared/profile.model';
import { ProfileService } from 'src/app/shared/profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  profiles: any;
  id: any;

  isAdded = false;
  showMsg = false;
  technicalSkill: any=[];
  nonTechnicalSkill: any=[];
  technicalSkills: TechnicalSkills = new TechnicalSkills();
  nonTechnicalSkills: NonTechnicalSkills = new NonTechnicalSkills();
  profile: Profile = new Profile(null, null, null, null, this.technicalSkills, this.nonTechnicalSkills, null, null);  
  
  public editForm:FormGroup;
  //constructor(private profileService: ProfileService) { }
  constructor(private profileService: ProfileService, private route: ActivatedRoute, 
    private formBuilder: FormBuilder){
    this.editForm = this.formBuilder.group({
      uname: this.profile.name,
      associateId: this.profile.associateId,
      mobile: this.profile.mobile,
      email: this.profile.email
      //html_Css_Javascript: this.profile.technicalSkills[0].html_Css_Javascript
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
      // email: this.profile.email,
     
      
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
        //this.language=params['language'];
      }
    )


    this.profileService.getProfileDetail(this.id).subscribe((data) => {
      console.log(data);
      this.profiles = data;
      console.log(this.profiles);
      this.technicalSkill = this.profiles.technicalSkill;
      this.nonTechnicalSkill = this.profiles.nonTechnicalSkill;
      console.log(this.profile.name);
      console.log(this.profile.technicalSkills);
      //console.log(this.profile.technicalSkill[0].react);
    });    
  }

  onSubmit(){

    this.profile.name = this.editForm.value.uname;
    this.profile.associateId = this.editForm.value.associateId;
    this.profile.mobile = this.editForm.value.mobile;
    this.profile.email = this.editForm.value.email;
    this.technicalSkills.html_Css_Javascript = this.editForm.value.html_Css_Javascript;
    this.technicalSkills.angular = this.editForm.value.angular;
    this.technicalSkills.react = this.editForm.value.react;
    this.technicalSkills.spring = this.editForm.value.spring;
    this.technicalSkills.restful = this.editForm.value.restful;
    this.technicalSkills.hibernate = this.editForm.value.hibernate;
    this.technicalSkills.git = this.editForm.value.git;
    this.technicalSkills.docker = this.editForm.value.docker;
    this.technicalSkills.jenkins = this.editForm.value.jenkins;
    this.technicalSkills.aws = this.editForm.value.aws;
    this.nonTechnicalSkills.spoken = this.editForm.value.spoken;
    this.nonTechnicalSkills.communication = this.editForm.value.communication;
    this.nonTechnicalSkills.aptitude = this.editForm.value.aptitude;
    //console.log(this.profile.associateId);
    //this.profile.userType = this.userForm.value.userType; 
    //this.profile.startDate = this.userForm.value.startDate;
    this.save();
    this.editForm.reset();
    this.showMsg = true;
  }

  save(){
    console.log(this.profile);
    console.log(this.profile.technicalSkill);
    this.profileService.addProfile(this.profile).subscribe({
    })
    
                   // .subscribe(user=> {console.log(user);
                     // this.isAdded = true;
                    //}, error=>console.log(error))
  }
  resetUserForm(){
    this.isAdded = false;
    this.editForm.reset();
  }  

}
