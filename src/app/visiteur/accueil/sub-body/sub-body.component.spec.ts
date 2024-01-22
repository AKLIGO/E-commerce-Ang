import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBodyComponent } from './sub-body.component';

describe('SubBodyComponent', () => {
  let component: SubBodyComponent;
  let fixture: ComponentFixture<SubBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
