import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  profile: Profile =new Profile(null, null, null, null, null, null, null, null);
  searchId = "";
  searchVal = "";

  profiles: any;
  id = "";
  
  isAdded = false;

  constructor(private profileService: ProfileService, private route: ActivatedRoute){}
  userTypes = ['Silver', 'Gold', 'Platinum'];  
  currentDate = new Date();
  searchForm: FormGroup;          
  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
        //this.language=params['language'];
      }
    )

    this.searchForm = new FormGroup({
      searchVal: new FormControl('', [Validators.required]),

      //userType: new FormControl(),
      //startDate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'))
    // }, {
    //   validator: MustMatch('name','associateId')

    searchId: new FormControl('', Validators.required),

    
    //id: this.route.snapshot.paramMap.get('id')
    

  });
  this.dataList = [ 'AssociateId', 'Name', 'Skill' ]
  //   { code: 1, name: "AssociateId" },
  //   { code: 2, name: "Name" },
  //   { code: 3, name: "Skill" }
  // ]
  }

  onSubmit(){
    console.log(this.id);
    this.searchVal = this.searchForm.value.searchVal;
    this.searchId = this.searchForm.value.searchId;
    //console.log(this.searchForm.value.search);
    console.log(this.searchVal);
    console.log(this.searchId);
    if (this.searchId === "AssociateId") { 
      this.profile.associateId = this.searchForm.value.searchVal;
    } else if (this.searchId === "Name") { 
      this.profile.name = this.searchForm.value.searchVal;
    } else if (this.searchId === "Skill") { 
      //this.profile.technicalSkills = this.searchForm.value.searchVal;
    }

    //this.profile.name = this.searchForm.value.searchVal;

    this.save();
  }

  save(){
    console.log(this.profile);

    this.profileService.findProfile(this.profile).subscribe((data) =>{
      console.log(data);
      this.profiles = data.responseBody.profileList;
      });
    // this.profileService.addProfile(this.profile).subscribe({
    // })
    
                   // .subscribe(user=> {console.log(user);
                     // this.isAdded = true;
                    //}, error=>console.log(error))
  }

  changeSearchId(e) {
    console.log(e.target.value);
    //this.searchForm.value.searchVal = '';
    //this.searchForm.setValue({searchVal : ''});
    //this.searchForm.searchVal.reset();
    this.searchForm.controls['searchVal'].setValue('');
  }
}
