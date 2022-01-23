import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  isLoggIn:boolean = false;
  loginForm!: FormGroup;
  login!:FormControl;
  password!:FormControl;
  submitted = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
  });
  // this.isLoggIn=true
  }

  onSubmit() {
    if(this.isLoggIn)
    {
      this.messageService.add({severity: 'success', summary:'Success', detail:'Successfully logged in'})
      console.log('Success!!!')
    }else
    {
      console.log('Failed!!!')
      this.messageService.add({severity: 'error', summary:'Failed', detail:'Log in failed'})
    }
}

}
