import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramComponent } from './anagram.component';

describe('AnagramComponent', () => {
  let component: AnagramComponent;
  let fixture: ComponentFixture<AnagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnagramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
