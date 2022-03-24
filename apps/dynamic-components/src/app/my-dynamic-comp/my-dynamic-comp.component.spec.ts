import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamicCompComponent } from './my-dynamic-comp.component';

describe('MyDynamicCompComponent', () => {
  let component: MyDynamicCompComponent;
  let fixture: ComponentFixture<MyDynamicCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDynamicCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
