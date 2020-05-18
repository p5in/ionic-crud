import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentModelPage } from './student-model.page';

describe('StudentModelPage', () => {
  let component: StudentModelPage;
  let fixture: ComponentFixture<StudentModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
