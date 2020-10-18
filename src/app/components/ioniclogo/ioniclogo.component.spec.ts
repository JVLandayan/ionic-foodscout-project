import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IoniclogoComponent } from './ioniclogo.component';

describe('IoniclogoComponent', () => {
  let component: IoniclogoComponent;
  let fixture: ComponentFixture<IoniclogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoniclogoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IoniclogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
