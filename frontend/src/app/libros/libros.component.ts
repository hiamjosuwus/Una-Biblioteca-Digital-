import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irARevistas(){
    this.router.navigate(['/revistas'])
  }
  irAUsuarios(){
    this.router.navigate(['/users'])
  }

}
