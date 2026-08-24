import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesHome } from './modules-home';

describe('ModulesHome', () => {
  let component: ModulesHome;
  let fixture: ComponentFixture<ModulesHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
