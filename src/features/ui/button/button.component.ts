import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn',
  template: require('./button.component.html'),
  styles: [require('./button.component.css')],
})
export default class BtnComponent {
  @Input() id: string;
  @Input('class') className: string = '';
  @Input() type: 'secondary' | 'primary' | 'link' = 'secondary';
  @Output() onClick = new EventEmitter<{ id: string, event: any }>();

  classnames() {
    return {
      btn: true,
      [`btn-${this.type}`]: true,
      [this.className]: true,
    };
  }

  handleClick(event) {
    this.onClick.emit({
      id: this.id,
      event,
    });
  }
}
