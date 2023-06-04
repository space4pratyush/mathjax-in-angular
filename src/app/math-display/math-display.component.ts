import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';
import { MathJaxService } from '../service/mathjax.service';

declare const MathJax: any;

@Component({
  selector: 'app-math-display',
  templateUrl: './math-display.component.html',
  styleUrls: ['./math-display.component.scss']
})
export class MathDisplayComponent implements OnInit, AfterViewInit {
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  questions: any[] = [];

  

  constructor( private questionService: QuestionService, private mathJaxService: MathJaxService) { }

  ngOnInit(): void {
    this.mathJaxService.loadMathJax();
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data.question_bank;
    });
  }

  async ngAfterViewInit(): Promise<void> {

  }

  isLink(option: string): boolean {
    return option.startsWith('http') || option.startsWith('https');
  }
  

  generatePDF(): void {
  }
  
  
}
