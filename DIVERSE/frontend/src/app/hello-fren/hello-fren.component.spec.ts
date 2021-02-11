import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFrenComponent } from './hello-fren.component';

describe('HelloFrenComponent', () => {
  let component: HelloFrenComponent;
  let fixture: ComponentFixture<HelloFrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloFrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
