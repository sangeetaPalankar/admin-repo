import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface Family {
  name: string;
  children?: Family[];
  url:string;
}

interface Nurse {
  name: string;
  children?: Nurse[];
  url:string;
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  url:string;
}

const FAMILY_TREE: Family[] = [
  {
    name: 'Doctor',
    url:'/',
    children: [
      {name: 'Add Doctor', url:'https://manage.auth0.com/dashboard/us/dev-qnzlgih035ihuldo/users'},
      {name: 'List Doctors' , url:'doctor-list'}
    ],
  },
];

const NURSE_TREE: Nurse[] = [
  {
    name: 'Nurse',
    url:'/',
    children: [
      {name: 'Add Nurse', url:"/"},
      {name: 'List Nurses' , url:'nurse-list'}
    ],
  }
];


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  
  private _transformer = (node: Family, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url:node.url
    };
  };

  private _transformerN = (node: Nurse, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url:node.url
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  treeFlattenerN = new MatTreeFlattener(
    this._transformerN,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  dataSourceN = new MatTreeFlatDataSource(this.treeControl, this.treeFlattenerN);

  constructor() {
    this.dataSource.data = FAMILY_TREE;
    this.dataSourceN.data = NURSE_TREE;
  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void{}
}
