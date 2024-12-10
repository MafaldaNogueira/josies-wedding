import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDayComponent } from './wedding-day.component';

describe('WeddingDayComponent', () => {
  let component: WeddingDayComponent;
  let fixture: ComponentFixture<WeddingDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
