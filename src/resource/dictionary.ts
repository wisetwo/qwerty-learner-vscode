import { DictionaryResource } from '@/typings'

// 使用与网页版 qwerty 一样的格式，方便共享数据

// 国际考试
const internationalExam: DictionaryResource[] = [
  {
    id: 'heqiong',
    name: '何琼雅思听力必考词汇',
    description: '综合测试',
    category: '国际考试',
    tags: ['IELTS'],
    url: 'HeQiong_IELTS.json',
    length: 2536,
    language: 'en',
    languageCategory: 'en',
  }, 
  {
    id: 'ielts',
    name: 'IELTS',
    description: '雅思词库',
    category: '国际考试',
    tags: ['IELTS'],
    url: 'IELTS_3_T.json',
    length: 3575,
    language: 'en',
    languageCategory: 'en',
  },
]

const childrenEnglish: DictionaryResource[] = [
  {
    id: 'nce1',
    name: '新概念英语-1',
    description: '新概念英语第一册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: 'NCE_1.json',
    length: 900,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'nce2',
    name: '新概念英语-2',
    description: '新概念英语第二册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: 'NCE_2.json',
    length: 858,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'nce3',
    name: '新概念英语-3',
    description: '新概念英语第三册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: 'NCE_3.json',
    length: 1052,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'nce4',
    name: '新概念英语-4',
    description: '新概念英语第四册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: 'NCE_4.json',
    length: 784,
    language: 'en',
    languageCategory: 'en',
  },
]

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaries: DictionaryResource[] = [
  ...internationalExam,
  ...childrenEnglish,
]

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, DictionaryResource> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
