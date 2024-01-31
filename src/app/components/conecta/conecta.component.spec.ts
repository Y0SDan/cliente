import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectaComponent } from './conecta.component';

describe('ConectaComponent', () => {
  let component: ConectaComponent;
  let fixture: ComponentFixture<ConectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
