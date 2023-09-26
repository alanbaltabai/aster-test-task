import { makeAutoObservable } from 'mobx';
class Store {
	mode = 'light';
	task = '';
	editedTask = '';
	tasks = [];

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
}

const store = new Store();

export default store;
