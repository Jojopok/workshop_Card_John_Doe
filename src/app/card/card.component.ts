import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.models';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  user: User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://diwaindustries.tg/wp-content/uploads/2022/10/pngtree-business-male-icon-vector-png-image_916468.jpg'
  };

  ageVisible = true;

  toggleAgeVisibility(): void {
    this.ageVisible = !this.ageVisible;
  }


  sayHello(): void {
    alert("👁️‍🗨️I see you👁️‍🗨️");
  }
 }
