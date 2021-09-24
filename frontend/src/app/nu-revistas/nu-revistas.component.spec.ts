import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuRevistasComponent } from './nu-revistas.component';

describe('NuRevistasComponent', () => {
  let component: NuRevistasComponent;
  let fixture: ComponentFixture<NuRevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuRevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuRevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
