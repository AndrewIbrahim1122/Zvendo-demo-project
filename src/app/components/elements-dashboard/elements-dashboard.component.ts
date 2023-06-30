import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarService } from 'src/app/services/Sidebar.service';
import { MainScreenComponent } from '../main-screen/main-screen.component';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-elements-dashboard',
  templateUrl: './elements-dashboard.component.html',
  styleUrls: ['./elements-dashboard.component.scss']
})
export class ElementsDashboardComponent implements OnInit {  
  element = new Subject<any>;
  elementsSetting : Array<any> = []
  elements = [
    {name : 'button' , value : 'button' , setting : false , backgroundColor : '' , text : 'button' , borderRadius: ''} ,
    {name : 'Input Text' , value : 'input-text' , setting : false, backgroundColor : '' , text : '' , borderRadius : ''} ,
  ]
  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  elementSelected(element:any){

    let SavedElements = JSON.parse(localStorage.getItem('elements') as any)
    element.setting = true
    if(SavedElements){
      SavedElements.push(element)
      this.sidebarService.setSelectedElement(SavedElements)
      return;
    }
    this.elementsSetting.push(element)
    this.sidebarService.setSelectedElement(this.elementsSetting) 
  }
  setStyling(element : any){
    let SavedElements = JSON.parse(localStorage.getItem('elements') as any)
    if(SavedElements){
      SavedElements.push(element)      
      this.sidebarService.setSelectedElement(SavedElements)
      return
    }
    this.sidebarService.setSelectedElement([element])


  }

  saveElements(element : any){

    let SavedElements = JSON.parse(localStorage.getItem('elements') as any)
    if(SavedElements){
      SavedElements.push(element)      
      this.sidebarService.setSelectedElement(SavedElements)
      localStorage.setItem('elements' ,JSON.stringify(SavedElements))
      return;
    }
    this.sidebarService.setSelectedElement([element])
    localStorage.setItem('elements' ,JSON.stringify([element]))
    element.backgroundColor = ''
    element.borderRadius = ''
    console.log(this.elementsSetting);
    
  }

}
