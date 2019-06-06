import { Component, OnInit } from '@angular/core';
import { Patient } from '../../core/data.interface';
import { DataService } from '../../core/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.page.html',
  styleUrls: ['./finder.page.scss'],
})
export class FinderPage implements OnInit {

  code: string
  patient: Patient
  flag: number

  finderTitle: string

  constructor(private ds: DataService) {
    this.finderTitle = `Patient Finder`
  }

  ngOnInit() {
    this.flag = -1
  }

  onReadPatient(form: NgForm): void {
    this.code = form.value.code
    this.ds.getPatientByPersonalCode(this.code).subscribe(patients => {
      this.patient = patients[0]
      this.flag = (this.patient === undefined) ? 0 : 1
    })
  }
}
