import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerI } from '../../models/answer-i';
import { QuestionI } from '../../models/question-i';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/authentication.service'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {


  question:QuestionI | undefined;
  answers: AnswerI[] | undefined;
  answersNew: AnswerI[]=[];
  currentAnswer:number=0;

  constructor(
    private route:ActivatedRoute,
    private questionService:QuestionService,
    public authService:AuthService
    ) {

    }

  id:string | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getQuestions(`${id}`);
    //this.AddAnwsers(((this.currentAnswer+10)>this.answers?.length)?10:(this.answers.length-this.currentAnswer));
  }

  getQuestions(id:string):void{
    this.questionService.getQuestion(id).subscribe(data=>{
      this.question=data;
      this.answers = data.answers;
    })

  }

  AddAnwsers(index:number) {
    let last=this.currentAnswer+index;
    console.log("actual:",this.currentAnswer)
    console.log(this.question?.answers[0]);
    for(let i = this.currentAnswer;i<last;i++){
      console.log(i);
      //this.answersNew.push(this.answers[i]);
    }
    this.currentAnswer+=10;
    console.log("actual:",this.currentAnswer)
  }

  onScroll() {

  }

}
