import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  profiles: any;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getProfiles().subscribe((data) => {
      //console.log(data);
      this.profiles = data;
    });
  }

}
