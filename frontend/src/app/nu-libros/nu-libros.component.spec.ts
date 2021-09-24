import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuLibrosComponent } from './nu-libros.component';

describe('NuLibrosComponent', () => {
  let component: NuLibrosComponent;
  let fixture: ComponentFixture<NuLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
