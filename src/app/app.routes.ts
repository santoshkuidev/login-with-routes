import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FibonacciComponent } from './shared/components/fibonacci/fibonacci.component';
import { AnagramComponent } from './shared/components/anagram/anagram.component';
import { AuthGuard } from './shared/services/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
    { path: 'login', component: LoginComponent },
    // { path: 'home', 
    // loadComponent: () => import('./components/home/home.component').then(m=>m.HomeComponent),
    // canActivate: [AuthGuard]
    // },
    { path: 'fibonacci', 
    loadComponent: () => import('./shared/components/fibonacci/fibonacci.component').then(m=>m.FibonacciComponent),
    canActivate: [AuthGuard]
},
    
    { path: 'anagram', 
    loadComponent: () => import('./shared/components/anagram/anagram.component').then(m=>m.AnagramComponent),
    // canActivate: [AuthGuard]
}
];
