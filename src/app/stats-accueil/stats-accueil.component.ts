import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-accueil',
  templateUrl: './stats-accueil.component.html',
  styleUrls: ['./stats-accueil.component.css']
})
export class StatsAccueilComponent implements OnInit {
  cards = [
    { title: 'Card 1', number: 0, target: 100},
    { title: 'Card 2', number: 0, target: 200},
    { title: 'Card 3', number: 0, target: 300}
  ];


  constructor() {}


  ngOnInit(): void {
    this.cards.forEach((card, index) => {
      setInterval(() => {
        if (card.number < card.target) {
          card.number++;
        }
      }, 1000 / (index + 1));
    });
  }
}
