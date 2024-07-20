
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { of, throwError } from 'rxjs';
import { FakeService } from '../services/fake.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  
  it('should getServiceData set errorMessage', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, 
      statusText: 'Not Found'
    })
    jest.spyOn(fakeServiceMock, 'getDatav1').mockReturnValue(throwError(() => errorResponse));
    // firstly it was being triggered by ngOnInit in data component
    // let's trigger it directly
    component.getServiceData();
    expect(component.errorMessage).toBe('Not Found')
  });
});
