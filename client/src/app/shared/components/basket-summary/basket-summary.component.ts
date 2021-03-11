import { Component, OnInit, Output ,EventEmitter ,Input} from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem ,Basket} from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css']
})
export class BasketSummaryComponent implements OnInit {

  basket$ :Observable<IBasket>;
  basket: Basket; 
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;



  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basket$.subscribe(response=>{
      this.basket = response;
      console.log("Subscribe Log ",this.basket);
    });
    }


  decrementItemQuantity (item:IBasketItem){
    this.decrement.emit(item);
  }
  incrementItemQuantity (item:IBasketItem){
    this.increment.emit(item);
  }
  removeBasketItem (item:IBasketItem){
    this.remove.emit(item);
  }
}
