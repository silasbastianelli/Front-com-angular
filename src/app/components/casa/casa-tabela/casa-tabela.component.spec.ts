import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaTabelaComponent } from './casa-tabela.component';

describe('CasaTabelaComponent', () => {
  let component: CasaTabelaComponent;
  let fixture: ComponentFixture<CasaTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
