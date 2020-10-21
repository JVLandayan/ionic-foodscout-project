import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostsdetailPage } from './postsdetail.page';

describe('PostsdetailPage', () => {
  let component: PostsdetailPage;
  let fixture: ComponentFixture<PostsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
