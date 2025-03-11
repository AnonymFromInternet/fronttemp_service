# Matches

Веб-приложение для отображения киберспортивных матчей с возможностью просмотра детальной информации о командах и игроках.

## Технологический стек

| Технология | Версия
|------------|--------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) | ^19.0.0
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | ~5.7.2
| ![CSS Modules](https://img.shields.io/badge/-CSS%20Modules-000000?style=flat&logo=css3&logoColor=1572B6)
| ![UUID](https://img.shields.io/badge/-UUID-338ee8?style=flat) | ^11.1.0

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/AnonymFromInternet/fronttemp_service.git

# Перейти в директорию проекта
cd fronttemp_service

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

## Структура проекта

```
src/
├── assets/          # Шрифты и изображения
├── components/      # UI компоненты
├── constants/       # Константы проекта
├── mocks/           # Мок-данные на случай неработающего API
├── store/           # Zustand хранилище
└── types/           # TypeScript типы
```

## Известные проблемы

**Некорректные URL в API:**
Существует расхождение между URL, указанным в Swagger-документации, и фактическим URL в приложении. В настоящее время ни один из них не работает корректно. Необходимо согласовать правильный эндпоинт с бэкенд-командой.

## Лицензия

MIT

## TODO: Добавить инфо по поводу кривого урла. В сваггере он один, в ссылке он другой. В итоге ни тот ни другой не работает.
