/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
/* eslint-disable ember/no-jquery */
import Component from '@ember/component';
import { select } from 'd3-selection';

export default Component.extend({
  authors: [
    { name: 'Mark Twain', count: 15 },
    { name: 'Virginia Woolf', count: 45 },
    { name: 'John Steinbeck', count: 23 },
    { name: 'Ralph Ellison', count: 27 },
  ],

  didInsertElement() {
    let svg = select(this.$('svg')[0]);
    svg.selectAll('rect').data(this.authors)
      .enter()
      .append('rect')
      .attr('width', 20)
      .attr('height')
      .attr('x', (author, index) => 25 * index);
  }
});
