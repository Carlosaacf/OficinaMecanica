import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Usuario } from '../../interfaces/usuario.interface';
import { GridCadastroUsuarioComponent } from '../grid.-cadastro-usuario/grid.-cadastro-usuario.component';
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
    InputGroupModule,
    InputGroupAddonModule,
    GridCadastroUsuarioComponent,
  ],
  providers: [MessageService, BrowserModule, BrowserAnimationsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  userName!: string;
  passWord!: string;
  email!: string;
  cpf!: string;
  telefone!: string;
  titulo: string = 'Cadastro de Usuário';

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    console.log('Iniciando o componente de cadastro de usuário');
  }

  cadastrarUsuario() {
    this.usuarios.push({
      userName: this.userName,
      passWord: this.passWord,
      email: this.email,
      cpf: this.cpf,
      telefone: this.telefone,
    });

    this.userName = '';
    this.passWord = '';
    this.email = '';
    this.cpf = '';
    this.telefone = '';
    this.messageService.add({
      severity: 'success',
      summary: 'Cadastro de Usuário',
      detail: 'Usuário cadastrado com sucesso!',
    });
  }

  voltarGridUsuarios() {
    this.router.navigate(['/usuarios']);

  }
}
