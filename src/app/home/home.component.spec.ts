import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptmeService } from '../service/adoptme.service';
import { of }  from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: jasmine.SpyObj<AdoptmeService>;
  beforeEach(async () => {
    const programMockData = [
      {
        'title': 'test',
        'summary': 'test summary',
        'image': 'img/friend-in-trouble.png',
      }
    ];
    const associateMockData = [
      {
        'title': 'test',
        'summary': 'test summary',
        'image': 'img/friend-in-trouble.png',
      }
    ];
    service = jasmine.createSpyObj('AdoptmeService', ['getProgramsDetails', 'getAssociateDetails']);
    service.getProgramsDetails.and.returnValue(of(programMockData));
    service.getAssociateDetails.and.returnValue(of(associateMockData));

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{
        provide: AdoptmeService,
        useValue: service
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
