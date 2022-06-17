import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/shared/profile.model';
import { ProfileService } from 'src/app/shared/profile.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  isValidFormSubmitted: boolean = null;
	userForm = new FormGroup({
	   //id: new FormControl('', Validators.required),
	   uname: new FormControl('', Validators.required),
	   associateId: new FormControl(false),
     mobile: new FormControl('', Validators.requiredTrue),
     email: new FormControl('', Validators.requiredTrue)
	});
  //profile = new Profile(id, string, associateId: string, mobile: string, email: string);
  profile = new Profile();
  constructor(private profileService: ProfileService) {
	}

//  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    console.log("onFormSubmit called");
    this.isValidFormSubmitted = false;
    if(this.userForm.invalid){
   return;	
    } 	
    this.isValidFormSubmitted = true;	
    console.log(this.userForm.valid);
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
     this.profile.name = this.userForm.get('name').value;
    // this.user.associateId = this.userForm.get('associateId').value;
    // this.user.isMarried = this.userForm.get('married').value;
    // this.user.isTCAccepted = this.userForm.get('tc').value;
    // this.userService.createUser(this.user);	 
    this.reset();
 }
 reset() {
    this.userForm.reset({
       //married: false
    });	   
 }	
 setDefaultValues() {
    //this.userForm.patchValue({uname: 'Krishna', gender:'male', married:true});
 }
}
