import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MainSection } from '../../shared/main-section/main-section';
import { MainImg } from '../../shared/main-img/main-img';

@Component({
  selector: 'app-home',
  imports: [Header, MainSection, MainImg],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
