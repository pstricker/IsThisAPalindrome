import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-palindrome-checker-component',
  templateUrl: './palindrome-checker.component.html'
})

export class PalindromeCheckerComponent {
    palindromeCandidate = new FormControl('');

    public checkForPalindrome() {
        let isPalindrome = true;
        let candidateString = this.sanitizeInput(this.palindromeCandidate.value);
        let rightPosition = candidateString.length;

        for(var i = 0; i < (candidateString.length/2); i++){
            
            rightPosition--;

            if(candidateString[i] !== candidateString[rightPosition]){
                isPalindrome = false;
                break;
            }
        }  
        
        (isPalindrome ? alert("It is a palindrome!") : alert("Not a palindrome. Try again..."));
    }

    private sanitizeInput(candidate: string){
        return candidate.replace(/ /g,'').toLowerCase();
    }
}
