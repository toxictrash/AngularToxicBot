import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss']
})
export class SettingsContainerComponent implements OnInit {

  firstStart = false;

  constructor() {
    const storage = localStorage.getItem('twitchData');
    if (!storage) {
      this.firstStart = true;
    }
  }

  ngOnInit() {
  }

}
