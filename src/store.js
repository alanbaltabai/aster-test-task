import { makeAutoObservable } from 'mobx';
class Store {
	mode = 'light';
	task = '';
	editedTask = '';
	tasks = [];
	filters = ['all', 'finished', 'unfinished', 'newestFirst', 'lastFirst'];
	currentFilter = 'all';

	constructor() {
		makeAutoObservable(this);
	}

	setMode(value) {
		this.mode = value;
	}

	setTask(value) {
		this.task = value;
	}

	setEditedTask(value) {
		this.editedTask = value;
	}

	setTasks(value) {
		this.tasks = value;
	}

	setFilters(value) {
		this.filters = value;
	}

	setCurrentFilter(value) {
		this.currentFilter = value;
	}
}

const store = new Store();

export default store;
