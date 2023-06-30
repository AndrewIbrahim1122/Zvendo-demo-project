import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private selectedElementSubject = new Subject<any>();
  selectedElement$ = this.selectedElementSubject.asObservable();

  setSelectedElement(element: any) {
    this.selectedElementSubject.next(element);
  }
}