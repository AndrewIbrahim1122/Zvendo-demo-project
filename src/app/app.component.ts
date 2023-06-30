import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vzendo';
  elementSetting : any
  // backgroundColor : string = ''
  // backgroundColorInput : string = ''
  // buttontext : string = 'Button'
  // borderRadius : string = ''
  // borderRadiusInput : string = ''
  selectedElement: any;

  onElementsettingChange(element : any){
    this.elementSetting = element
    console.log(this.elementSetting);
    
  }
}
