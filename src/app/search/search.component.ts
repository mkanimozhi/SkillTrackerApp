import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../shared/profile.model';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  dataList: Array<any> = [];
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
  this.dataList = [
    { code: 1, name: "shohel" },
    { code: 2, name: "rana" },
    { code: 3, name: "shipon" }
  ]
  }

  onSubmit(){

    this.profile.name = this.userForm.value.name;
    this.profile.associateId = this.userForm.value.associateId;
    this.profile.mobile = this.userForm.value.mobile;
    this.profile.email = this.userForm.value.email;
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

  onChange(deviceValue) {
 
  }
}
