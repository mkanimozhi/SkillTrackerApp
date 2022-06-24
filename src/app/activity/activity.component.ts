import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  isAdd = true;
  activityForm: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.activityForm = new FormGroup({
      activityOption: new FormControl('', [Validators.required])
    });
  }

  changeActivity(e) {
    if (e.target.value == 'Edit') {
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }
  }

}