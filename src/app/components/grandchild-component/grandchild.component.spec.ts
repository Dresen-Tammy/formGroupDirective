import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildComponent } from './grandchild.component';

describe('GrandchildComponentComponent', () => {
  let component: GrandchildComponent;
  let fixture: ComponentFixture<GrandchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandchildComponent]
    });
    fixture = TestBed.createComponent(GrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});