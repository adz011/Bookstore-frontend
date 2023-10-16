import { Component } from '@angular/core';
import { faGithub, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faGithub = faGithub;
  faTwitter = faXTwitter;
  faYouTube = faYoutube;
}
