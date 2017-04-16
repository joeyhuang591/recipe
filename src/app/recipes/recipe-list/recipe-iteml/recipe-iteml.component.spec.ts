import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemlComponent } from './recipe-iteml.component';

describe('RecipeItemlComponent', () => {
  let component: RecipeItemlComponent;
  let fixture: ComponentFixture<RecipeItemlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
