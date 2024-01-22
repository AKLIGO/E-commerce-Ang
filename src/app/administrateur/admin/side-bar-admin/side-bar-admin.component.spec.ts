import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarADMINComponent } from './side-bar-admin.component';

describe('SideBarADMINComponent', () => {
  let component: SideBarADMINComponent;
  let fixture: ComponentFixture<SideBarADMINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarADMINComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarADMINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
