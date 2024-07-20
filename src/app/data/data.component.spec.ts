
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { of } from 'rxjs';
import { FakeService } from '../services/fake.service';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {
    fakeServiceMock = {
      getDatav1: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [{ provide: FakeService, useValue: fakeServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData', () => {
    const expectedRes = {
      name: 'Vijai Selvam',
    };
    jest.spyOn(fakeServiceMock, 'getDatav1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.serviceData.name).toBe(expectedRes.name);
  });
});
