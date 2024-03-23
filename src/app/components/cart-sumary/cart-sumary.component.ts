import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-sumary',
  templateUrl: './cart-sumary.component.html',
  styleUrl: './cart-sumary.component.css'
})
export class CartSumaryComponent {

  cartItems:CartItem[]=[];

  constructor(private cartService:CartService,
    private toastrService:ToastrService){}

  ngOnInit():void{
    this.getCart();
  }

  getCart(){
    this.cartItems=this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error(product.productName + "sepetten silindi.");
  }

}
