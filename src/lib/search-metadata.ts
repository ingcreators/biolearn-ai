const TITLE_SUFFIXES = ['とは何か', 'とは', 'の使い方', 'の読み方', 'を読む'];

export function normalizeSearchTerm(term: string) {
  return term.normalize('NFKC').trim().replace(/\s+/g, ' ').toLowerCase();
}

export function getSearchSubject(title: string) {
  const normalizedTitle = title.replace(/\s+\|\s+BioLearn$/, '').trim();
  const suffix = TITLE_SUFFIXES.find(
    (suffix) =>
      normalizedTitle.length > suffix.length &&
      normalizedTitle.endsWith(suffix),
  );
  return suffix
    ? normalizedTitle.slice(0, -suffix.length).trim()
    : normalizedTitle;
}

export function getExactSearchToken(term: string) {
  const normalized = normalizeSearchTerm(term);
  let hash = 2166136261;
  for (const char of Array.from(normalized)) {
    hash ^= char.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 16777619);
  }
  const encoded = Array.from(normalized, (char) =>
    char.codePointAt(0)?.toString(36),
  ).join('x');
  return `biolearnexact${(hash >>> 0).toString(36)}x${encoded}`;
}
