import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

// fix it isnt a know property of mat grid list
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      // fix it isnt a know property of mat grid list
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
