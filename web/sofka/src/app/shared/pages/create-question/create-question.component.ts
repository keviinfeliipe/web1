import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionI } from '../../models/question-i';
import { AuthService } from '../../services/authentication.service';
import { QuestionService } from '../../services/question.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss',]
})
export class CreateQuestionComponent implements OnInit {


  question: QuestionI = {
    id: this.authService.userData.uid,
    userId: this.authService.userData.uid,
    question: '',
    type: '',
    category: '',
    answers: [null]
  };

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private services: QuestionService,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  saveQuestion(question: QuestionI): void {
    this.services.saveQuestion(question).subscribe({

      next: (v) => {
        this.route.navigate(['home'])
        this.toastr.success('Se ha agregado la pregunta', 'OK', {
          timeOut: 3000,
        })

      },
      error: (e) => this.toastr.error(e.mesaje, 'Fail', {
        timeOut: 3000
      }),
      complete: () => console.info('complete')
    }
    );
  }

}
