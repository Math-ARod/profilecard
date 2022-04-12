import htmlFile from './contacts.component.html'
import './contacts.component.scss'

interface IContactsInfo {
	icon: string;
	value: string;
	type?: string;
	url?: string;
} 

class Contacts extends HTMLElement {
	contactsList: IContactsInfo[] | undefined = [
		{
			icon: 'email',
			type: 'email',
			value: 'matheusvwg@gmail.com',
			url: 'mail:matheusvwg@gmail.com'
		},

		{
			icon: 'call',
			type: 'call',
			value: '+55 27 997327459',
			url: 'tel:+5527997327459'
		},

		{
			icon: 'language',
			type: 'website',
			value: 'Youtube',
			url: 'https://www.youtube.com/channel/UCsb0LHCWjxvDtX-BAznhGWg'
		},

		{
			icon: 'room',
			type: 'location',
			value: 'Brasil',
			url: 'https://www.google.com.br/maps/place/Brasil/@-11.1386598,-90.7255414,3z/data=!3m1!4b1!4m5!3m4!1s0x9c59c7ebcc28cf:0x295a1506f2293e63!8m2!3d-14.235004!4d-51.92528'
		}
	];

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = htmlFile;

		const list = document.getElementById('profile-card_contacts-list');

		if (this.contactsList) {
			for (const contact of this.contactsList) {
				const icon = document.createElement('span');
				const li = document.createElement('li');
				const span = document.createElement('span');
				icon.classList.add('material-icons');
				icon.innerHTML = contact.icon;
				span.innerHTML = contact.value;
				li.append(icon, span)
				list?.append(li)
			}
		}
	}
}

customElements.define('profile-card-contacts', Contacts);
