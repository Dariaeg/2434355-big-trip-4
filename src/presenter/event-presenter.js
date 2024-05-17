import {render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import NewWayPointView from '../view/new-way-point-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventView from '../view/event-view.js';

export default class EventPresenter {
  eventListComponent = new EventListView();

  constructor({eventsContainer, eventsModel}) {
    this.eventsContainer = eventsContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.eventsModel.getEvents()];
    render(this.eventListComponent, this.eventsContainer);
    render(new SortView(), this.eventsContainer.element);
    render(new NewWayPointView(), this.eventListComponent.element);
    render(new EventEditView({event: this.events[0]}), this.eventListComponent.element);

    for (let i = 1; i < this.events.length; i++) {
      render(new EventView({event: this.events[i]}), this.eventListComponent.element);
    }
  }
}
