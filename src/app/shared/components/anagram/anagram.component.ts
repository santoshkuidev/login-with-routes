import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anagram',
  standalone: true,
  imports: [FormsModule
  ],
  templateUrl: './anagram.component.html',
  styleUrl: './anagram.component.scss'
})
export class AnagramComponent {
  string1!: string;
  string2!: string;

  checkAnagram() {
    if (!this.string1 || !this.string2) {
      alert('Please enter both strings.');
      return;
    }

    const sortedString1 = this.string1.toLowerCase().split('').sort().join('');
    const sortedString2 = this.string2.toLowerCase().split('').sort().join('');

    if (sortedString1 === sortedString2) {
      alert('Strings are anagrams!');
    } else {
      alert('Strings are not anagrams.');
    }
  }
}
