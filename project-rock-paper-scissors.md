Joe wants to facilitate a competition between two or more automated-players in 
some variations of the Rock-Paper-Scissors game.

These univeral rules always hold
- On each move, a player have to play a rock, paper, or scissors.
- Rock beats scissors, scissors beats paper, and paper beats rock.

On top of the universal rules, a competition can introduce additional rules.
For examples,
1. Each player plays 10 turns in the competition.
2. Different scoring mechanism -- winning two consequtive turns scores more, and the player who score 100 points first wins.
3. The competition takes 100 turns to complete, but each player can only play rock at most 20 times.
4. The competition is participated by more than two players.

In a competition,
- A player should be notified before the competition begins.
- On each turn, a player should be given access to the history of the game so that the player can look up the previous moves of 
all players.
- A player should be notified when the competition has ended.

Each player has a name and a short description.

Joe also wishes to have a function `compete(competition, players)` that he can call to carry out a competitions. 
 

In particular, he wishes
to be able to carry out a competition by
```
  // Code that instantiate a competition class and the player classes
  competition = new SomeCompetition(...)
  players[0] = new Type_1_Player(...)
  players[1] = new Type_2_Player(...)

  // Code to carry out the competition and output the result
  
```


implement different types of player and different types of competition as classes 

-----------------------------






### Extension
A game made up of rounds of games

A player should get notified before every round begins
