import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDeleteComponent } from './casa-delete.component';

describe('CasaDeleteComponent', () => {
  let component: CasaDeleteComponent;
  let fixture: ComponentFixture<CasaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
