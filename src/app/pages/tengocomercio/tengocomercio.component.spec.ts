import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TengocomercioComponent } from './tengocomercio.component';

describe('TengocomercioComponent', () => {
  let component: TengocomercioComponent;
  let fixture: ComponentFixture<TengocomercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TengocomercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TengocomercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
