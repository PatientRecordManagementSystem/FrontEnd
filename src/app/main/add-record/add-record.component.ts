import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})

export class AddRecordComponent implements OnInit {
  patient: Patient = {
    lastName: '',
    firstName: '',
    middleName: '',
    address: '',
    email: '',
    contactNumber: '',
    birthdate: new Date(),
    gender: '',
    status: 1,
  };
  submitted = false;
  constructor(private PatientService:PatientService) { }

  ngOnInit(): void {
  }
  savePatient(): void{
    const data = {
      lastName: this.patient.lastName,
      firstName: this.patient.firstName,
      middleName: this.patient.middleName,
      address: this.patient.address,
      email: this.patient.email,
      contactNumber: this.patient.contactNumber,
      birthdate: this.patient.birthdate,
      gender: this.patient.gender,
      status: 1,
    }
    
    this.PatientService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  setLastname(val){
    this.patient.lastName = val;
  }
  setFirstname(val){
    this.patient.firstName = val;
  }
  setMiddlename(val){
    this.patient.middleName = val;
  }
  setAddress(val){
    this.patient.address = val;
  }
  setEmail(val){
    this.patient.email = val;
  }
  setBirthdate(val){
    this.patient.birthdate = val;
  }
  setGender(val){
    this.patient.gender = val;
  }
  setNumber(val){
    this.patient.contactNumber = val;
  }
  newPatient(): void{
    this.submitted = false;
    this.patient = {
    lastName: '',
    firstName: '',
    middleName: '',
    address: '',
    email: '',
    contactNumber: '',
    birthdate: new Date,
    gender: '',
    status: 1,
    };
  }
}
