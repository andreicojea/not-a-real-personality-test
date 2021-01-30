import { scrollTo } from './utils';
import { TopbarSection } from './topbar.po';
import { browser, logging } from 'protractor';
import { LandingPage } from './landing.po';
import { QuizPage } from './quiz.po';

describe('Landing page', () => {
  let landingPage: LandingPage;
  let quizPage: QuizPage;
  let topbarSection: TopbarSection;

  beforeEach(async () => {
    landingPage = new LandingPage();
    quizPage = new QuizPage();
    topbarSection = new TopbarSection();

    await landingPage.navigateTo();
  });

  it('should display an intro header', async () => {
    expect(await landingPage.getTitle()).toEqual('Are you an Introvert or an Extrovert?');
    expect(await landingPage.getStartButtonText()).toEqual('Start Test');
  });

  it('should navigate to the quiz page when the start button is clicked', async () => {
    await landingPage.clickStartButton();
    expect(await browser.getCurrentUrl()).toEqual(quizPage.pageUrl);
  });

  it('should have sticky topbar when scrolling down', async () => {
    await scrollTo(0, 0);
    expect(await topbarSection.isSticky()).toBe(false);

    await scrollTo(0, 400);
    expect(await topbarSection.isSticky()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
