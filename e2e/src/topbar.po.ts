import { browser, by, element } from 'protractor';
import { hasClass } from './utils';

export class TopbarSection {

  topbarElement = element(by.css('app-topbar'));

  async isSticky(): Promise<unknown> {
    return await hasClass(this.topbarElement, 'sticky');
  }
}
