import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../shared/services.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public itemList: any = [];
  public itemId: any;

  constructor(public serv: ServicesService) { }

  ngOnInit(): void {
    this.getInventoryItems();
  }

  // Get the Items to List
  getInventoryItems(){
    this.serv.getAllItem().subscribe(data => {
      this.itemList = data;
    });
  }

  // Delete the Item by id
  deleteItem(id: any){
    this.serv.deleteItem(id).subscribe(data => {
      this.getInventoryItems();
    });
  }

}
