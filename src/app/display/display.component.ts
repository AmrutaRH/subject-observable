import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  subscription$;
  users;
  constructor(private helper:HelperService) { }

  ngOnInit(): void {
    this.subscription$ = this.helper.observable$.subscribe(
      (userArray: Array<{name, address}>) => (this.users = userArray)
    );
  }
}
