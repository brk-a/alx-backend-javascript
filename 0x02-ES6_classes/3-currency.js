/* eslint-disable */
export default class Currency {
    constructor(code, name) {
	this._code = code;
	this._name = name;
    }

    displayFullCurrency() {
	return (`${this.name} (${this.code})`);
    }

    set name(new_Name) {
	this._name = new_Name;
    }

    set code(new_Code) {
	this._name = new_Code;
    }

    get name() {
	return this._name;
    }

    get code() {
	return this._code;
    }
}
