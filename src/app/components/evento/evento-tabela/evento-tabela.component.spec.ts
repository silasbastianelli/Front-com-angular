import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoTabelaComponent } from './evento-tabela.component';

describe('EventoTabelaComponent', () => {
  let component: EventoTabelaComponent;
  let fixture: ComponentFixture<EventoTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
