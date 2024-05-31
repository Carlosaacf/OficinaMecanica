import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GridPecasComponent } from './pages/grid-pecas/grid-pecas.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { GridCadastroUsuarioComponent } from './pages/grid.-cadastro-usuario/grid.-cadastro-usuario.component';

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

  {
    path: 'usuarios',
    component: GridCadastroUsuarioComponent,
  },
];
