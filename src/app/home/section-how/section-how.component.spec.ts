import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHowComponent } from './section-how.component';

describe('SectionHowComponent', () => {
  let component: SectionHowComponent;
  let fixture: ComponentFixture<SectionHowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
