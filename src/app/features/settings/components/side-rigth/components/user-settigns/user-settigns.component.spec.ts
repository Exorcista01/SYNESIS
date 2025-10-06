import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettignsComponent } from './user-settigns.component';

describe('UserSettignsComponent', () => {
  let component: UserSettignsComponent;
  let fixture: ComponentFixture<UserSettignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSettignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
