import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapplicationsComponent } from './newapplications.component';

describe('NewapplicationsComponent', () => {
  let component: NewapplicationsComponent;
  let fixture: ComponentFixture<NewapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
