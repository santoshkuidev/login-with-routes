import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private router:Router, private state:StateService) { }

  login(payload:any){

    // const {username, password} = payload;

    const mockPayload = {
      username : 'kminchelle',
      password : '0lelplR'
    }
    // payload.username = 'kminchelle';
    // payload.password = '0lelplR';

    const loginUrl = 'https://dummyjson.com/auth/login';

    this.http.post(loginUrl, mockPayload).subscribe({
      next: (res) => {
        // handle successful Authentication
        // console.log(res);
        this.state.isAuthenticated = true;
        // navigate to home page
        this.router.navigate(['/fibonacci']);
        // this.router.navigateByUrl('/fibonacci');
      },
      error: (err) => {
        // Handle errors
      },
      complete: () => {
        // Complete login
      }
    })

    // this.http.post(loginUrl, { username, password }).subscribe(
    //   (response: any) => {
    //     // Assuming the API returns a token upon successful authentication
    //     const token = response.token;
    //     // Redirect to home page or dashboard upon successful authentication
    //     this.router.navigate(['/home']);
    //   },
    //   (error) => {
    //     console.error('Authentication failed:', error);
    //     this.errorMessage = 'Authentication failed. Please check your username and password.';
    //   }
    // );
  }
}
