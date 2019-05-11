import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDomainComponent } from './section-domain.component';

describe('SectionDomainComponent', () => {
  let component: SectionDomainComponent;
  let fixture: ComponentFixture<SectionDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
