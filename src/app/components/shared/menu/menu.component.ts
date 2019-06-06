import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/data.service';
import { Observable } from 'rxjs';
import { AppMenuOptions } from '../../../core/data.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  appTitle: string = 'Sibyl Finder'
  appMenuOptions: Observable<AppMenuOptions[]>

  constructor(private ds: DataService) { }

  ngOnInit() { this.appMenuOptions = this.ds.getMenuOptions(); }

}
