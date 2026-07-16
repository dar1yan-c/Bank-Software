class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="footer">
      <div class="left">
        <h3>All Rights Reserved</h3>
      </div>
      <div class="center">
        <h3>© 2026 LeaFree</h3>
      </div>
      <div class="right">
        <h4 class="footerRightTitle">Contact us:</h4>
        <ul>
          <li>
            Via
            <a href="https://www.facebook.com/profile.php?id=100012648751180"
              >Facebook</a
            >
          </li>
          <li>
            Via <a href="https://www.instagram.com/d.chochev/">Instagram</a>
          </li>
          <li>
            Call us: <a href="tel:+359 088 992 9229">+359 088 992 9229</a>
          </li>
        </ul>
      </div>
    </div>`;
  }
}

customElements.define("main-footer", MainFooter);
