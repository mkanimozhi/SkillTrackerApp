import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Profile } from 'src/app/shared/profile.model';
import { ProfileService } from 'src/app/shared/profile.service';
import { MustMatch } from 'src/app/_helpers/starts-validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  profile: Profile = new Profile();
  isAdded = false;
  constructor(private profileService: ProfileService){}
  userTypes = ['Silver', 'Gold', 'Platinum'];  
  currentDate = new Date();
  userForm: FormGroup;          
  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      associateId: new FormControl('', [Validators.required, Validators.minLength(3)]),     
      //userType: new FormControl(),
      //startDate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'))
    // }, {
    //   validator: MustMatch('name','associateId')
  });
  }

  onSubmit(){

    this.profile.name = this.userForm.value.name;
    this.profile.associateId = this.userForm.value.associateId;
    //console.log(this.profile.associateId);
    //this.profile.userType = this.userForm.value.userType; 
    //this.profile.startDate = this.userForm.value.startDate;
    this.save();
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