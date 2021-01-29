import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {StatusService} from '../../../services/status.service';

@Component({
  selector: 'app-view-individual-record-dialog',
  templateUrl: './view-individual-record-dialog.component.html',
  styleUrls: ['./view-individual-record-dialog.component.scss']
})
export class ViewIndividualRecordDialogComponent implements OnInit {
  recordForm: FormGroup;
  isEdit=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data,private formBuilder: FormBuilder,private statusService: StatusService) { } 

  ngOnInit(): void {
    console.log(this.data);
    this.recordForm=this.formBuilder.group({
      firstName:[this.data.firstName, [Validators.required]],
      middleName:[this.data.middleName, [Validators.required]],
      lastName:[this.data.lastName, [Validators.required]],
      email:[this.data.email, [Validators.required]],
      contactNumber:[this.data.contactNumber, [Validators.required]],
      address:[this.data.address, [Validators.required]],

      birthdate:[this.data.birthdate, [Validators.required]],
      gender:[this.data.gender, [Validators.required]]
    })
    this.recordForm.disable();
  }
  //Code here Swarti
  activateRecord(){
    let body = {'status': 1};
    this.statusService.updateStatus(body, this.data.patientId).subscribe(p=>{
      console.log("asdasd")
    });
  }
  
  //Code here Swarti
  deactivateRecord(){
    let body = {'status': 0};
    this.statusService.updateStatus(body, this.data.patientId).subscribe(p=>{
      console.log("asdasd")
    });

  }
  //Code here Kevin
  editRecord(){
    this.isEdit=true;
    this.recordForm.enable();
  }
  //Code here Albert
  submitRecord(){

  }
  closeEdit(){
    this.isEdit=false;
    this.recordForm.disable();

  }
}
