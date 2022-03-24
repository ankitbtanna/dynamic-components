import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MyDynamicCompComponent } from './my-dynamic-comp/my-dynamic-comp.component';

@Component({
  selector: 'dynamic-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-components';
  dynamicComponentInfo: string = '';

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;

  showComponent(): void { 
    this.viewRef.clear();

    let componentRef: ComponentRef<MyDynamicCompComponent> = this.viewRef.createComponent(MyDynamicCompComponent);

    setTimeout(() => {
      componentRef.instance.data = 'ankit';
      componentRef.instance.dynamicComponentButtonClicked.subscribe((info) => {
        this.dynamicComponentInfo = info;
      })
    }, 0)
  }
  
  hideComponent(): void {
    this.viewRef.clear();
  }
}
