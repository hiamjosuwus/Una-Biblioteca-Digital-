import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuHistoryComponent } from './nu-history.component';

describe('NuHistoryComponent', () => {
  let component: NuHistoryComponent;
  let fixture: ComponentFixture<NuHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
