import { browser, by, element } from 'protractor';

export class QuizPage {

  pageUrl = `${browser.baseUrl}quiz`;

  questionTitleElement = element(by.css('app-quiz-page h2'));
  nextButtonElement = element(by.buttonText('Next'));
  finishButtonElement = element(by.buttonText('Finish'));
  answerElements = element.all(by.tagName('app-quiz-answer'));

  async navigateTo(): Promise<unknown> {
    return browser.get(this.pageUrl);
  }

  async isNextButtonEnabled(): Promise<boolean> {
    return this.nextButtonElement.isEnabled();
  }

  async selectFirstAnswer(): Promise<unknown> {
    return (await this.answerElements)[0].click();
  }

  async hasQuestionTitle(): Promise<unknown> {
    return this.questionTitleElement.isPresent();
  }

  async hasAnswers(): Promise<unknown> {
    return (await this.answerElements).length > 0;
  }

  async hasNextButton(): Promise<unknown> {
    return this.nextButtonElement.isPresent();
  }

  async clickNextButton(): Promise<unknown> {
    return this.nextButtonElement.click();
  }

  async clicFinishButton(): Promise<unknown> {
    return this.finishButtonElement.click();
  }

  async answerAllQuestionsAndFinish(): Promise<void> {
    while (await this.hasNextButton()) {
      await this.selectFirstAnswer();
      await this.clickNextButton();
    };

    await this.selectFirstAnswer();
    await this.clicFinishButton();
  }

}
