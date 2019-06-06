import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Patient, AppMenuOptions } from './data.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private patientsCollection: AngularFirestoreCollection<Patient>
  private patients: Observable<Patient[]>
  private patientDoc: AngularFirestoreDocument<Patient>
  private patient: Observable<Patient>

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    // Fix error: The behavior for Date objects stored in Firestore is going to change AND YOUR APP MAY BREAK
    afs.firestore.settings({ timestampsInSnapshots: true })
    afs.firestore.enablePersistence()

    this.patientsCollection = this.afs.collection<Patient>('patients')
    this.patients = this.patientsCollection.valueChanges()
  }

  public getPatientByCIP(patientCIP: string) {
    this.patientsCollection = this.afs.collection<Patient>('patients', ref => {
      return ref.where('cip', '==', patientCIP)
    })
    return this.patients = this.patientsCollection.valueChanges()
  }

  public getPatientByPersonalCode(patientPersonalCode: string) {
    this.patientsCollection = this.afs.collection<Patient>('patients', ref => {
      return ref.where('personalCode', '==', patientPersonalCode)
    })
    return this.patients = this.patientsCollection.valueChanges()
  }

  public getMenuOptions() {
    return this.http.get<AppMenuOptions[]>('/assets/data/menu.json')
  }
}
