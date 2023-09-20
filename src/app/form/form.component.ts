import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name: string;
  address: string;

  constructor(private helper: HelperService) { }

  ngOnInit(): void {
  }

  submitValues() {
   
    this.helper.updateArray( this.name, this.address );
  }

}
