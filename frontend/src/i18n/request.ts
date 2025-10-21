import {getRequestConfig} from 'next-intl/server';
import { Locale, routing } from './routing';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

type Messages = Record<string, Record<string, string>>;

const messageMap: Record<string, Messages> = {
  en: enMessages,
  de: deMessages,
};

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
	locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messageMap[locale] || messageMap[routing.defaultLocale]
  };
});
