mohit.barua@gmail.com
mohit@123#*

{{ varibale }}



<div [ngClass]="{}"></div>

<button *ngIf="flag" [disbaled]="flag">{{ buttonName }}</button>


import { Pipes, PipeTransform } from "@angular/core";

@Pipes({
    name: "filterPipe",
    pure: true | false
})

export class FilterPipe implement PipeTransform {

    transform(value, arguments) {

        // logic for transformed pipe
        return //transformed pipe here
    }

}

<video src="" poster="path to image" autoplay></video>