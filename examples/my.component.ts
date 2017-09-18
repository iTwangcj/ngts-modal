import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'ngts-modal/modal.service';
import { DialogComponent } from './templates/dialog/dialog.component';

@Component({
	selector: 'app-my',
	templateUrl: './my.component.html',
	styleUrls: ['./my.component.less'],
	encapsulation: ViewEncapsulation.None,
	providers: [ModalService]
})
export class MyComponent {

	constructor (private modal: ModalService) {

	}

	dialog () {
		let modalRef = this.modal.dialog({
			template: DialogComponent
		});
		modalRef.cancelCallback(() => {
			// Other handler
			console.log('取消回调事件.');
			return true; // close window
		});
		modalRef.confirmCallback(() => {
			// Other handler
			console.log('确认回调事件.');
			return true;
		});
	}

	alert () {
		this.modal.alert({ template: '测试文本' });
	}

	confirm () {
		this.modal.confirm({ template: '测试文本' });
	}

	loading () {
		this.modal.loading({ template: '测试文本', autoClose: 2000 });
	}

	actions () {
		this.modal.actions({
			template: `
				<ul class="actions">
					<li><a href="javascript:;">投资咨询与管理服务协议</a></li>
					<li><a href="javascript:;">资金管理规定</a></li>
					<li><a href="javascript:;">第三方支付服务授权协议书</a></li>
				</ul>
			`
		});
	}
}
