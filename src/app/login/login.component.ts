import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
      
  }

  loginModel = new User();

  mensagem = ""

  usuarioLogado = ""

  onSubmit() {
    console.log(this.loginModel)

    /*this.loginService.login(this.loginModel).subscribe((response)=>{
      //console.log("Sucesso!")
      this.router.navigateByUrl('')
    }, (respostaErro)=> {
      this.mensagem = respostaErro.error
    }    
    )*/

    let  erroEncontrado = 0;

    const listaPalavras: string[] = ["select", "from", "drop","or ", "having ", "group", "insert", "exec ", "\"", "\'","--", "#", "*",";"]

    listaPalavras.forEach(palavra => {
      console.log("palavra atual: ", palavra)

      if(this.loginModel.email.toLowerCase().includes(palavra)){
      console.log("Palavra Encontrada: ",palavra)
      this.mensagem = "Dados Inválidos: "+ palavra;

      erroEncontrado = 1;
      }
    })

    if(erroEncontrado == 0){

      this.loginService.login(this.loginModel).subscribe((response)=>{
        this.router.navigateByUrl('')
      },(respostaErro)=>{
        this.mensagem = respostaErro.error
      })
    }
  } 
}
