/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
/* eslint-disable ember/no-jquery */
import Component from '@ember/component';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';

export default Component.extend({
  authors: [
    { name: 'Mark Twain', count: 15 },
    { name: 'Virginia Woolf', count: 45 },
    { name: 'John Steinbeck', count: 23 },
    { name: 'Ralph Ellison', count: 27 },
  ],

  didInsertElement() {
    let authorCounts = this.authors.map(author => author.count);
    let yScale = scaleLinear()
      .domain([0, Math.max(...authorCounts)]);

    let svg = select(this.$('svg')[0]);
    svg.selectAll('rect').data(this.authors)
      .enter()
      .append('rect')
      .attr('width', 20)
      .attr('height', (author) => author.count)
      .attr('x', (author, index) => 25 * index);
  }
});
