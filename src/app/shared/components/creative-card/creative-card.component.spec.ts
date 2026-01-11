import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeCardComponent } from './creative-card.component';

describe('CreativeCardComponent', () => {
  let component: CreativeCardComponent;
  let fixture: ComponentFixture<CreativeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
