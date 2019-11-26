import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsPostsComponent } from './page-details-posts.component';

describe('PageDetailsPostsComponent', () => {
  let component: PageDetailsPostsComponent;
  let fixture: ComponentFixture<PageDetailsPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailsPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
