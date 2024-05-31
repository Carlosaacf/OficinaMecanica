import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from '@angular/router'
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';
import { Usuario } from './../../interfaces/usuario.interface';

@Component({
  selector: 'app-grid.-cadastro-usuario',
  standalone: true,
  imports: [TableModule, ButtonModule, CadastroUsuarioComponent],
  templateUrl: './grid.-cadastro-usuario.component.html',
  styleUrl: './grid.-cadastro-usuario.component.scss',
})
export class GridCadastroUsuarioComponent implements OnInit {

 usuarios: Usuario[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuarios;
  }

  enviaTelaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  atualizarUsuarios(novosUsuarios: Usuario[]): void {
    console.log('AQUI ENTROU', novosUsuarios);
    this.usuarios = novosUsuarios;
  }
}
