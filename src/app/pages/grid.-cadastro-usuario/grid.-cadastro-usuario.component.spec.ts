import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCadastroUsuarioComponent } from './grid.-cadastro-usuario.component';

describe('GridCadastroUsuarioComponent', () => {
  let component: GridCadastroUsuarioComponent;
  let fixture: ComponentFixture<GridCadastroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCadastroUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
