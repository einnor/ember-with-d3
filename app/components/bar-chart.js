/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
/* eslint-disable ember/no-jquery */
import Component from '@ember/component';
import { select } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';

export default Component.extend({
  data: [],
  didInsertElement() {
    let counts = this.data.map(item => item.count);
    let yScale = scaleLinear()
      .domain([0, Math.max(...counts)])
      .range([0, 100]);

    let xScale = scaleBand()
      .domain(this.data.map(item => item.label))
      .range([0, 100])
      .paddingInner(0.12);

    let svg = select(this.$('svg')[0]);
    svg.selectAll('rect').data(this.data)
      .enter()
      .append('rect')
      .attr('width', `${xScale.bandwidth()}%`)
      .attr('height', item => `${yScale(item.count)}%`)
      .attr('x', item => `${xScale(item.label)}%`)
      .attr('y', item => `${100 - yScale(item.count)}%`);
    
    this.set('tooltipTarget', this.$('svg')[0]);
  }
});
