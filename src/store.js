import { makeAutoObservable } from 'mobx';
class Store {
	mode = 'light';
	task = '';
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

	setTasks(value) {
		this.tasks = value;
	}
}

const store = new Store();

export default store;
