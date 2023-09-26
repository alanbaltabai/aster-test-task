import { makeAutoObservable } from 'mobx';
class Store {
	mode = 'light';
	task = '';
	editedTask = '';
	tasks = [];
	filters = [
		{
			text: 'Все',
			value: 'all',
		},
		{ text: 'Выполненные', value: 'finished' },
		{ text: 'Невыполненные', value: 'unfinished' },
		{ text: 'Сначала новые', value: 'newestFirst' },
	];
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
