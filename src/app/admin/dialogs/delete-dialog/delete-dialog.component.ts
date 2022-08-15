import { GraphServicesService } from './../../../services/graph-services.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent implements OnInit {
  node: {
    id: number;
    parent: number;
    name: string;
    parentName: string;
    link: number;
  };

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private service: GraphServicesService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.node = data;
  }

  ngOnInit() {}

  delete() {
    this.service.deleteLink(this.node.link);
    this.dialogRef.close(this.node.link);
  }

  close() {
    this.dialogRef.close();
  }
}
