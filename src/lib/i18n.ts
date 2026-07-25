import type { Locale } from '../types/i18n';
import { zh } from '../data/i18n/zh';
import { en } from '../data/i18n/en';
import site from '../data/site.json';

export const locales = ['zh', 'en'] as const;
export const defaultLocale: Locale = 'zh';

const dictionaries = { zh, en } as const;

export function isLocale(value: string | undefined): value is Locale {
  return value === 'zh' || value === 'en';
}

export function getLocaleFromUrl(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment === 'en' ? 'en' : 'zh';
}

export function t(locale: Locale) {
  return dictionaries[locale];
}

export function brandName(locale: Locale): string {
  return locale === 'zh' ? site.brand.zh : site.brand.en;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`.replace(/\/+/g, '/');
  if (locale === defaultLocale) {
    return clean === '//' ? '/' : clean;
  }
  if (clean === '/') return '/en/';
  return `/en${clean}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const current = getLocaleFromUrl(pathname);
  let path = pathname;

  if (current === 'en') {
    path = pathname.replace(/^\/en(\/|$)/, '/') || '/';
  }

  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;

  return localizedPath(target, path);
}

export function alternateUrls(pathname: string): { zh: string; en: string } {
  const base = site.domain.replace(/\/$/, '');
  const zhPath = switchLocalePath(pathname, 'zh');
  const enPath = switchLocalePath(pathname, 'en');
  return {
    zh: `${base}${zhPath === '/' ? '/' : zhPath}`,
    en: `${base}${enPath}`,
  };
}
