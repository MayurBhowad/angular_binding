import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirecctionalbindingComponent } from './bidirecctionalbinding.component';

describe('BidirecctionalbindingComponent', () => {
  let component: BidirecctionalbindingComponent;
  let fixture: ComponentFixture<BidirecctionalbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidirecctionalbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidirecctionalbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
