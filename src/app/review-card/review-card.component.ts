import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReviewServiceService } from '../services/review-service.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent implements OnInit {
nextSlide() {
throw new Error('Method not implemented.');
}
prevSlide() {
throw new Error('Method not implemented.');
}
  // currentSlide = 0;
  reviews: any[] = [];

  constructor(
    private http: HttpClient,
    private reviewService: ReviewServiceService
  ) {}

  ngOnInit(): void {
    this.getReview();
  }

  getReview() {
    this.reviewService.getReview().subscribe((data) => {
      this.reviews = data;
      console.log(data);
    });
  }
  
}
