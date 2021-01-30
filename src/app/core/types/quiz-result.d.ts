import { PersonalityType } from '../enums/personality-type.enum';

export interface QuizResult {
  id: number;
  personalityType: PersonalityType;
  scaleValue: number;
}
