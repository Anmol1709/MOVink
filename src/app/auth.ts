
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const canActive_movie = () => {
    const router = inject(Router);
    if (localStorage.getItem('current_USER_name') == "") {
        router.navigateByUrl('/login');
        return false;
    }
    else {
        console.log(localStorage.getItem('current_USER_name')); return true;
    }

}