import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogItemComponent } from './log-item.component';

describe('LogItemComponent', () => {
  let component: LogItemComponent;
  let fixture: ComponentFixture<LogItemComponent>;

  const mockData = {
        "title": "Age",
        "type": "number"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show children', () => {
    component.item = mockData;
    expect(component.showChildren).toBeTruthy();
  });
  
});
