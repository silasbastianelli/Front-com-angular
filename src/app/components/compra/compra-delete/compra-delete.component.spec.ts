import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDeleteComponent } from './compra-delete.component';

describe('CompraDeleteComponent', () => {
  let component: CompraDeleteComponent;
  let fixture: ComponentFixture<CompraDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
