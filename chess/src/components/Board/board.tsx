import "./board.css"
import { FaChessBishop } from "react-icons/fa";
function BoardCell({ isWhite, chessPiece }: { isWhite: boolean | undefined, chessPiece?: number }){
    console.log(chessPiece)
    return <div className={isWhite?"boardcell-white":"boardcell-black"}>
        {(chessPiece && chessPiece==3)? <FaChessBishop/>: <></>}
    </div>
}

function Board(){
    let board : number[][] = [];
    for(let i=0;i<8;i++){
        board[i] = [];
        for(let j=0; j<8; j++){
            board[i][j] = (i+j)%2;
        }
    }
    board[1][0] += 3*2;
    return <>
    <div className="board_container">
        {
            board.map(function(row){
                let e = row.map(function(ele){
                    return <BoardCell isWhite={ele%2==0} chessPiece={Math.floor(ele/2)}/>
                })
                return e;
            })
        }
    </div>
    </>
}
export default Board; 