import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Times } from './times';

@Component({
  imports: [Times],
  template: '<div *appTimes="3" class="item"></div>',
})
class TestHost {}

describe('Times', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render the template the requested number of times', () => {
    expect(fixture.nativeElement.querySelectorAll('.item')).toHaveLength(3);
  });
});
