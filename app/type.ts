export interface Cell {
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    Mines: number;
    row: number;
    col: number;
}

export interface Tuple {
    x: number;
    y: number;
}

export interface CellProps {
    cell: Cell;
    cellModifier: (x:number, y:number)=> void;
    flagModifier: (x:number, y:number)=> void;
}