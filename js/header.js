class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="header">
      <nav>
        <ul>
          <li>
            <a href="home.html"
              ><img
                src="/picsForTheProject/LeaFreeLogoName.png"
                alt="logo"
                class="logoImg"
            /></a>
          </li>
          <li>
            <a href="transactions.html" id="header-text" class="transactions">Transactions</a>
          </li>
          <li>
            <a href="depositWithdraw.html" id="header-text"
              class="deposit-withdraw">Deposit/Withdraw</a
            >
          </li>
          <li><a href="login.html" id="header-text"
            class="login-signup">Log In/Sign Up</a></li>
        </ul>
      </nav>
    </div>`;
  }
}
customElements.define("main-header", MainHeader);
