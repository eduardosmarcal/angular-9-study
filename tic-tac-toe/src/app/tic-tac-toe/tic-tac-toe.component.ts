import { Component, OnInit } from '@angular/core';

import { TicTacToeService } from './shared';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
    this.ticTacToeService.init();
  }

  /**
   * Return if the start screen should be displayed.
   *
   * @return {boolean}
   */
  get showStart(): boolean {
    return this.ticTacToeService.showStart;
  }

  /**
   * Return if the board should be displayed.
   *
   * @return {boolean}
   */
  get showBoard(): boolean {
    return this.ticTacToeService.showBoard;
  }

  /**
   * Return if the board should be displayed.
   *
   * @return {boolean}
   */
  get showEnd(): boolean {
    return this.ticTacToeService.showEnd;
  }

  /**
   * Start the game.
   *
   * @return {void}
   */
  startGame(): void {
    this.ticTacToeService.startGame();
  }

  /**
   * Make a move.
   *
   * @param {number}
   * @param {number}
   * @return {void}
   */
  play(positionX: number, positionY: number): void {
    this.ticTacToeService.play(positionX, positionY);
  }

  /**
   * Return if "X" should be displayed in the coordinates.
   *
   * @param {number}
   * @param {number}
   * @return {boolean}
   */
  displayX(positionX: number, positionY: number): boolean {
    return this.ticTacToeService.displayX(positionX, positionY);
  }

  /**
   * Return if "O" should be displayed in the coordinates.
   *
   * @param {number}
   * @param {number}
   * @return {boolean}
   */
  displayO(positionX: number, positionY: number): boolean {
    return this.ticTacToeService.displayO(positionX, positionY);
  }

  /**
   * Return if should display the victory in the coordinates.
   *
   * @param {number}
   * @param {number}
   * @return {boolean}
   */
  displayVictory(positionX: number, positionY: number): boolean {
    return this.ticTacToeService.displayVictory(positionX, positionY);
  }

  /**
   * Return the player that should play.
   *
   * @return {number}
   */
  get player(): number {
    return this.ticTacToeService.player;
  }

  /**
   * Starts a new game.
   *
   * @return {void}
   */
  newGame(): void {
    this.ticTacToeService.newGame();
  }
}
