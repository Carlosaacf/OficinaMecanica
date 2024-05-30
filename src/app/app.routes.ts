import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './pages/home/home.component';
import { GridPecasComponent } from './pages/grid-pecas/grid-pecas.component';
import { Component } from '@angular/core';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'pecas',
    component: GridPecasComponent,
  },

  {
    path: 'cadastro',
    component: CadastroUsuarioComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
];
