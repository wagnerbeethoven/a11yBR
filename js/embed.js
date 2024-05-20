

function getTheme(name = '') {
  switch(name.toLowerCase()) {
    case 'serif':
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : Fraunces, Times New Roman, serif;
  --webring-heading-font: Fraunces, Times New Roman, serif;
  --webring-button-font : Fraunces, Times New Roman, serif;

  --webring-bg        : 0 0% 98%;
  --webring-fg        : 0 0% 20%;
  --webring-body-color: 0 0% 20%;
  --webring-accent-1  : 343 60% 48%;
  --webring-accent-2  : 343 100% 68%;
  --webring-shadow-color: 0 0% 10%;
}

.webring-banner.scheme-dark {
  --webring-bg        : 0 0% 15%;
  --webring-fg        : 0 0% 98%;
  --webring-body-color: 0 0% 98%;
  --webring-accent-1  : 343 100% 68%;
  --webring-accent-2  : 343 100% 78%;
  --webring-shadow-alpha: 10%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg        : 0 0% 15%;
    --webring-fg        : 0 0% 98%;
    --webring-body-color: 0 0% 98%;
    --webring-accent-1  : 343 100% 68%;
    --webring-accent-2  : 343 100% 78%;
  }
}`
    case 'tron':
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : 'Source Code Pro', monospace;
  --webring-heading-font: 'Audiowide', sans-serif;
  --webring-button-font : 'Source Code Pro', monospace;

  --webring-bg          : 233 100% 98%;
  --webring-fg          : 230 95% 7%;
  --webring-body-color  : 230 95% 7%;
  --webring-accent-1    : 216 85% 24%;
  --webring-accent-2    : 211 100% 55%;
  --webring-shadow-color: 230 95% 7%;
}

.webring-banner.scheme-dark {
  --webring-bg          : 216 85% 24%;
  --webring-fg          : 233 100% 98%;
  --webring-body-color  : 233 100% 98%;
  --webring-accent-1    : 216 85% 24%;
  --webring-accent-2    : 216 100% 84%;
  --webring-shadow-color: 211 100% 55%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg          : 216 85% 24%;
    --webring-fg          : 233 100% 98%;
    --webring-body-color  : 233 100% 98%;
    --webring-accent-1    : 216 85% 24%;
    --webring-accent-2    : 216 100% 84%;
    --webring-shadow-color: 211 100% 55%;
  }
}

.webring-banner {
  border       : 2px solid hsl(var(--webring-accent-2));
  border-radius: 0;
}

.webring-banner__links {
  border-color: hsl(var(--webring-accent-2));
}`
    case 'coder':
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : 'Source Code Pro', monospace;
  --webring-heading-font: 'Source Code Pro', monospace;
  --webring-button-font : 'Source Code Pro', monospace;

  --webring-bg          : 0 0% 98%;
  --webring-fg          : 0 0% 20%;
  --webring-body-color  : 0 0% 20%;
  --webring-accent-1    : 343 60% 48%;
  --webring-accent-2    : 343 100% 68%;
  --webring-shadow-color: var(--webring-fg);
}

.webring-banner.scheme-dark {
  --webring-bg          : 0 0% 15%;
  --webring-fg          : 0 0% 98%;
  --webring-body-color  : 0 0% 98%;
  --webring-accent-1    : 343 100% 68%;
  --webring-accent-2    : 343 100% 78%;
  --webring-shadow-color: 0 0% 10%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg          : 0 0% 15%;
    --webring-fg          : 0 0% 98%;
    --webring-body-color  : 0 0% 98%;
    --webring-accent-1    : 343 100% 68%;
    --webring-accent-2    : 343 100% 78%;
    --webring-shadow-color: 0 0% 10%;
  }
}`
    case 'bading':
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : Figtree, Arial, Helvetica, system-ui, sans-serif;
  --webring-heading-font: Figtree, Arial, Helvetica, system-ui, sans-serif;
  --webring-button-font : Figtree, Arial, Helvetica, system-ui, sans-serif;

  --webring-bg          : 0 0% 98%;
  --webring-fg          : 0 0% 20%;
  --webring-body-color  : 0 0% 20%;
  --webring-accent-1    : 343 60% 48%;
  --webring-accent-2    : 343 100% 68%;
  --webring-shadow-color: var(--webring-fg);
}

.webring-banner.scheme-dark {
  --webring-bg          : 0 0% 15%;
  --webring-fg          : 0 0% 98%;
  --webring-body-color  : 0 0% 98%;
  --webring-accent-1    : 343 100% 68%;
  --webring-accent-2    : 343 100% 78%;
  --webring-shadow-color: 0 0% 10%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg          : 0 0% 15%;
    --webring-fg          : 0 0% 98%;
    --webring-body-color  : 0 0% 98%;
    --webring-accent-1    : 343 100% 68%;
    --webring-accent-2    : 343 100% 78%;
    --webring-shadow-color: 0 0% 10%;
  }
}

.webring-banner {
  display       : flex;
  flex-direction: column;
  overflow      : hidden
}

.webring-banner::before {
  content: '';
  width  : 100%;
  height : 1ch;

  --color-count: 6;
  --color-1    : #fe7272;
  --color-2    : #fc8b4e;
  --color-3    : #fdd271;
  --color-4    : #32d190;
  --color-5    : #6183fb;
  --color-6    : #9269ec;

  background-image: linear-gradient(to right,
      var(--color-1) calc((100% / var(--color-count)) * 1),
      var(--color-2) calc((100% / var(--color-count)) * 1),
      var(--color-2) calc((100% / var(--color-count)) * 2),
      var(--color-3) calc((100% / var(--color-count)) * 2),
      var(--color-3) calc((100% / var(--color-count)) * 3),
      var(--color-4) calc((100% / var(--color-count)) * 3),
      var(--color-4) calc((100% / var(--color-count)) * 4),
      var(--color-5) calc((100% / var(--color-count)) * 4),
      var(--color-5) calc((100% / var(--color-count)) * 5),
      var(--color-6) calc((100% / var(--color-count)) * 5));

  background-image: linear-gradient(to right,
      var(--color-1),
      var(--color-2),
      var(--color-3),
      var(--color-4),
      var(--color-5),
      var(--color-6))
}`
    case 'trans':
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : Figtree, Arial, Helvetica, system-ui, sans-serif;
  --webring-heading-font: Figtree, Arial, Helvetica, system-ui, sans-serif;
  --webring-button-font : Figtree, Arial, Helvetica, system-ui, sans-serif;

  --webring-bg          : 0 0% 98%;
  --webring-fg          : 0 0% 20%;
  --webring-body-color  : 0 0% 20%;
  --webring-accent-1    : 343 60% 48%;
  --webring-accent-2    : 343 100% 68%;
  --webring-shadow-color: var(--webring-fg);
}

.webring-banner.scheme-dark {
  --webring-bg          : 0 0% 15%;
  --webring-fg          : 0 0% 98%;
  --webring-body-color  : 0 0% 98%;
  --webring-accent-1    : 343 100% 68%;
  --webring-accent-2    : 343 100% 78%;
  --webring-shadow-color: 0 0% 10%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg          : 0 0% 15%;
    --webring-fg          : 0 0% 98%;
    --webring-body-color  : 0 0% 98%;
    --webring-accent-1    : 343 100% 68%;
    --webring-accent-2    : 343 100% 78%;
    --webring-shadow-color: 0 0% 10%;
  }
}

.webring-banner {
  display: flex;
  flex-direction: column;
  overflow: hidden
}

.webring-banner::before {
  content: '';
  width: 100%;
  height: 1ch;

  --color-count: 5;
  --color-1: #00dcff;
  --color-2: #ffb7d4;
  --color-3: #ffffff;
  --color-4: #ffb7d4;
  --color-5: #00dcff;

  background-image: linear-gradient(
    to right,
    var(--color-1) calc((100% / var(--color-count)) * 1),
    var(--color-2) calc((100% / var(--color-count)) * 1),
    var(--color-2) calc((100% / var(--color-count)) * 2),
    var(--color-3) calc((100% / var(--color-count)) * 2),
    var(--color-3) calc((100% / var(--color-count)) * 3),
    var(--color-4) calc((100% / var(--color-count)) * 3),
    var(--color-4) calc((100% / var(--color-count)) * 4),
    var(--color-5) calc((100% / var(--color-count)) * 4)
  )
}`
    case 'plantlike':
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : 'Alegreya', Times New Roman, serif;
  --webring-heading-font: 'Alegreya', Times New Roman, serif;
  --webring-button-font : 'Alegreya Sans', Times New Roman, serif;

  --webring-bg        : 45 24% 93%;
  --webring-fg        : 188 95% 14%;
  --webring-body-color: 188 95% 14%;
  --webring-accent-1  : 188 95% 14%;
  --webring-accent-2  : 188 95% 14%;
  --webring-shadow-color: 188 95% 14%
}

.webring-banner.scheme-dark {
  --webring-bg        : 188 95% 14%;
  --webring-fg        : 45 24% 93%;
  --webring-body-color: 45 24% 93%;
  --webring-accent-1  : 45 24% 93%;
  --webring-accent-2  : 45 24% 93%;
  --webring-shadow-alpha: 10%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg        : 188 95% 14%;
    --webring-fg        : 45 24% 93%;
    --webring-body-color: 45 24% 93%;
    --webring-accent-1  : 45 24% 93%;
    --webring-accent-2  : 45 24% 93%;
    --webring-shadow-alpha: 10%;
  }
}

.webring-banner,
.webring-banner__link {
  border-radius: 0;
}

.webring-banner__description > :not(.webring-banner__title) a:not([class]) {
  text-decoration: underline;
}`
    case 'borderline':
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : Merriweather, Times New Roman, serif;
  --webring-heading-font: Arial, sans-serif;
  --webring-button-font : Arial, sans-serif;

  --webring-bg        : 0 0% 98%;
  --webring-fg        : 0 0% 20%;
  --webring-body-color: 0 0% 20%;
  --webring-accent-1  : 0 0% 20%;
  --webring-accent-2  : 0 0% 20%;
  --webring-shadow-color: 0 0% 10%;
}

.webring-banner.scheme-dark {
  --webring-bg        : 0 0% 15%;
  --webring-fg        : 0 0% 98%;
  --webring-body-color: 0 0% 98%;
  --webring-accent-1  : 0 0% 98%;
  --webring-accent-2  : 0 0% 98%;
  --webring-shadow-alpha: 10%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg        : 0 0% 15%;
    --webring-fg        : 0 0% 98%;
    --webring-body-color: 0 0% 98%;
    --webring-accent-1  : 0 0% 98%;
    --webring-accent-2  : 0 0% 98%;
  }
}

.webring-banner,
.webring-banner__link {
  border-radius: 0;
}

.webring-banner__description > :not(.webring-banner__title) a:not([class]) {
  text-decoration: underline;
}`
    default:
      return `.webring-banner,
.webring-banner.scheme-light {
  --webring-font        : Inter, Arial, Helvetica, system-ui, sans-serif;
  --webring-heading-font: Inter, Arial, Helvetica, system-ui, sans-serif;
  --webring-button-font : Inter, Arial, Helvetica, system-ui, sans-serif;

  --webring-bg          : 0 0% 98%;
  --webring-fg          : 0 0% 20%;
  --webring-body-color  : 0 0% 20%;
  --webring-accent-1    : 343 60% 48%;
  --webring-accent-2    : 343 100% 68%;
  --webring-shadow-color: var(--webring-fg);
}

.webring-banner.scheme-dark {
  --webring-bg          : 0 0% 15%;
  --webring-fg          : 0 0% 98%;
  --webring-body-color  : 0 0% 98%;
  --webring-accent-1    : 343 100% 68%;
  --webring-accent-2    : 343 100% 78%;
  --webring-shadow-color: 0 0% 10%;
}

@media (prefers-color-scheme: dark) {
  .webring-banner {
    --webring-bg          : 0 0% 15%;
    --webring-fg          : 0 0% 98%;
    --webring-body-color  : 0 0% 98%;
    --webring-accent-1    : 343 100% 68%;
    --webring-accent-2    : 343 100% 78%;
    --webring-shadow-color: 0 0% 10%;
  }
}`
  }
}

class WebringBanner extends HTMLElement {
  static SCHEMES = ['dark', 'light']
  static THEMES = ['serif', 'tron', 'coder', 'bading', 'trans', 'plantlike', 'borderline']

  constructor() {
      super();
      console.log('https://webring.antaresph.dev')
      this.ringtitle = 'Pinoy Websites';
      this.url = 'https://webring.antaresph.dev';
      this.image = this.url + '/assets/images/webring-icon.png';
      this.membercount = 11;
      
      this.memberlabel = new Intl.PluralRules('en-US').select(this.membercount) === 'one'
        ? 'member'
        : 'members'

      this.refreshAttributes()

      this.shadowObj = this.attachShadow({ mode: 'open' });
      this.render();
  }

  getStyles() {
    const baseStyle = `:host {
  display: block;
}

* {
  box-sizing: border-box;
}

.webring-banner {
  font-size: 100%;
  margin   : auto;

  --space     : 1rem;
  --space-xxxl: 2rem;
  --space-xxl : 1.75rem;
  --space-xl  : 1.5rem;
  --space-l   : 1.25rem;
  --space-s   : 0.75rem;
  --space-xs  : 0.5rem;
  --space-xxs : 0.25rem;
  --space-xxxs: 0.1rem;

  --fs-5: 2.612rem;
  --fs-6: 1.306rem;
  --fs-7: 1rem;

  --fsr-5: 2.612em;
  --fsr-6: 1.306em;

  --radius-1: 2px;
  --radius-2: 4px;
  --radius-3: 8px;
  --radius-4: 16px;
  --radius-5: 32px;
}

.feather,
.feathericon {
  display        : inline-block;
  fill           : none;
  flex           : 0 0 1em;
  height         : 1em;
  min-width      : 1em;
  stroke         : currentColor;
  stroke-linecap : round;
  stroke-linejoin: round;
  stroke-width   : 2px;
  width          : 1em;
}

.webring-banner {
  background-color: hsl(var(--webring-bg));
  font-family     : var(--webring-font);
  box-shadow      :
    0 1px 2px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / var(--webring-shadow-alpha, 0.05)),
    0 2px 4px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / var(--webring-shadow-alpha, 0.05)),
    0 4px 8px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / var(--webring-shadow-alpha, 0.05)),
    0 8px 16px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / var(--webring-shadow-alpha, 0.05)),
    0 16px 32px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / var(--webring-shadow-alpha, 0.05)),
    0 32px 64px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / var(--webring-shadow-alpha, 0.05)),
    0 64px 128px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / var(--webring-shadow-alpha, 0.05)),
    0 0 1px 0 hsl(var(--webring-shadow-color, var(--webring-fg)) / 0.25);
  border-radius: var(--radius-3);
}

.webring-banner__header {
  display  : flex;
  gap      : var(--space-xxl);
  font-size: var(--fs-7);
  padding  : var(--space);
  color    : hsl(var(--webring-body-color));
  flex-wrap: wrap;
}

.webring-banner__image {
  width     : 5ch;
  height    : auto;
  align-self: center;
}

.webring-banner__description {
  flex: 1 0 min(35ch, 100%);
}

.webring-banner__title {
	margin: 0;
	line-height: 1.2;
	font-size: var(--fs-5);
	font-family: var(--webring-heading-font);
	font-weight: 700;
	font-variation-settings: 'wght' 700;
}

.webring-banner a {
  text-decoration: none;
  color          : hsl(var(--webring-accent-2));
}

.webring-banner__description a:hover {
  text-decoration: underline;
}

.webring-banner__info {
  color          : hsl(var(--webring-accent-2));
  text-decoration: none;
  border         : 3px solid hsl(var(--webring-accent-2) / 50%);
  align-self     : start;
  padding        : var(--space-xxxs) var(--space-s);
  border-radius  : 100px;
  aspect-ratio   : 1/1;
  display        : inline-flex;
  align-items    : center;
  justify-content: center;
}

.webring-banner__links {
  display        : flex;
  justify-content: space-between;
  padding        : var(--space-xxs);
  border-top     : 1px solid hsl(var(--webring-fg) / 0.133);
  margin         : 0;
  flex-wrap      : wrap;
}

.webring-banner__link {
  background-color: rgba(0, 0, 0, 0);
  border          : none;
  border-radius   : var(--radius-3);
  color           : hsl(var(--webring-accent-2));
  cursor          : pointer;
  display         : inline-flex;
  gap             : 1ch;
  font-family     : var(--webring-button-font);
  font-size       : inherit;
  flex            : 1;
  justify-content : center;
  font-weight     : 650;
  padding         : var(--space-s) var(--space-xl);
  text-decoration : none;
  line-height     : 1.15;
  transition      : background 200ms, box-shadow 200ms, text-shadow 200ms, scale 50ms;
}

.webring-banner__link:focus-visible,
.webring-banner__link:hover {
  background-color: hsl(var(--webring-accent-2) / 10%);
}`
    const theme = getTheme(this.theme)
    console.log(this.theme)
    
    return `
      <style>${baseStyle} ${theme}</style>
    `;
  }

  getTemplate() {
      return `
        ${this.getStyles()}
        <div class="webring-banner ${ this.scheme ? 'scheme-' + this.scheme : ''} ${this.theme ? 'theme-' + this.theme : ''}">
  <div class="webring-banner__header">
    <img class="webring-banner__image" src="${this.image}" alt=""/>
    <div class="webring-banner__description">
      <span>This site is part of</span>
      <h3 class="webring-banner__title">
        <a href="${this.url}">${this.ringtitle}</a>
      </h3>
      <span>A webring with ${this.membercount} ${this.memberlabel}. Have a website of your own? <a href="${this.url}">Join our webring</a>!</span>
    </div>
    <a class="webring-banner__info" href="https://en.wikipedia.org/wiki/Webring" title="What's this?">?</a>
  </div>
  <p class="webring-banner__links">
    <a href="${this.url}/previous" class="webring-banner__link webring-banner__link--prev" aria-label="Go to previous site">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
      Previous
    </a>
    <a href="${this.url}/random" class="webring-banner__link webring-banner__link--random" aria-label="Go to a random site">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shuffle"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
      Random
    </a>
    <a href="${this.url}/next" class="webring-banner__link webring-banner__link--next" aria-label="Go to next site">
      Next
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </a>
  </p>
</div>
`;
  }

  render() {
      this.shadowObj.innerHTML = this.getTemplate();
  }

  static get observedAttributes() {
    return ['scheme', 'theme']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.refreshAttributes()
    this.render()
  }

  refreshAttributes() {
    const scheme = this.getAttribute('scheme')
    const schemeIsValid = WebringBanner.SCHEMES.includes(scheme)
    this.scheme =  scheme !=  null && schemeIsValid
      ? scheme
      : ''

    const theme = this.getAttribute('theme')
    const themeIsValid = WebringBanner.THEMES.includes(theme)
    this.theme = theme != null && themeIsValid
      ? theme
      : ''

  }
}

customElements.define('webring-banner', WebringBanner);
