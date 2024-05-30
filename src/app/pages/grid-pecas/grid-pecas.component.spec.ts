import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPecasComponent } from './grid-pecas.component';

describe('GridPecasComponent', () => {
  let component: GridPecasComponent;
  let fixture: ComponentFixture<GridPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridPecasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
