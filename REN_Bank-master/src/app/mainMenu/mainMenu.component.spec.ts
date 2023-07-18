import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './mainMenu.component';

describe('FooterBankComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuComponent]
    });
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});