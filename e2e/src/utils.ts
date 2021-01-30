import { browser, ElementFinder } from 'protractor';

export const scrollTo = async (x: number, y: number): Promise<unknown> => {
  await browser.executeScript(`window.scrollTo(${x}, ${y})`);
  return browser.waitForAngular();
};

export const hasClass = async (elementFinder: ElementFinder, className: string): Promise<boolean> => {
  const classAttr = await elementFinder.getAttribute('class');
  const allClasses = classAttr.trim().split(/\s+/);
  return allClasses.includes(className);
};

