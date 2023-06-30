import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() backgroundColor: string = '';
  @Input() buttonText: string = 'button';
  @Input() borderRadius: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
