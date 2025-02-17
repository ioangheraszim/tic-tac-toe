// Gameboard object using module patern
const Gameboard = (function () {
    let board = ["","","","","","","","","",];

    const getBoard = () => board;

    const updateBoard = (index, mark) => {
        if(board[index] === ""){
            board[index] = mark;
        }
    }

    return {getBoard, updateBoard};
})();