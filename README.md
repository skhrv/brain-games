# Учебный проект "Brain games" 
[![Maintainability](https://api.codeclimate.com/v1/badges/398175ef41ee4165bd16/maintainability)](https://codeclimate.com/github/skhrv/project-lvl1-s284/maintainability) [![Build Status](https://travis-ci.org/skhrv/project-lvl1-s284.svg?branch=master)](https://travis-ci.org/skhrv/project-lvl1-s284)

## Описание
В рамках проекта необходимо было реализовать набор мини-игр, запускаемых из консоли. Эти игры похожи на то, что обычно называют "Brain Games". Для победы в игре необходимо верно ответить на 3 вопроса подряд.

#### Пример вывода в консоль игры brain-progression
```
Welcome to the Brain Game!
What number is missing in this progression?

May I have your name? John
Hello, John!

Question: 14 .. 18 20 22 24 26 28
Your answer: 16
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24
Correct!
Congratulations, John!
```

## Установка
```
npm install brain-games-skhrv -g
```
## Список игр:

### brain-even
запуск игры:
```
brain-even
```
Answer "yes" if number even otherwise answer "no".
```
Question: 15
Your answer: no
Correct!
```


### brain-calc
запуск игры:
```
brain-calc
```
What is the result of the expression?
```
Question: 4 + 10
Your answer: 14
Correct!
```
### brain-gcd
запуск игры:
```
brain-gcd
```
Find the greatest common divisor of given numbers.
```
Question: 25 50
Your answer: 25
Correct!
```

### brain-balance
запуск игры:
```
brain-balance
```
Balance the given number.
```
Question: 215
Your answer: 233
Correct!
```
### brain-progression
запуск игры:
```
brain-progression
```
What number is missing in this progression?
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
```
### brain-prime
запуск игры:
```
brain-prime
```
Is this number prime? 
```
Question: 7
Your answer: yes
Correct!
