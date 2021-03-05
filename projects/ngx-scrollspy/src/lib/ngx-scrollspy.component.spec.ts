import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollspyComponent } from './ngx-scrollspy.component';

describe('NgxScrollspyComponent', () => {
  let component: NgxScrollspyComponent;
  let fixture: ComponentFixture<NgxScrollspyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxScrollspyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
