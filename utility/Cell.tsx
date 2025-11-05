import {CellProps} from "@/app/type"

const CellComponent = ({prop}: {prop: CellProps})=> {
    const {cell, cellModifier, flagModifier} = prop;
    const cellClick = (e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        e.stopPropagation();
        if(!cell.isRevealed && !cell.isFlagged){
            cellModifier(cell.row, cell.col);
        }
    }
    const flagClick= (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        if (!cell.isRevealed && !cell.isFlagged){
            flagModifier(cell.row, cell.col);
        }
    }
    return(
        <div className="bg-[url(./cell.png)]"></div>
    )
}