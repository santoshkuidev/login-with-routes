import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { StateService } from './services/state.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/services/auth.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TabsComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-with-routes';
  tabs = [
    { name: 'Fibonacci', route: '/fibonacci', id: 1 },
    { name: 'Anagram', route: '/anagram', id: 2 },
  ];
  constructor(private state:StateService, private router:Router){}

  ngOnInit(): void {
     
  }

  isAuthenticated():boolean{
    return this.state.isAuthenticated;
  }

  logout():void{
    // Remove auth credentials
    this.state.isAuthenticated = false;
    this.router.navigateByUrl('/login');
  }
}
