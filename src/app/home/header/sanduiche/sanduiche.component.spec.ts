import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanduicheComponent } from './sanduiche.component';

describe('SanduicheComponent', () => {
  let component: SanduicheComponent;
  let fixture: ComponentFixture<SanduicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanduicheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanduicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
