import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraTabelaComponent } from './compra-tabela.component';

describe('CompraTabelaComponent', () => {
  let component: CompraTabelaComponent;
  let fixture: ComponentFixture<CompraTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
