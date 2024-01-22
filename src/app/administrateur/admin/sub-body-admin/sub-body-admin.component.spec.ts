import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBodyAdminComponent } from './sub-body-admin.component';

describe('SubBodyAdminComponent', () => {
  let component: SubBodyAdminComponent;
  let fixture: ComponentFixture<SubBodyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBodyAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubBodyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
