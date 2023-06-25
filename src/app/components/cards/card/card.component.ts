import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() gameCover!:string;
  @Input() titleGame!: string;
  @Input() titlePrice!: string;
  @Input() midia!:string;
  @Input() console!:string;
  @Input() price!:string;
  @Input() gameLabel!: string;

  ngOnInit(): void {    
  }

}
