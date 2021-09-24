import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revistas',
  templateUrl: './revistas.component.html',
  styleUrls: ['./revistas.component.scss']
})
export class RevistasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAUsuarios(){
    this.router.navigate(['/users'])
  }
  irALibros(){
    this.router.navigate(['/revistas'])
  }

}
