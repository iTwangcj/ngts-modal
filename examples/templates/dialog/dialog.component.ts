import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.less'],
	encapsulation: ViewEncapsulation.None
})
export class DialogComponent {

	title = 'angular2 component test';

	constructor () {}

	close () {

	}

	submit () {

	}
}
