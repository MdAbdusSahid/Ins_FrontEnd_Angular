import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleadsformComponent } from './newleadsform.component';

describe('NewleadsformComponent', () => {
  let component: NewleadsformComponent;
  let fixture: ComponentFixture<NewleadsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleadsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewleadsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
