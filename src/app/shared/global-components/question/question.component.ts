import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {

  page : number

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  }

  testList = [
    {
      id: 1, question: "Inventor of c++?", anslistobj: ["Pavan.c", "James Gosling", "Richie Richie", "Amos.Emmanual"], answer: "Richie Richie"
    },
    {
      id: 2, question: "Inventor of java?", anslistobj: ["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], answer: "Denish Richie"
    },
    {
      id: 3, question: "how is java?", anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer: "Easy"
    },
    {
      id: 4, question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "a"
    } ,
    {
      id: 5, question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "b"
    },
    {
      id: 6, question: "Inventor of c++?", anslistobj: ["Pavan.c", "James Gosling", "Richie Richie", "Amos.Emmanual"], answer: "Richie Richie"
    },
    {
      id: 7, question: "Inventor of java?", anslistobj: ["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], answer: "Denish Richie"
    },
    {
      id: 8, question: "how is java?", anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer: "Easy"
    },
    {
      id: 9, question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "a"
    } ,
    {
      id: 10, question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "b"
    },
    {
      id: 11, question: "how is java?", anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer: "Easy"
    },
    {
      id: 12, question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "a"
    },
    {
      id: 13, question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "b"
    }
  ];

  clickAnswer(id:any){
    const question = this.el.nativeElement.querySelector('.sidebar'+id)
    question.classList.add('active-check');
  }

  goToquestion(event : any){
    const length = this.testList.length

    const pageLength = Math.ceil(length/10)

    const positionQuestion = Math.ceil(event/10)

    for(let i = 1; i<= pageLength; i++ ){
      if(positionQuestion == i){
        this.page = positionQuestion
      }
    }

    const question = this.el.nativeElement.querySelector('.question' + event)
    question.scrollIntoView()
  }
}
