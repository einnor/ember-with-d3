import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  authorData = [
    { label: 'Mark Twain', count: 15 },
    { label: 'Virginia Woolf', count: 45 },
    { label: 'John Steinbeck', count: 23 },
    { label: 'Ralph Ellison', count: 27 },
  ];
}
