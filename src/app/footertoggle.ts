export class FooterToggle {
  public displaySocial = 'false';

  public toggleFooter() {
    if (this.displaySocial === 'false') {
      this.displaySocial = 'true';
    } else {
      this.displaySocial = 'false';
    }
  }
}
