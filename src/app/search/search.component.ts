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
      searchVal: new FormControl('', [Validators.required]),

      //userType: new FormControl(),
      //startDate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'))
    // }, {
    //   validator: MustMatch('name','associateId')
  });
  this.dataList = [
    { code: 1, name: "AssociateId" },
    { code: 2, name: "Name" },
    { code: 3, name: "Skill" }
  ]
  }

  onSubmit(){

    this.profile.name = this.userForm.value.searchVal;

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
