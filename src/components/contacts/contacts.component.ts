import { htmlFor } from '../../vanilla-ts/html-for/html-for';
import htmlFile from './contacts.component.html';
import './contacts.component.scss';

interface IContactsInfo {
	icon: string;
	value: string;
	type?: string;
	url?: string;
}

class Contacts extends HTMLElement {
	contactsList: IContactsInfo[] | undefined = [
		{
			type: 'email',
			value: 'antoniojr.ufam@gmail.com',
			icon: 'email',
			url: 'mailto:antoniojr.ufam@gmail.com',
		},
		{
			type: 'tel',
			value: '+55 (92) 98856-8382',
			icon: 'call',
			url: 'tel:+5592988568382',
		},
		{
			type: 'website',
			value: 'https://juninhocruzg3.github.io',
			icon: 'language',
			url: 'https://juninhocruzg3.github.io',
		},
		{
			type: 'location',
			value: 'Brazil',
			icon: 'place',
		},
	];

	testando = ['algo', 'algo2', 'algo3', 'algo4'];

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = htmlFile;
		htmlFor(this);
	}
}

customElements.define('profile-card-contacts', Contacts);