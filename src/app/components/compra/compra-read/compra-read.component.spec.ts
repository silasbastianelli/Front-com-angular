import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraReadComponent } from './compra-read.component';

describe('CompraReadComponent', () => {
  let component: CompraReadComponent;
  let fixture: ComponentFixture<CompraReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
