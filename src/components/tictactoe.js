import React from 'react'
import logo from "./logo.svg";

class Grid extends React.Component{
    play = async(event) => {
        // eslint-disable-next-line no-restricted-globals
        let id_div = event.target.id - 1;
        let node_length = document.getElementsByClassName("column");
        let x = 0;
        let o = 0;
        for (let i = 0; i < node_length.length; i++) {
            for (let j = 0; j < node_length.length; j++) {
                if (node_length[j].textContent === "X") {
                    x++;
                }
                if (node_length[j].textContent === "O") {
                    o++;
                }
            }
        }
            function player_won(argument) {
                let htag = document.createElement('h3')
                let winner = document.getElementById('won')
                if (winner.childElementCount >= 1) {
                    console.log(winner.childElementCount)
                } else {
                    console.log(winner.childElementCount)
                    htag.innerHTML = argument
                    return winner.appendChild(htag);
                }

            }
            function player_2_move(argument, arry) {
                let check_1 = [0, 4].every((checker) => {
                    return argument.includes(checker);
                });
                let check_2 = [2, 4].every((checker) => {
                    return argument.includes(checker);
                });
                let check_3 = [0, 1].every((checker) => {
                    return argument.includes(checker);
                });
                let check_4 = [3, 4].every((checker) => {
                    return argument.includes(checker);
                });
                let check_5 = [6, 7].every((checker) => {
                    return argument.includes(checker);
                });
                let check_6 = [0, 3].every((checker) => {
                    return argument.includes(checker);
                });
                let check_7 = [1, 4].every((checker) => {
                    return argument.includes(checker);
                });
                let check_8 = [2, 5].every((checker) => {
                    return argument.includes(checker);
                });
                let check_9 = [4, 8].every((checker) => {
                    return argument.includes(checker);
                });
                let check_10 = [4, 6].every((checker) => {
                    return argument.includes(checker);
                });
                let check_11 = [1, 2].every((checker) => {
                    return argument.includes(checker);
                });
                let check_12 = [4, 5].every((checker) => {
                    return argument.includes(checker);
                });
                let check_13 = [7, 8].every((checker) => {
                    return argument.includes(checker);
                });
                let check_14 = [3, 6].every((checker) => {
                    return argument.includes(checker);
                });
                let check_15 = [4, 7].every((checker) => {
                    return argument.includes(checker);
                });
                let check_16 = [5, 8].every((checker) => {
                    return argument.includes(checker);
                });
                let check_17 = [0, 8].every((checker) => {
                    return argument.includes(checker);
                });
                let check_18 = [2, 6].every((checker) => {
                    return argument.includes(checker);
                });
                let check_19 = [0, 2].every((checker) => {
                    return argument.includes(checker);
                });
                let check_20 = [3, 5].every((checker) => {
                    return argument.includes(checker);
                });
                let check_21 = [6, 8].every((checker) => {
                    return argument.includes(checker);
                });
                let check_22 = [0, 6].every((checker) => {
                    return argument.includes(checker);
                });
                let check_23 = [1, 7].every((checker) => {
                    return argument.includes(checker);
                });
                let check_24 = [2, 8].every((checker) => {
                    return argument.includes(checker);
                });
                switch (true) {
                    case check_1: // if (x === 'value1')
                        if (node_length[8].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [8].appendChild(document.createTextNode("O"));
                            arry.push(8)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_2: // if (x === 'value2')
                        if (node_length[6].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [6].appendChild(document.createTextNode("O"));
                            arry.push(6)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_3: // if (x === 'value1')
                        if (node_length[2].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [2].appendChild(document.createTextNode("O"));
                            arry.push(2)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_4: // if (x === 'value2
                        if (node_length[5].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [5].appendChild(document.createTextNode("O"));
                            arry.push(5)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_5: // if (x === 'value1')
                        if (node_length[8].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [8].appendChild(document.createTextNode("O"));
                            arry.push(8)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_6: // if (x === 'value2
                        if (node_length[6].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [6].appendChild(document.createTextNode("O"));
                            arry.push(6)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_7: // if (x === 'value1')
                        if (node_length[7].textContent === "") {
                            console.log("7")
                            document.getElementsByClassName("column")
                            [7].appendChild(document.createTextNode("O"));
                            arry.push(7)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_8: // if (x === 'value2
                        if (node_length[8].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [8].appendChild(document.createTextNode("O"));
                            arry.push(8)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_9: // if (x === 'value1')
                        if (node_length[0].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [0].appendChild(document.createTextNode("O"));
                            arry.push(0)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_10: // if (x === 'value1')
                        if (node_length[7].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [7].appendChild(document.createTextNode("O"));
                            arry.push(7)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_11: // if (x === 'value1')
                        if (node_length[0].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [0].appendChild(document.createTextNode("O"));
                            arry.push(0)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_12: // if (x === 'value1')
                        if (node_length[3].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [3].appendChild(document.createTextNode("O"));
                            arry.push(3)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_13: // if (x === 'value1')
                        if (node_length[6].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [6].appendChild(document.createTextNode("O"));
                            arry.push(6)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_14: // if (x === 'value1')
                        if (node_length[0].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [0].appendChild(document.createTextNode("O"));
                            arry.push(0)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_15: // if (x === 'value1')
                        if (node_length[1].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [1].appendChild(document.createTextNode("O"));
                            arry.push(1)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_16: // if (x === 'value1')
                        if (node_length[2].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [2].appendChild(document.createTextNode("O"));
                            arry.push(2)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }

                    case check_17: // if (x === 'value1')
                        if (node_length[4].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [4].appendChild(document.createTextNode("O"));
                            arry.push(4)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_18: // if (x === 'value1')
                        if (node_length[4].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [4].appendChild(document.createTextNode("O"));
                            arry.push(4)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_19: // if (x === 'value1')
                        if (node_length[1].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [1].appendChild(document.createTextNode("O"));
                            arry.push(1)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_20: // if (x === 'value1')
                        if (node_length[4].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [4].appendChild(document.createTextNode("O"));
                            arry.push(4)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false

                        }
                    case check_21: // if (x === 'value1')
                        if (node_length[7].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [7].appendChild(document.createTextNode("O"));
                            arry.push(7)
                            console.log(arry)
                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_22: // if (x === 'value1')
                        if (node_length[3].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [3].appendChild(document.createTextNode("O"));
                            arry.push(3)
                            console.log(arry)

                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_23: // if (x === 'value1')
                        if (node_length[4].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [4].appendChild(document.createTextNode("O"));
                            arry.push(4)
                            console.log(arry)

                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                    case check_24: // if (x === 'value1')
                        if (node_length[5].textContent === "") {
                            console.log("is this working?")
                            document.getElementsByClassName("column")
                            [5].appendChild(document.createTextNode("O"));
                            arry.push(5)
                            console.log(arry)

                            return (true, check_winner(arry, "Player O won!"))
                        } else {
                            return false
                        }
                        default:
                            return false
                    }
            }
            function check_winner(argument, playerwon) {
                let check_1 = [0, 4, 8].every((checker) => {
                    return argument.includes(checker);
                });
                let check_2 = [2, 4, 6].every((checker) => {
                    return argument.includes(checker);
                });
                let check_3 = [0, 1, 2].every((checker) => {
                    return argument.includes(checker);
                });
                let check_4 = [3, 4, 5].every((checker) => {
                    return argument.includes(checker);
                });
                let check_5 = [6, 7, 8].every((checker) => {
                    return argument.includes(checker);
                });
                let check_6 = [0, 3, 6].every((checker) => {
                    return argument.includes(checker);
                });
                let check_7 = [1, 4, 7].every((checker) => {
                    return argument.includes(checker);
                });
                let check_8 = [2, 5, 8].every((checker) => {
                    return argument.includes(checker);
                });
                switch (true) {
                    case check_1: // if (x === 'value1')
                        return player_won(playerwon);
                    case check_2: // if (x === 'value2')
                        return player_won(playerwon);
                    case check_3: // if (x === 'value1')
                        return player_won(playerwon);
                    case check_4: // if (x === 'value2
                        return player_won(playerwon);
                    case check_5: // if (x === 'value1')
                        return player_won(playerwon);
                    case check_6: // if (x === 'value2
                        return player_won(playerwon);
                    case check_7: // if (x === 'value1')
                        return player_won(playerwon);
                    case check_8: // if (x === 'value2
                        return player_won(playerwon);
                    }
            }
            let array_x = [];
            let array_y = [];
            function lastCheck(){
                let won = document.getElementById('won');
                if(won.childElementCount === 0){
                    player_won("TIE")
                }
            }
            // eslint-disable-next-line
            if (x > o && player_2_move(array_x, array_y) !== true) {
                function randomizer(){ 
                let randomize = Math.floor(Math.random() * node_length.length);
                if(node_length[randomize].textContent !== "" && array_y.length <= 3){
                    for(let i = 0; i < 1; i++){
                        let count = 0
                        for(let m = 0; m < node_length.length; m++){
                            if(node_length[m].textContent !== ""){
                                count++
                            }
                        }
                        console.log(count)
                        if(count === 9){
                            return (
                                check_winner(array_y, "Player O won!"), check_winner(array_x, "Player X won!"),
                                setTimeout(()=>{lastCheck()}, 500)
                                )
                        }
                        else{
                            return randomizer()
                        }
                    }
                }
                if(node_length[randomize].textContent === ""){
                    return document.getElementsByClassName("column")
                    [randomize].appendChild(document.createTextNode("O"));
                }
                }
                randomizer()
                for (let k = 0; k < node_length.length; k++) {
                    if (node_length[k].textContent === "X") {
                        array_x.push(k);
                    }
                    if (node_length[k].textContent === "O") {
                        array_y.push(k);
                    }
                }
                console.log(array_x);
                check_winner(array_y, "Player O won!");
                check_winner(array_x, "Player X won!");
            }
            // eslint-disable-next-line
            if ((x === 0 && o === 0) || (x === o && node_length[id_div].textContent === "")) {
                document.getElementsByClassName("column")
                [id_div].appendChild(document.createTextNode("X"));
                for (let k = 0; k < node_length.length; k++) {
                    if (node_length[k].textContent === "X") {
                        array_x.push(k);
                    }
                    if (node_length[k].textContent === "O") {
                        array_y.push(k);
                    }
                }
                if(player_2_move(array_x, array_y) === true){
                    console.log("FIRST")
                    console.log(array_y + "this is the test after")
                    check_winner(array_y, "Player O won!");
                    check_winner(array_x, "Player X won!");
                    console.log(array_y + "this is the test after")
                    this.play(event);
                }
                else{ 
                    console.log("SECOND")
                    this.play(event)
            }
            }
    };
    render() {
        return (
            <div className="tictactoe">
                <div
                    className="column"
                    id={this.props.num[0]}
                    play
                    ={this.props.player_won}
                    onClick={this.play}></div>
                <div className="column" id={this.props.num[1]} onClick={this.play}></div>
                <div className="column" id={this.props.num[2]} onClick={this.play}></div>
            </div>
        );
    }
}

class ScoreBoard extends Grid {
    render() {
        return (
            <div className="scores">
                <div className="title">
                    <h3>Winner:</h3>
                </div>
                <div className="won" id="won"></div>
            </div>
        );
    }
}
class TicTacToe extends Grid {
    render() {
        return (
            <div className="TicTacToe" id="TicTacToe">
                <i onClick={()=>{
                    let x = document.getElementById('TicTacToe');
                    let button = document.getElementById('btn')
                    x.style.animation = 'popGrid2reverse 1s normal forwards ease-out'
                    button.style.pointerEvents = 'none'
                    x.onanimationend = ()=>{
                        x.style.animation = 'none'
                        x.style.display = 'none'
                        button.style.pointerEvents = 'auto'
                    }
                }} class="fi-xwluxl-times-wide"></i>
                <header className="TicTacToe2">
                    <div className="logodiv">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                </header>
                    <div className="container">
                        <ScoreBoard/>
                        <div className="columncontainer">
                            <Grid num={[1, 2, 3]}/>
                            <Grid num={[4, 5, 6]}/>
                            <Grid num={[7, 8, 9]}/>
                        </div>
                        <button onClick={()=>{
                        let node_length = document.getElementsByClassName("column");
                        for(let k = 0; k < node_length.length; k++){
                            node_length[k].textContent = "";
                        }
                        let won = document.getElementById('won');
                        if(won.childElementCount > 0){ 
                        won.removeChild(won.firstChild)
                        }
                        }}>Start Over!</button>
                    </div>
            </div>
        );
    }
}
export default TicTacToe;