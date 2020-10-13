# 👯‍♂️ Pair-programming interview

## Task
The purpose of this exercise is to build a bowling score calculator in a TDD (Test Driven Development) environment. We will first start of with a simple test scenario and slowly increment the difficulty of the test scenarios as we build in the complexities of the rules of bowling.

We do not expect you to finish the task. We want to see how well you are able to work whilst pairing, explaining your ideas and methods as we progress through the task. Please feel free to ask questions throughout the exercise.

If you do not know how the bowling scores are calculated, do not worry, we can work through it together. Once again, the focus is on your problem solving skills and not how fast you can complete the task.

## Installation
```sh
yarn
```

## Rules of bowling

The game consists of 10 frames as shown above. In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll. So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.

### Example scoreboard
![Example Scoreboard](https://github.com/alexwong-crc/bowlingTask/blob/master/exampleBowlingScore.png)