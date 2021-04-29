import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdetailComponent } from './udetail.component';

describe('UdetailComponent', () => {
  let component: UdetailComponent;
  let fixture: ComponentFixture<UdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
