import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { Student, StudentService } from "../../services/student.service";
import { StudentModelPage } from "../student-model/student-model.page";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"],
})
export class FeedPage implements OnInit {
  students: Student[];
  constructor(
    private service: StudentService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe((response) => {
      this.students = response;
    });
  }

  addStudent() {
    // open modal
    this.modalCtrl
      .create({
        component: StudentModelPage,
      })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(({ data, role }) => {
        if (role === "created") {
          this.students.push(data);
        }
      });
  }

  removeStudent(id: string) {
    this.alertCtrl
      .create({
        header: "Delete",
        message: "Are you sure you want to delete ? ",
        buttons: [
          {
            text: "Yes",
            handler: () => {
              this.service.remove(id).subscribe(() => {
                this.students = this.students.filter((std) => std.id !== id);
              });
            },
          },
          { text: "No", role: "cancel" },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  updatedStudent(student: Student) {
    this.modalCtrl
      .create({
        component: StudentModelPage,
        componentProps: { student: student },
      })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(({ data, role }) => {
        if (role === "updated") {
          this.students.filter((std) => {
            if (data.id === std.id) {
              return data;
            }
            return std;
          });
        }
      });
  }
}
