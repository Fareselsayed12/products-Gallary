import { Component } from '@angular/core';

import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
ngOnInit(): void {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}


}
