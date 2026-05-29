export const LEARNING_PROGRESS_STORAGE_KEY = 'biolearn:learning-progress:v1';

export interface QuizChoiceSnapshot {
  id: string;
  text: string;
}

export interface QuizQuestionSnapshot {
  id: string;
  question: string;
  choices: QuizChoiceSnapshot[];
  correctChoice: string;
  explanation: string;
}

export interface QuizQuestionProgress extends QuizQuestionSnapshot {
  attempts: number;
  correct: boolean;
  lastChoice: string;
  wrongCount: number;
  needsReview: boolean;
  lastAnsweredAt: string;
}

export interface LessonProgress {
  lessonId: string;
  path: string;
  title: string;
  lastAnsweredAt: string;
  latestScore: number;
  bestScore: number;
  totalQuestions: number;
  completed: boolean;
  questions: Record<string, QuizQuestionProgress>;
}

export interface LearningProgressData {
  version: 1;
  lessons: Record<string, LessonProgress>;
}

export interface QuizAnswerInput {
  question: QuizQuestionSnapshot;
  choiceId: string;
}

export interface RecordQuizAttemptInput {
  lessonId: string;
  path: string;
  title: string;
  totalQuestions: number;
  answers: QuizAnswerInput[];
}

export interface ReviewQuestion extends QuizQuestionProgress {
  lessonId: string;
  lessonTitle: string;
  lessonPath: string;
}

export type LessonProgressStatus =
  | 'not-started'
  | 'in-progress'
  | 'completed'
  | 'review';

export interface LessonProgressSummary {
  status: LessonProgressStatus;
  label: string;
  detail: string;
  lesson?: LessonProgress;
}

export interface LearningProgressStore {
  read(): LearningProgressData;
  getLesson(lessonId: string): LessonProgress | undefined;
  getLessonByPath(path: string): LessonProgress | undefined;
  getLessons(): LessonProgress[];
  getLessonSummary(path: string): LessonProgressSummary;
  getReviewQuestions(): ReviewQuestion[];
  markLessonCompleted(input: {
    lessonId: string;
    path: string;
    title: string;
  }): LessonProgress;
  recordQuizAttempt(input: RecordQuizAttemptInput): LessonProgress;
  recordQuestionReview(input: {
    lessonId: string;
    path: string;
    title: string;
    question: QuizQuestionSnapshot;
    choiceId: string;
  }): LessonProgress;
  clearLesson(lessonId: string): void;
  clearAll(): void;
}

const createEmptyData = (): LearningProgressData => ({
  version: 1,
  lessons: {},
});

export const lessonIdFromPath = (path: string) =>
  path
    .split('#')[0]
    .split('?')[0]
    .replace(/^\/|\/$/g, '')
    .replaceAll('/', '-');

const canUseLocalStorage = () =>
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export class LocalLearningProgressStore implements LearningProgressStore {
  read(): LearningProgressData {
    if (!canUseLocalStorage()) return createEmptyData();

    const rawValue = window.localStorage.getItem(LEARNING_PROGRESS_STORAGE_KEY);
    if (!rawValue) return createEmptyData();

    try {
      const parsedValue = JSON.parse(rawValue) as LearningProgressData;
      if (parsedValue.version !== 1 || !parsedValue.lessons) {
        return createEmptyData();
      }

      return parsedValue;
    } catch {
      return createEmptyData();
    }
  }

  getLesson(lessonId: string) {
    return this.read().lessons[lessonId];
  }

  getLessonByPath(path: string) {
    return this.getLesson(lessonIdFromPath(path));
  }

  getLessons() {
    return Object.values(this.read().lessons).sort((a, b) =>
      b.lastAnsweredAt.localeCompare(a.lastAnsweredAt),
    );
  }

  getLessonSummary(path: string): LessonProgressSummary {
    const lesson = this.getLessonByPath(path);
    if (!lesson) {
      return {
        status: 'not-started',
        label: '未学習',
        detail: 'まだ学習履歴はありません。',
      };
    }

    const reviewCount = Object.values(lesson.questions).filter(
      (question) => question.needsReview,
    ).length;

    if (reviewCount > 0) {
      return {
        status: 'review',
        label: '復習あり',
        detail: `${reviewCount}問の復習があります。`,
        lesson,
      };
    }

    if (lesson.completed) {
      return {
        status: 'completed',
        label: '学習済',
        detail:
          lesson.totalQuestions > 0
            ? `前回 ${lesson.latestScore}/${lesson.totalQuestions}問、最高 ${lesson.bestScore}/${lesson.totalQuestions}問`
            : 'この記事は学習済みです。',
        lesson,
      };
    }

    return {
      status: 'in-progress',
      label: '学習中',
      detail:
        lesson.totalQuestions > 0
          ? `前回 ${lesson.latestScore}/${lesson.totalQuestions}問`
          : 'この記事は学習中です。',
      lesson,
    };
  }

  getReviewQuestions() {
    return this.getLessons().flatMap((lesson) =>
      Object.values(lesson.questions)
        .filter((question) => question.needsReview)
        .map((question) => ({
          ...question,
          lessonId: lesson.lessonId,
          lessonTitle: lesson.title,
          lessonPath: lesson.path,
        })),
    );
  }

  markLessonCompleted(input: {
    lessonId: string;
    path: string;
    title: string;
  }) {
    const data = this.read();
    const completedAt = new Date().toISOString();
    const previousLesson = data.lessons[input.lessonId];

    const nextLesson: LessonProgress = {
      lessonId: input.lessonId,
      path: input.path,
      title: input.title,
      lastAnsweredAt: completedAt,
      latestScore: previousLesson?.latestScore ?? 0,
      bestScore: previousLesson?.bestScore ?? 0,
      totalQuestions: previousLesson?.totalQuestions ?? 0,
      completed: true,
      questions: previousLesson?.questions ?? {},
    };

    data.lessons[input.lessonId] = nextLesson;
    this.write(data);

    return nextLesson;
  }

  recordQuizAttempt(input: RecordQuizAttemptInput) {
    const data = this.read();
    const answeredAt = new Date().toISOString();
    const previousLesson = data.lessons[input.lessonId];
    const previousQuestions = previousLesson?.questions ?? {};
    const nextQuestions = { ...previousQuestions };
    let latestScore = 0;

    for (const answer of input.answers) {
      const isCorrect = answer.choiceId === answer.question.correctChoice;
      const previousQuestion = previousQuestions[answer.question.id];

      if (isCorrect) latestScore += 1;

      nextQuestions[answer.question.id] = {
        ...answer.question,
        attempts: (previousQuestion?.attempts ?? 0) + 1,
        correct: isCorrect,
        lastChoice: answer.choiceId,
        wrongCount: (previousQuestion?.wrongCount ?? 0) + (isCorrect ? 0 : 1),
        needsReview: !isCorrect,
        lastAnsweredAt: answeredAt,
      };
    }

    const nextLesson: LessonProgress = {
      lessonId: input.lessonId,
      path: input.path,
      title: input.title,
      lastAnsweredAt: answeredAt,
      latestScore,
      bestScore: Math.max(previousLesson?.bestScore ?? 0, latestScore),
      totalQuestions: input.totalQuestions,
      completed: input.answers.length >= input.totalQuestions,
      questions: nextQuestions,
    };

    data.lessons[input.lessonId] = nextLesson;
    this.write(data);

    return nextLesson;
  }

  recordQuestionReview(input: {
    lessonId: string;
    path: string;
    title: string;
    question: QuizQuestionSnapshot;
    choiceId: string;
  }) {
    const data = this.read();
    const answeredAt = new Date().toISOString();
    const previousLesson = data.lessons[input.lessonId];
    const previousQuestions = previousLesson?.questions ?? {};
    const previousQuestion = previousQuestions[input.question.id];
    const isCorrect = input.choiceId === input.question.correctChoice;
    const nextQuestions = {
      ...previousQuestions,
      [input.question.id]: {
        ...input.question,
        attempts: (previousQuestion?.attempts ?? 0) + 1,
        correct: isCorrect,
        lastChoice: input.choiceId,
        wrongCount: (previousQuestion?.wrongCount ?? 0) + (isCorrect ? 0 : 1),
        needsReview: !isCorrect,
        lastAnsweredAt: answeredAt,
      },
    };

    const nextLesson: LessonProgress = {
      lessonId: input.lessonId,
      path: previousLesson?.path ?? input.path,
      title: previousLesson?.title ?? input.title,
      lastAnsweredAt: answeredAt,
      latestScore: previousLesson?.latestScore ?? (isCorrect ? 1 : 0),
      bestScore: previousLesson?.bestScore ?? (isCorrect ? 1 : 0),
      totalQuestions: previousLesson?.totalQuestions ?? 1,
      completed: previousLesson?.completed ?? true,
      questions: nextQuestions,
    };

    data.lessons[input.lessonId] = nextLesson;
    this.write(data);

    return nextLesson;
  }

  clearLesson(lessonId: string) {
    const data = this.read();
    delete data.lessons[lessonId];
    this.write(data);
  }

  clearAll() {
    this.write(createEmptyData());
  }

  private write(data: LearningProgressData) {
    if (!canUseLocalStorage()) return;
    window.localStorage.setItem(
      LEARNING_PROGRESS_STORAGE_KEY,
      JSON.stringify(data),
    );
    window.dispatchEvent(new CustomEvent('biolearn-progress-updated'));
  }
}

export const createLearningProgressStore = (): LearningProgressStore =>
  new LocalLearningProgressStore();
