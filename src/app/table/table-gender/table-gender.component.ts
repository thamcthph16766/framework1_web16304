import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-gender',
  templateUrl: './table-gender.component.html',
  styleUrls: ['./table-gender.component.css']
})
export class TableGenderComponent implements OnInit {
@Input() gender: any
  constructor() { }

  ngOnInit(): void {
  }

}
