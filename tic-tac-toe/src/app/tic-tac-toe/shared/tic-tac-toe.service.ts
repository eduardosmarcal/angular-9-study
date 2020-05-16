import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly BOARD_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: number[][];
  private qtyMoves: number;
  private victory: any;

  private _player: number;
  private _showStart: boolean;
  private _showBoard: boolean;
  private _showEnd: boolean;

  constructor() { }

  /**
   * Initialize the game.
   *
   * @return {void}
   */
  init(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showEnd = false;
    this.qtyMoves = 0;
    this._player = this.X;
    this.victory = false;
    this.initBoard();
  }

  /**
   * Initialize the game board by setting all positions to EMPTY.
   *
   * @return {void}
   */
  initBoard(): void {
    const arrEmpties = [this.EMPTY, this.EMPTY, this.EMPTY];
    this.board = arrEmpties.map(item => [...arrEmpties]);
  }

  /**
   * Return if the start screen should be displayed.
   *
   * @return {boolean}
   */
  get showStart(): boolean {
    return this._showStart;
  }

  /**
   * Return if the board should be displayed.
   *
   * @return {boolean}
   */
  get showBoard(): boolean {
    return this._showBoard;
  }

  /**
   * Return if the board should be displayed.
   *
   * @return {boolean}
   */
  get showEnd(): boolean {
    return this._showEnd;
  }

  /**
   * Return the player that should play.
   *
   * @return {number}
   */
  get player(): number {
    return this._player;
  }

  /**
   * Start the game.
   *
   * @return {void}
   */
  startGame(): void {
    this._showStart = false;
    this._showBoard = true;
  }

  /**
   * Make a move.
   *
   * @param {number} positionX
   * @param {number} positionY
    *@return {void}
   */
  play(positionX: number, positionY: number): void {
    if (this.board[positionX][positionY] !== this.EMPTY || this.victory) {
      return;
    }

    this.board[positionX][positionY] = this._player;
    this.qtyMoves++;
    this.victory = this.gameOver(positionX, positionY, this.board, this._player);
    this.changePlayer();

    if (!this.victory && this.qtyMoves < 9) {
      this.aiPlay();
    }

    if (this.victory) {
      this._showEnd = true;
    }

    if (!this.victory && this.qtyMoves === 9) {
      this._player = 0;
      this._showEnd = true;
    }
  }

  /**
   * Check if the game over.
   *
   * @param {number} row
   * @param {number} column
   * @param {number[][]} board
   * @param {number} player
   * @return {boolean | number[][]}
   */
  gameOver(row: number, column: number, board: number[][], player: number): boolean | number[][] {
    let end: boolean | number[][] = false;

    if (board[row][0] === player &&
        board[row][1] === player &&
        board[row][2] === player
    ) {
      end = [[row, 0], [row, 1], [row, 2]];
    }

    if (board[0][column] === player &&
        board[1][column] === player &&
        board[2][column] === player
    ) {
      end = [[0, column], [1, column], [2, column]];
    }

    if (board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
    ) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if (board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
    ) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;
  }

  /**
   * Computer play.
   *
   * @return {void}
   */
  aiPlay(): void {
    let move: number[] = this.getMove(this.O);

    if (move.length <= 0) {
      move = this.getMove(this.X);
    }

    if (move.length <= 0) {
      const moves: number[][] = [];
      for (let i = 0; i < this.BOARD_SIZE; i++) {
        for (let j = 0; j < this.BOARD_SIZE; j++) {
          if (this.board[i][j] === this.EMPTY) {
            moves.push([i, j]);
          }
        }
      }
      const k = Math.floor((Math.random() * (moves.length - 1)));
      move = [moves[k][0], moves[k][1]];
    }

    this.board[move[0]][move[1]] = this._player;
    this.qtyMoves++;
    this.victory = this.gameOver(move[0], move[1], this.board, this._player);
    this.changePlayer();
  }

  /**
   * Change the player.
   *
   * @return {void}
   */
  changePlayer(): void {
    this._player = this._player === this.X ? this.O : this.X;
  }

  /**
   * Return a possible move.
   *
   * @param {number} player
   * @return {number[]}
   */
  getMove(player: number): number[] {
    let board = this.board;
    for (let row = 0; row < this.BOARD_SIZE; row++) {
      for (let column = 0; column < this.BOARD_SIZE; column++) {
        if (board[row][column] !== this.EMPTY) {
          continue;
        }
        board[row][column] = player;
        if (this.gameOver(row, column, board, player)) {
          return [row, column];
        }
        board[row][column] = this.EMPTY;
      }
    }
    return [];
  }

  /**
   * Return if "X" should be displayed in the coordinates.
   *
   * @param {number} positionX
   * @param {number} positionY
   * @return {boolen}
   */
  displayX(positionX: number, positionY: number): boolean {
    return this.board[positionX][positionY] === this.X;
  }

  /**
   * Return if "O" should be displayed in the coordinates.
   *
   * @param {number} positionX
   * @param {number} positionY
   * @return {boolen}
   */
  displayO(positionX: number, positionY: number): boolean {
    return this.board[positionX][positionY] === this.O;
  }

  /**
   * Return if should display the victory in the coordinates.
   *
   * @param {number} positionX
   * @param {number} positionY
   * @return {boolean}
   */
  displayVictory(positionX: number, positionY: number): boolean {
    let displayVictory: boolean = false;

    if (!this.victory) {
      return displayVictory;
    }

    for (let position of this.victory) {
      if (position[0] === positionX && position[1] === positionY) {
        displayVictory = true;
        break;
      }
    }

    return displayVictory;
  }

  /**
   * Starts a new game.
   *
   * @return {void}
   */
  newGame(): void {
    this.init();
    this._showEnd = false;
    this._showStart = false;
    this._showBoard = true;
  }
}
