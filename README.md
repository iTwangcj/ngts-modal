# Dependencies
* Angular (tested with 4.3.5)

# Installation
	npm install --save ngts-modal
	
Once installed you need to import our main module:

# app.module.ts 中引入
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngts-modal';

@NgModule({
    imports: [
        BrowserModule,
        ModalModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

# Example
> my.component.ts
```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'ngts-modal';
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
```

> my.component.html
```typescript
<td rowspan="6" width="300" align="center">
	<button (click)="dialog();">dialog</button>
	<button (click)="confirm();">confirm</button>
	<button (click)="alert();">alert</button>
	<button (click)="loading();">loading</button>
	<button (click)="actions();">actions</button>
</td>
```