import { Component, OnInit, Input } from "@angular/core";
import { Student, StudentService } from "../../services/student.service";
import { ModalController } from "@ionic/angular";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-student-model",
  templateUrl: "./student-model.page.html",
  styleUrls: ["./student-model.page.scss"],
})
export class StudentModelPage implements OnInit {
  @Input() student: Student;
  isUpdate = false;

  // data to be updated
  data = {
    name: "",
    address: "",
    phone: "",
  };

  constructor(
    private modalCtrl: ModalController,
    private service: StudentService
  ) {}

  ngOnInit() {
    if (this.student) {
      this.isUpdate = true;
      this.data = this.student;
    }
  }

  closeModal() {
    this.modalCtrl.dismiss(null, "closed");
  }
  onSubmit(form: NgForm) {
    const student = form.value;
    if (this.isUpdate) {
      this.service.update(student, this.student.id).subscribe(() => {
        student.id = this.student.id; //append id to the updated object
        this.modalCtrl.dismiss(student, "updated");
      });
    } else {
      this.service.create(student).subscribe((response) => {
        // pass data back and close modal
        this.modalCtrl.dismiss(response, "created");
      });
    }
  }
}
