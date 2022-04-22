install: #установка зависимостей
					npm ci

brain-games: #запуск приложения
					node bin/brain-games.js

publish: #публикация тестовая
					npm publish --dry-run