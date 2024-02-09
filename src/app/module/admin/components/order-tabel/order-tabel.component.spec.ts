import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTabelComponent } from './order-tabel.component';

describe('OrderTabelComponent', () => {
  let component: OrderTabelComponent;
  let fixture: ComponentFixture<OrderTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
