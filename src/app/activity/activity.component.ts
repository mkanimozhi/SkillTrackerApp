import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../shared/profile.model';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  private selectedLink: string = "Male";
  public isCollapsed = false;

  setradio(isCollapsed: boolean): void {
    this.isCollapsed = isCollapsed;
    //this.selectedLink = activityName;
//    if(this.selectedLink == "Add") {
    //  this.isCollapsed = true;
  //  } else {
//      this.isCollapsed = false;
    //}
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      console.log("this.selectedLink ="+this.selectedLink);
      return false;
    }
    console.log("this.selectedLink2222 ="+this.selectedLink);
    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
