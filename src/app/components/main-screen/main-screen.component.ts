import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/Sidebar.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  selectedElement: any
  @Input() elementSetting : any
  setting : any

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.selectedElement$.subscribe(element => {
      this.selectedElement = element;
      console.log(this.selectedElement);
    });

    this.selectedElement= JSON.parse(localStorage.getItem('elements') as any) 
    console.log(this.selectedElement);

  }
  

}
