import htmlFile from './links.component.html'
import './links.component.scss'

interface IconLink {
	icon: string;
	url: string;
	type: string;
}

class Links extends HTMLElement {
	iconLink: IconLink[] | undefined = [
		{
			icon: './assets/img/facebookicon.png',
			url: 'https://www.facebook.com/',
			type: 'facebook'
		},

		{
			icon: './assets/img/linkedinicon.png',
			url: 'https://br.linkedin.com/',
			type: 'linkedin'
		},

		{
			icon: './assets/img/youtubeicon.jpg',
			url: 'https://www.youtube.com',
			type: 'youtube'
		}
	]

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = htmlFile;

		const list = document.getElementById ('profile-card_icon-list');

		if(this.iconLink) {
			for (const profileIcon of this.iconLink) {
				const type = document.createElement('li');
				const url = document.createElement('a');
				const icon = document.createElement('img')


				type.classList.add('icon-itens')
				url.href = profileIcon.url;
				icon.src = profileIcon.icon;

				//type.append(url, icon)

				type.append(url, icon)
				url.append(icon)
				list?.append(type)
				
			}
		}
	}
}

customElements.define('profile-card-links', Links);
