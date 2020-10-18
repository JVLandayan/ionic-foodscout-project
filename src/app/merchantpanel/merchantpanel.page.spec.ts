import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantpanelPage } from './merchantpanel.page';

describe('MerchantpanelPage', () => {
  let component: MerchantpanelPage;
  let fixture: ComponentFixture<MerchantpanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantpanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantpanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
