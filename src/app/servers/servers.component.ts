import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer  = false;
  serverCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }
  serverName = 'test server';
  servers = ['Test Server 1', 'Test Server 2'];

  ngOnInit() {
  }

  addServer(){
    console.log("add server clicked");
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  updateServerName(serverName){
    console.log("Ddd");
   
    this.serverName = serverName;
    console.log(this.serverName);
  }

}
