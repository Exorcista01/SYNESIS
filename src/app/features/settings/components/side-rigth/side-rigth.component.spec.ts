import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRigthComponent } from './side-rigth.component';

describe('SideRigthComponent', () => {
  let component: SideRigthComponent;
  let fixture: ComponentFixture<SideRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideRigthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
