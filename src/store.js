import { makeAutoObservable } from 'mobx';

class Store {
	mode = 'light';

	constructor() {
		makeAutoObservable(this);
	}

	setMode(value) {
		this.mode = value;
	}
}

const store = new Store();

export default store;
