import { browser, by, element } from 'protractor';

export class LandingPage {

  titleElement = element(by.css('app-intro-header h1'));
  startButtonElement = element(by.css('app-intro-header a[app-button]'));

  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitle(): Promise<string> {
    return this.titleElement.getText();
  }

  async getStartButtonText(): Promise<string> {
    return this.startButtonElement.getText();
  }

  async clickStartButton(): Promise<unknown> {
    return this.startButtonElement.click();
  }

}
