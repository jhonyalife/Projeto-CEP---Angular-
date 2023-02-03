import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mensagemErro = '';
  form: any = new FormGroup({
    usuario: new FormControl('', Validators.required),  
    senha: new FormControl('',  Validators.required),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  onLogin(): void {
    this.mensagemErro = '';
    console.log(this.form);
    if (
      this.loginService.login(this.form.value.usuario, this.form.value.senha)
    ) {
      this.router.navigate(['/home']);
    } else {
      this.mensagemErro = 'Login ou senha inválidos.';
    }
  }

  ngOnInit(): void {}
}
