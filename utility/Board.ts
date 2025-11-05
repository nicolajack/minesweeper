import {Cell} from "@/app/type";

const createGrid=(height: number, width: number, mines: number): Cell[][]=>{
    const grid: Cell[][] =[];
    for(let x=0; x<height; x++){
        const row: Cell[] = [];
        for (let y=0; y<width; y++){
            row.push({
                row: x,
                col: y,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                Mines: 0,
            })
        }
        grid.push(row);
    }
    const mine = [];
    for (let i=0; i < mines; i++){
        const place = Math.floor(Math.random() * height * width);
        const x = Math.floor(place/width);
        const y = place % width;
        if (!grid[x][y].isMine){
            grid[x][y].isMine = true;
            mine.push([x,y]);
        } else {
            i--;
        }
    }
    const directions = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]
    for (const m of mine){
        const mx = m[0];
        const my = m[1];
        for (const dir of directions){
            const newx = mx + dir[0];
            const newy = my + dir[1];
            if (newx >= 0 && newx < height && newy < width && newy >= 0){
                grid[newx][newy].Mines += 1;
            }
        }
    }
    return grid;
}