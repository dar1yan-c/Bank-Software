class LoggedInHeader extends HTMLElement {
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
          <li><a href="userPage.html" id="header-text"
            class="login-signup">Username</a></li>
        </ul>
      </nav>
    </div>`;
  }
}
customElements.define("loggedIn-header", LoggedInHeader);
