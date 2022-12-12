import { Component } from "@angular/core";

@Component({

  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class postCreateComponent{

  enteredValue = '';
  newPost = 'NO CONTENT';


  onAddPost(){
    this.newPost = this.enteredValue;
  }
}
