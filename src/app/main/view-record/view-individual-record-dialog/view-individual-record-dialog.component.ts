import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-individual-record-dialog',
  templateUrl: './view-individual-record-dialog.component.html',
  styleUrls: ['./view-individual-record-dialog.component.scss']
})
export class ViewIndividualRecordDialogComponent implements OnInit {
  recordForm: FormGroup;
  isEdit=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data,private formBuilder: FormBuilder) { } 

  ngOnInit(): void {
    console.log(this.data);
    this.recordForm=this.formBuilder.group({
      firstName:[this.data.firstName, [Validators.required]],
      middleName:[this.data.middleName, [Validators.required]],
      lastName:[this.data.lastName, [Validators.required]],
      email:[this.data.email, [Validators.required]],
      contactNumber:[this.data.contactNumber, [Validators.required]],
      birthdate:[this.data.birthdate, [Validators.required]],
      gender:[this.data.gender, [Validators.required]]
    })
    this.recordForm.disable();
  }
  //Code here Swarti
  activateRecord(){

  }
  //Code here Swarti
  deactivateRecord(){

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
