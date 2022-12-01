import type { Language } from "./types";

export function initializeLanguage(): void {
  const language = localStorage.getItem("language");

  if (language) return;

  localStorage.setItem("language", "en");
}

export function getLanguage(): Language {
  return localStorage.getItem("language") as Language ?? 'en';
}

export function setLanguage(language: Language): void {
  localStorage.setItem("language", language);
}
