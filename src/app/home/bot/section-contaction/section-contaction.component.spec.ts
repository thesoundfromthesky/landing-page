import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContactionComponent } from './section-contaction.component';

describe('SectionContactionComponent', () => {
  let component: SectionContactionComponent;
  let fixture: ComponentFixture<SectionContactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionContactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
