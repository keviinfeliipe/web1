import { Component, OnInit, NgZone } from '@angular/core';
import { QuestionI } from '../../models/question-i';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/authentication.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalQuestions:number | undefined;
  questions:QuestionI[] | undefined;
  user: any | undefined;
  page:number = 0;
  pages: Array<number> | undefined;

  constructor(
    private service:QuestionService,
    public authService:AuthService
  ) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions():void{
    this.service.getPage(this.page).subscribe(data=>{
      this.questions=data;
    });
    this.service.getTotalPages().subscribe(
      data=>this.pages=new Array(data)
    );
    this.service.getCountQuestions().subscribe(
      data=>this.totalQuestions=data
    );
  }


  isLast():boolean{
    let totalPeges:any = this.pages?.length;
    return this.page==(totalPeges-1);
  }

  isFirst():boolean{
    return this.page==0;
  }

  previousPage():void{
    !this.isFirst() ? (this.page--, this.getQuestions()):false;
  }

  nextPage():void{
    !this.isLast() ? (this.page++, this.getQuestions()):false;
  }

  getPage(page:number):void{
    this.page=page;
    this.getQuestions();
  }



}
