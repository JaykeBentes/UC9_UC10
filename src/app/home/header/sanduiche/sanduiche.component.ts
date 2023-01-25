import { Component } from '@angular/core';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sanduiche',
  standalone: true,
  templateUrl: './sanduiche.component.html',
  styleUrls: ['./sanduiche.component.css'],
  providers: [NgbOffcanvasConfig, NgbOffcanvas],
})
export class SanduicheComponent {
  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
	}

	open(content: any) {
    const newLocal = this;
		newLocal.offcanvasService.open(content);
	}
}
