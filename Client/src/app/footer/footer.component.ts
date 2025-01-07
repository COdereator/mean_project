import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  userForm: FormGroup = new FormGroup({
      name: new FormControl("",[Validators.required]),
      surname: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.email]),
      phone: new FormControl("",[Validators.required]),
      message: new FormControl()
  })

  constructor(private _http:HttpClient,private toastr: ToastrService){
  }

  required(){ 
    this.toastr.error('Please fill all the fields', 'Error');
  }

  onUserSave(){
    if(this.userForm.invalid){
      this.toastr.error('Please fill all the fields', 'Error',{ closeButton : true,timeOut : 1000 });
    }
    else{
      this._http.post("http://localhost:5000/add",this.userForm.value).subscribe((res:any)=>{  
        if(res.result){
          this.toastr.success("Data Added","Success",{ closeButton : true,timeOut : 500 })
          this.userForm.reset();
        }
        else{
          alert("Error : ")
          this.toastr.error("Error : ")
          console.log(res.err);
        }
      })
    }
  }

}
