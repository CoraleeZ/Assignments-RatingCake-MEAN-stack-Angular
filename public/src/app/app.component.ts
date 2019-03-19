import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { resource } from 'selenium-webdriver/http';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
// import{RatepartComponent} from './ratepart/ratepart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  newcake={name:'',url:''};
  allcake:any;
  newcomment={star:null,comment:''};
  showcakedetail=1;
  IDofcake:any;

  constructor(private _allCake: HttpService){};

  ngOnInit(){
    this.getTasksFromService();
    this.allcake=[];
  };

  getTasksFromService(){
    this._allCake.getAllCake()
    .subscribe(data=>{
      console.log('all cakes:',data);
      this.allcake=data;
    })
  }


  submitform(){
    this._allCake.createCake(this.newcake)
    .subscribe(data=>{
      console.log('create new cake:', data);
      this.getTasksFromService();
      this.showcakedetail=1;
      this.newcake={name:'',url:''};
    })
  }

  submitcommet(id:any){
    this._allCake.createRate(id,this.newcomment)
    .subscribe(data=>{
      console.log("create new comment:",data);
      this.showcakedetail=1;
      this.getTasksFromService();
      this.newcomment={star:null,comment:''};
    })
  }

  showdetail(id:any){
    if(this.showcakedetail==1){
      this.IDofcake=id;
      this.showcakedetail=0;
    }
    else{
      this.showcakedetail=1;
      this.IDofcake=id;
      setTimeout(()=>{this.showcakedetail=0},0)
    }
  }

}
