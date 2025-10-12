"use client";
import React, { useEffect, useRef } from "react";
import { OrgChart } from "./d3-org-chart";
import { teamData } from "./teamData";
import "./teams.css";

interface D3Node {  // optional for typing
    data: {
        name: string;
        title: string;
        image?: string;
        linkedin?: string;
        x?: string;
        [key: string]: any;
    };
}

export default function TeamsPage() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstanceRef = useRef<OrgChart | null>(null);

  useEffect(() => {
    if (!chartRef.current || chartInstanceRef.current) {
      return;
    }
    const parvChart = new (OrgChart as any)();
    chartInstanceRef.current = parvChart;

    parvChart
      .container(chartRef.current)
      .data(teamData)
      .nodeWidth(() => 250)
      .nodeHeight(() => 170)
      .childrenMargin(() => 80)
      .compactMarginBetween(() => 60)
      .initialExpandLevel(1)
      .onNodeClick((nodeId: string) => {
        chartInstanceRef.current?.setExpanded(nodeId).render();
      })
      .nodeContent((d3Node: D3Node) => {
        const item = d3Node.data;
        const socialLinksInitialStyles = `
          opacity: 0; 
          transform: translateY(10px); 
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        `;
        const cardEventHandlers = `
          onmouseover="this.querySelector('.node-social-links').style.opacity = 1; this.querySelector('.node-social-links').style.transform = 'translateY(0)';"
          onmouseout="this.querySelector('.node-social-links').style.opacity = 0; this.querySelector('.node-social-links').style.transform = 'translateY(10px)';"
        `;
        const socialLinks = `
          <div class="node-social-links" style="${socialLinksInitialStyles}">
            ${item.linkedin ? `
              <a href="${item.linkedin}" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.svg" alt="LinkedIn" class="social-icon" />
              </a>` : ''}
            ${item.x ? `
              <a href="${item.x}" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.svg" alt="X" class="social-icon" />
              </a>` : ''}
          </div>
        `;

        if (item.image) {
          return `
            <div class="node-card" ${cardEventHandlers}>
              <div class="node-card-glow"></div>
              <img class="node-avatar" src="${item.image}" alt="${item.name}" />
              <div class="node-info">
                <div class="node-name">${item.name}</div>
                <div class="node-title">${item.title}</div>
              </div>
              ${socialLinks}
            </div>
          `;
        }
        return `
          <div class="node-card is-group" ${cardEventHandlers}>
            <div class="node-card-glow"></div>
            <div class="node-info">
              <div class="node-name">${item.name}</div>
              <div class="node-title">${item.title}</div>
            </div>
            ${socialLinks}
          </div>
        `;
      })
      .render();

    const svgElement = chartRef.current?.querySelector('svg');
    if (svgElement && !svgElement.querySelector('#line-gradient')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.innerHTML = `
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#007bff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
      `;
      svgElement.prepend(defs);
    }
  }, []);

  return (
    <main className="teams-page relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <img
          src="/images/events-backdrop.png"
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white_100%)]">
          <svg className="absolute inset-0 h-full w-full text-white" aria-hidden="true">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
        </div>
      </div>
      <div className="relative z-20">
        <h1 className="teams-title">Our Team</h1>
        <div ref={chartRef} className="teams-chart" />
      </div>
    </main>
  );
}