import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaUpdateComponent } from './casa-update.component';

describe('CasaUpdateComponent', () => {
  let component: CasaUpdateComponent;
  let fixture: ComponentFixture<CasaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
