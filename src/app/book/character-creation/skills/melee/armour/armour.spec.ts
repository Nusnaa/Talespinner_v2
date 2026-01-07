import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Armour } from './armour';

describe('Armour', () => {
  let component: Armour;
  let fixture: ComponentFixture<Armour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Armour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Armour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
