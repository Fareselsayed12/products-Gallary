import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../core/services/Flowbite/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

constructor(private flowbiteService: FlowbiteService) {}


ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite((flowbite)=>{})
}
toggleDarkMode(): void {
  const htmlElement = document.documentElement;
  const isDark = htmlElement.classList.contains('dark');

  if (isDark) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

}

