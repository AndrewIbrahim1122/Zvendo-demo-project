import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input-text',
  templateUrl: './custom-input-text.component.html',
  styleUrls: ['./custom-input-text.component.scss']
})
export class CustomInputTextComponent implements OnInit {
  @Input() backgroundColor: string = '';
  @Input() borderRadius: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
