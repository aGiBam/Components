import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionsHome } from './collections-home';

describe('CollectionsHome', () => {
  let component: CollectionsHome;
  let fixture: ComponentFixture<CollectionsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsHome],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
