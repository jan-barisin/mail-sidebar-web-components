class AppSidebarButton extends HTMLElement {   
    constructor() {
        super();
        const template = document.getElementById('app-sidebar-button').content;
        const shadowRoot = this.attachShadow({ mode: 'open'});
        shadowRoot.appendChild(template.cloneNode(true));
    }
    connectedCallback() {
        const unreadCount = this.getAttribute('unreadCount');
        const text = this.getAttribute('text');

        this.shadowRoot.querySelector('.unreadCount').innerHTML = unreadCount;
        this.shadowRoot.querySelector('.text').innerHTML = text;    
     }
 }

 window.customElements.define('app-sidebar-button', AppSidebarButton);