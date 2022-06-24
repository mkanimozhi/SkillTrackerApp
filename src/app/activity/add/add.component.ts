import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Profile, TechnicalSkills, NonTechnicalSkills } from 'src/app/shared/profile.model';
import { ProfileService } from 'src/app/shared/profile.service';
import { MustMatch } from 'src/app/_helpers/starts-validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  technicalSkills: TechnicalSkills = new TechnicalSkills();
  nonTechnicalSkills: NonTechnicalSkills = new NonTechnicalSkills();
  profile: Profile = new Profile(null, null, null, null, this.technicalSkills, this.nonTechnicalSkills, null, null);
  
  isAdded = false;
  showMsg = false;
  constructor(private profileService: ProfileService){}
  userTypes = ['Silver', 'Gold', 'Platinum'];  
  currentDate = new Date();
  userForm: FormGroup;          
  ngOnInit() {
    this.userForm = new FormGroup({
      uname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      associateId: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),     
      email: new FormControl('', [Validators.required]),
      html_Css_Javascript: new FormControl('', [Validators.required]),
      angular: new FormControl('', [Validators.required]),
      react: new FormControl('', [Validators.required]),
      spring: new FormControl('', [Validators.required]),
      restful: new FormControl('', [Validators.required]),
      hibernate: new FormControl('', [Validators.required]),
      git: new FormControl('', [Validators.required]),
      docker: new FormControl('', [Validators.required]),
      jenkins: new FormControl('', [Validators.required]),
      aws: new FormControl('', [Validators.required]),
      spoken: new FormControl('', [Validators.required]),
      communication: new FormControl('', [Validators.required]),
      aptitude: new FormControl('', [Validators.required]),
      //userType: new FormControl(),
      //startDate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'))
    // }, {
    //   validator: MustMatch('name','associateId')
  });
  }

  onSubmit(){

    this.profile.name = this.userForm.value.uname;
    this.profile.associateId = this.userForm.value.associateId;
    this.profile.mobile = this.userForm.value.mobile;
    this.profile.email = this.userForm.value.email;
    this.technicalSkills.html_Css_Javascript = this.userForm.value.html_Css_Javascript;
    this.technicalSkills.angular = this.userForm.value.angular;
    this.technicalSkills.react = this.userForm.value.react;
    this.technicalSkills.spring = this.userForm.value.spring;
    this.technicalSkills.restful = this.userForm.value.restful;
    this.technicalSkills.hibernate = this.userForm.value.hibernate;
    this.technicalSkills.git = this.userForm.value.git;
    this.technicalSkills.docker = this.userForm.value.docker;
    this.technicalSkills.jenkins = this.userForm.value.jenkins;
    this.technicalSkills.aws = this.userForm.value.aws;
    this.nonTechnicalSkills.spoken = this.userForm.value.spoken;
    this.nonTechnicalSkills.communication = this.userForm.value.communication;
    this.nonTechnicalSkills.aptitude = this.userForm.value.aptitude;
    //console.log(this.profile.associateId);
    //this.profile.userType = this.userForm.value.userType; 
    //this.profile.startDate = this.userForm.value.startDate;
    this.save();
    this.userForm.reset();
    this.showMsg = true;
  }

  save(){
    console.log(this.profile);
    this.profileService.addProfile(this.profile).subscribe({
    })
    
                   // .subscribe(user=> {console.log(user);
                     // this.isAdded = true;
                    //}, error=>console.log(error))
  }
  resetUserForm(){
    this.isAdded = false;
    this.userForm.reset();
  }

}