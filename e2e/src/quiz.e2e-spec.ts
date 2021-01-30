import { TopbarSection } from './topbar.po';
import { browser, logging } from 'protractor';
import { QuizPage } from './quiz.po';

describe('Quiz page', () => {
  let quizPage: QuizPage;
  let topbarSection: TopbarSection;

  beforeEach(async () => {
    quizPage = new QuizPage();
    topbarSection = new TopbarSection();

    await quizPage.navigateTo();
  });

  it('should have a sticky topbar', async () => {
    expect(await topbarSection.isSticky()).toBe(true);
  });

  it('should display a question with answers', async () => {
    expect(await quizPage.hasQuestionTitle()).toBe(true);
    expect(await quizPage.hasAnswers()).toBe(true);
    expect(await quizPage.hasNextButton()).toBe(true);
  });

  it('should enable the next button only after choosing an answer', async () => {
    expect(await quizPage.isNextButtonEnabled()).toBe(false);
    await quizPage.selectFirstAnswer();
    expect(await quizPage.isNextButtonEnabled()).toBe(true);
  });

  it('should display the results page after finishing the quiz', async () => {
    await quizPage.answerAllQuestionsAndFinish();
    expect(await browser.getCurrentUrl()).toMatch(/\/result\/\d+$/);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
