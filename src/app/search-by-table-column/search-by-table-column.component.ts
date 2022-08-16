import { Component, OnInit, Output, ViewChild } from '@angular/core';
import {
  AbstractControlDirective,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

import * as go from 'gojs';

import { TblColServicesService } from '../services/tbl-col-services.service';
import { GraphServicesService } from './../services/graph-services.service';
import { DiagramComponent } from '../diagram/diagram.component';
import { DirServicesService } from '../services/dir-services.service';

@Component({
  selector: 'app-search-by-table-column',
  templateUrl: './search-by-table-column.component.html',
  styleUrls: ['./search-by-table-column.component.css'],
})
export class SearchByTableColumnComponent implements OnInit {
  title = 'Search by table';
  tblOptions = [];
  colOptions = [];
  filteredTblOptions;
  filteredColOptions;
  data = [];

  formGroup: FormGroup;
  constructor(
    private service1: TblColServicesService,
    private service2: GraphServicesService,
    private service3: DirServicesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.getTblNames();
    this.getColNames(null);
  }
  @ViewChild(DiagramComponent) child: DiagramComponent;

  initForm() {
    this.formGroup = this.fb.group({
      table: [''],
      column: [''],
    });
    this.formGroup.get('table').valueChanges.subscribe((response) => {
      // console.log("data is ", response);
      this.filterTblData(response);
    });

    this.formGroup.get('column').valueChanges.subscribe((response) => {
      // console.log("data is ", response);
      this.filterColData(response);
    });
  }
  displayTblFn(value?: number) {
    return value
      ? this.filteredTblOptions.find((_) => _.id === value).description
      : undefined;
  }

  removeNode($event) {
    this.child.removeNodeParts($event);
  }

  displayColFn(value?: number) {
    return value
      ? this.filteredColOptions.find((_) => _.id === value).description
      : undefined;
  }

  filterTblData(enteredData) {
    this.filteredTblOptions = this.tblOptions.filter((item) => {
      return item.description.indexOf(enteredData) > -1;
    });
  }

  filterColData(enteredData) {
    this.filteredColOptions = this.colOptions.filter((item) => {
      return item.description.indexOf(enteredData) > -1;
    });
  }

  getTblNames() {
    this.service1.getTblData().subscribe((response) => {
      this.tblOptions = response;
      this.filteredTblOptions = response;
    });
  }

  getColNames(tblId) {
    this.service1.getColData(tblId ? tblId : null).subscribe((response) => {
      this.colOptions = response;
      this.filteredColOptions = response;
      // console.log(response);
    });
  }

  onSubmit() {
    this.service2.getGraph(this.formGroup.value).subscribe((response) => {
      this.data = response;
      this.child.reload(new go.TreeModel(this.data));
    });
  }
  addUnique(arr, data, parent) {
    let index = arr
      .map(function (e) {
        return e.id;
      })
      .lastIndexOf(data.id);
    if (index !== -1) {
      data.key = arr[index].key + 10000;
      data.parent = parent;
    }
    return data;
  }
  getPath(newItem) {
    this.service3.getPathService(newItem).subscribe((response) => {
      console.log(newItem);
      let parent = newItem.key;
      response.forEach((el) => {
        let item = this.addUnique(this.data, el, parent);
        this.data.push(item);
        parent = item.key;
      });
      this.child.reload(new go.TreeModel(this.data));
    });
  }
  public selectedNode = null;

  public model: go.TreeModel = new go.TreeModel();

  public setSelectedNode(node) {
    this.selectedNode = node;
  }
}
