import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ModalConverterComponent } from './modal-converter.component';
import { DateUsPipe } from '../pipes';
import { ConverterService } from '../services';

describe('ModalConverterComponent', () => {
  let component: ModalConverterComponent;
  let fixture: ComponentFixture<ModalConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalConverterComponent,
        DateUsPipe
      ],
      providers: [
        ConverterService
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
