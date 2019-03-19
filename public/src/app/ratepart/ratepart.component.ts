import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-ratepart',
  templateUrl: './ratepart.component.html',
  styleUrls: ['./ratepart.component.css']
})
export class RatepartComponent implements OnInit {
@Input() cakeid:any; 
onecake:any;
ave=0;
rate=[];

  constructor(private _allCake: HttpService) { }

  ngOnInit() {
    this._allCake.getOneCake(this.cakeid)
    .subscribe(data=>{
      console.log('display one cake:',data);
    this.onecake=data[0];
    this.rate=this.onecake.rate;
    for(let x =0; x<this.onecake.rate.length;x++){
    this.ave+=this.onecake.rate[x].star;
    }
    this.ave=this.ave/this.onecake.rate.length;
    })
  }

}
