import html from './links.component.html';
import './links.component.scss';

class Links extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = html;
	}
}

customElements.define('profile-card-links', Links);
