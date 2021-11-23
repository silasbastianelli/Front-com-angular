import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaReadComponent } from './casa-read.component';

describe('CasaReadComponent', () => {
  let component: CasaReadComponent;
  let fixture: ComponentFixture<CasaReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
