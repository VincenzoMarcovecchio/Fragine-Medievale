import { DEFAULT_LOCALE } from 'core/config';
import { Locale } from 'types/app';

const BASE_LOCALE = DEFAULT_LOCALE;

const merge = (a: any, b: any) => {
  if ('attributes' in a) {
    return {
      attributes: { ...a.attributes, ...(b.attributes || {}) },
      react: b.react || a.react
    };
  }

  return { ...a, ...b };
};

export const getContent = <T>(
  collection: string,
  slug: string,
  locale?: Locale | null,
  extension = 'md'
): T => {
  if (locale) {
    const base = require(`content/${collection}/${BASE_LOCALE}/${slug}.${extension}`);
    let translation = {};

    try {
      translation = require(`content/${collection}/${locale}/${slug}.${extension}`);
    } catch (err) {
      console.error(`Missing ${locale} translations for ${collection}.${slug}`);
    }

    return merge(base, translation);
  }

  return require(`content/${collection}/${slug}.${extension}`);
};
