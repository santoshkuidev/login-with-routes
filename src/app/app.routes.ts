import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/services/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
    { path: 'login', component: LoginComponent },
    { path: 'fibonacci', 
    loadComponent: () => import('./shared/components/fibonacci/fibonacci.component').then(m=>m.FibonacciComponent),
    canActivate: [AuthGuard]
},
    
    { path: 'anagram', 
    loadComponent: () => import('./shared/components/anagram/anagram.component').then(m=>m.AnagramComponent),
    canActivate: [AuthGuard]
}
];
