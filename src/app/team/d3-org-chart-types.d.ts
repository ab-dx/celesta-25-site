// team/d3-org-chart-types.d.ts

import { TeamMember } from './teamData';

// Defines the shape of the node object passed to the library's callbacks
export interface D3Node {
  data: TeamMember;
  _directSubordinates: number;
  _totalSubordinates: number;
}

// Defines the OrgChart class and its methods, ensuring each returns 'this' to allow chaining
export declare class OrgChart {
  constructor();
  container(selector: HTMLDivElement): this;
  data(data: TeamMember[]): this;
  nodeWidth(width: (d: D3Node) => number): this;
  nodeHeight(height: (d: D3Node) => number): this;
  childrenMargin(margin: (d: D3Node) => number): this;
  compactMarginBetween(margin: (d: D3Node) => number): this;
  initialExpandLevel(level: number): this;
  onNodeClick(handler: (nodeId: string) => void): this;
  nodeContent(formatter: (node: D3Node) => string): this;
  setExpanded(nodeId: string): this;
  render(): this;
}