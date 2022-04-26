install: #установка зависимостей
					npm ci

publish: #публикация тестовая
					npm publish --dry-run

lint: #проверка линтером (airbnb)
					npx eslint .

brain-games: #запуск приложения
					node bin/brain-games.js

brain-even: #запуск игры brain-even
					node bin/brain-even.js

brain-calc: #запуск игры brain-calc
					node bin/brain-calc.js

brain-gcd: #запуск игры brain-gcd
					node bin/brain-gcd.js

brain-progression: #запуск игры brain-progression
					node bin/brain-progression.js