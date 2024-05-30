import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    InputMaskModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    CommonModule,

  ],
  providers: [MessageService, BrowserModule, BrowserAnimationsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  userName!: string;
  passWord!: string;
  email!: string;
  cpf!: string;
  telefone!: string;
  titulo: string = 'Cadastro de Usuário';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    console.log('Iniciando o componente de cadastro de usuário');
  }

  cadastrarUsuario() {
    alert("HELLOOO")
    this.messageService.add({
      severity: 'success',
      summary: 'Cadastro de Usuário',
      detail: 'Usuário cadastrado com sucesso!',
    });
  }
}
