import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemAddEditComponent } from './menu-item-add-edit.component';

describe('MenuItemAddEditComponent', () => {
  let component: MenuItemAddEditComponent;
  let fixture: ComponentFixture<MenuItemAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
