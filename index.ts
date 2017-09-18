'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRef, ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
	declarations: [
		ModalComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		ModalRef,
		ModalService
	],
	entryComponents: [
		ModalComponent
	],
	providers: [
		ModalService
	]
})
export class ModalModule {

}