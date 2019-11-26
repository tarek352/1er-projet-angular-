import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsUserComponent } from './page-details-user.component';

describe('PageDetailsUserComponent', () => {
  let component: PageDetailsUserComponent;
  let fixture: ComponentFixture<PageDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
