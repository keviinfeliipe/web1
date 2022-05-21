import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerI } from '../../models/answer-i';
import { AuthService } from '../../services/authentication.service';
import { QuestionService } from '../../services/question.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.scss']
})
export class CreateAnswerComponent implements OnInit {

  @Input() item:any;
  constructor(
    private modalService: NgbModal,
    public authService: AuthService,
    private services: QuestionService,
    private toastr: ToastrService,
    private route: Router
  ) {

  }

  answer: AnswerI = {
    userId: '',
    questionId: '',
    answer: '',
    position: 0
  }

  ngOnInit(): void {
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  saveAnswer(): void {
    this.answer.userId=this.item.userId;
    this.answer.questionId=this.item.id;
    this.services.saveAnswer(this.answer).subscribe({
      next: (v) => {
        this.toastr.success('Se ha agregado la respuesta', 'OK', {
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
