import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAnotherComponent } from './section-another.component';

describe('SectionAnotherComponent', () => {
  let component: SectionAnotherComponent;
  let fixture: ComponentFixture<SectionAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
