var jogo = []
var tabuleiro = []
var jogador = 0 // se jogador = 0 então é a vez do computador, se jogador = 1 então é a vez do jogador
var verificar
var jogando = true
var jogadaComput = 1
var quemComeça = 1
var jogada = 0


function computJoga() {
    if(jogando) {

            // ATAQUE: linha 1 
            if ((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
            }
            else if ((jogo[0][2] == "O") && (jogo[0][1] == "O") && (jogo[0][0] == "")) {
                jogo[0][0] = "O"
            }
            else if ((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")) {
                jogo[0][1] = "O"
            }

            // linha 2
            else {
                if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "O")) {
                    jogo[1][2] == "O"
                }
                else if ((jogo[1][2] == "O") && (jogo[1][1] == "O") && (jogo[1][0] == "")) {
                    jogo[1][0] = "O"
                }
                else if ((jogo[1][2] == "O") && (jogo[1][0] == "O") && (jogo[1][1] == "")) {
                    jogo[1][1] = "O"
                }

                // linha 3
                else {
                    if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")) {
                    jogo[2][2] = "O"
                    }
                    else if ((jogo[2][2] == "O") && (jogo[2][1] == "O") && (jogo[2][0] == "")) {
                    jogo[2][0] = "O"
                    }
                     else if ((jogo[2][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")) {
                    jogo[2][1] = "O"
                   }

                    // diagonal 1 
                   else {
                         if ((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")) {
                            jogo[2][2] = "O"
                         }
                         else if ((jogo[2][2] == "O") && (jogo[1][1] == "O") && (jogo[0][0] == "")) {
                            jogo[0][0] == "O"
                         }
                         else if ((jogo[2][2] == "O") && (jogo[0][0] == "O") && (jogo[1][1] == "")) {
                            jogo[1][1] = "O"
                         }

                         // diagonal 2 
                         else {
                                if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")) {
                                    jogo[2][0] = "O"
                                }
                                else if ((jogo[2][0] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")) {
                                    jogo[0][2] = "O"
                                }
                                else if ((jogo[0][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")) {
                                    jogo[1][1] = "O"
                                }

                                // coluna 1                    
                                else {
                                    if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")) {
                                        jogo[2][0] = "O"
                                    }
                                    else if ((jogo[2][0] == "O") && (jogo[1][0] == "O") && (jogo[0][0] == "")) {
                                        jogo[0][0] = "O"
                                    }
                                    else if ((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")) {
                                        jogo[1][0] = "O"
                                    }

                                    // coluna 2                         
                                    else {
                                        if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")) {
                                            jogo[2][1] = "O"
                                        }
                                        else if ((jogo[2][1] == "O") && (jogo[1][1] == "O") && (jogo[0][1] == "")) {
                                            jogo[0][1] = "O"
                                        }
                                        else if ((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")) {
                                            jogo[1][1] = "O"
                                        }

                                        // coluna 3                             
                                        else {
                                            if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")) {
                                                jogo[2][2] = "O"
                                            }
                                            else if ((jogo[2][2] == "O") && (jogo[1][2] == "O") && (jogo[0][2] == "")) {
                                                jogo[0][2] = "O"
                                            }
                                            else if ((jogo[2][2] == "O") && (jogo[0][2] == "O") && (jogo[1][2] == "")) {
                                                jogo[1][2] = "O"
                                            }

                                            // DEFESA: linha 1
                                            else {
                                
                                                if ((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")) {
                                                     jogo[0][2] = "O"
                                                }
                                                else if ((jogo[0][2] == "X") && (jogo[0][1] == "X") && (jogo[0][0] == "")) {
                                                        jogo[0][0] = "O"
                                                }
                                                else if ((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")) {
                                                         jogo[0][1] = "O"
                                                }

                                            // linha 2                                 
                                                else {
                                                    if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "X")) {
                                                        jogo[1][2] == "O"
                                                    }
                                                    else if ((jogo[1][2] == "X") && (jogo[1][1] == "X") && (jogo[1][0] == "")) {
                                                        jogo[1][0] = "O"
                                                    }
                                                    else if ((jogo[1][2] == "X") && (jogo[1][0] == "X") && (jogo[1][1] == "")) {
                                                        jogo[1][1] = "O"
                                                    }

                                                    // linha 3
                                                    else {
                                                        if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")) {
                                                            jogo[2][2] = "O"
                                                            }
                                                            else if ((jogo[2][2] == "X") && (jogo[2][1] == "X") && (jogo[2][0] == "")) {
                                                            jogo[2][0] = "O"
                                                            }
                                                             else if ((jogo[2][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")) {
                                                            jogo[2][1] = "O"
                                                           }

                                                           // coluna 1 
                                                           else {
                                                            if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")) {
                                                                jogo[2][0] = "O"
                                                            }
                                                            else if ((jogo[2][0] == "X") && (jogo[1][0] == "X") && (jogo[0][0] == "")) {
                                                                jogo[0][0] = "O"
                                                            }
                                                            else if ((jogo[0][0] == "X") && (jogo[2][0] == "X") && (jogo[1][0] == "")) {
                                                                jogo[1][0] = "O"
                                                            }

                                                            // coluna 2 
                                                            else {
                                                                if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")) {
                                                                    jogo[2][1] = "O"
                                                                }
                                                                else if ((jogo[2][1] == "X") && (jogo[1][1] == "X") && (jogo[0][1] == "")) {
                                                                    jogo[0][1] = "O"
                                                                }
                                                                else if ((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")) {
                                                                    jogo[1][1] = "O"
                                                                }

                                                                // coluna 3
                                                                else {
                                                                    if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")) {
                                                                        jogo[2][2] = "O"
                                                                    }
                                                                    else if ((jogo[2][2] == "X") && (jogo[1][2] == "X") && (jogo[0][2] == "")) {
                                                                        jogo[0][2] = "O"
                                                                    }
                                                                    else if ((jogo[2][2] == "X") && (jogo[0][2] == "X") && (jogo[1][2] == "")) {
                                                                        jogo[1][2] = "O"
                                                                    }

                                                                    // diagonal 1 
                                                                    else {
                                                                        if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")) {
                                                                            jogo[2][2] = "O"
                                                                         }
                                                                         else if ((jogo[2][2] == "X") && (jogo[1][1] == "X") && (jogo[0][0] == "")) {
                                                                            jogo[0][0] == "O"
                                                                         }
                                                                         else if ((jogo[2][2] == "X") && (jogo[0][0] == "X") && (jogo[1][1] == "")) {
                                                                            jogo[1][1] = "O"
                                                                         } 

                                                                         // diagonal 2 
                                                                         else {
                                                                            if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")) {
                                                                                jogo[2][0] = "O"
                                                                            }
                                                                            else if ((jogo[2][0] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")) {
                                                                                jogo[0][2] = "O"
                                                                            }
                                                                            else if ((jogo[0][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")) {
                                                                                jogo[1][1] = "O"
                                                                            }

                                                                            else {
                                                                                if (jogada < 8) {
                                                                                var l, c
                                                                                do {
                                                                                    l = Math.round(Math.random()*2)
                                                                                    c = Math.round(Math.random()*2)
                                                                                }
                                                                                while (jogo[l][c] != "")                                                                  
                            
                                                                                jogo[l][c] = "O"
                                                                            }
                                                                            else {
                                                                                for (var l = 0; l < 3 ; l++ ) {
                                                                                    for (var c = 0; c < 3; c++) {
                                                                                        if (jogo[l][c] == "") {
                                                                                            jogo[l][c] = "O"
                                                                                        }
                                                                                    }
                                                                                
                                                                                }
                                                                            }
                                                                            }
                                                                         }
                                                                    }
                                                                }
                                                            }
                                                           }
                                                    }
                                                }
                       
                                            }
                                        }

                                    }
                                   
                                }
                         }
            
                   }
                }
            }
            
        }

        verificar = verificaVitoria()
        if ((verificar != "") && (verificar != "DEU VELHA!")) {
            document.getElementById("jogador").innerHTML = `O vencedor foi a <strong>${verificar}<strong>`
            jogando = false
        }

        else if (verificar == "DEU VELHA!") {
            document.getElementById("jogador").innerHTML = `<strong>${verificar}<strong>`
            jogando = false
        }
    
        atualizarTabuleiro()
        jogada++
        jogador = 0
    }


function jogar(pos) {
    if ((jogando)&&(jogador == 0)) {
        switch(pos) {
            case 1:
                if (jogo[0][0] == "") {
                    jogo[0][0] = "X"
                    jogador = 1
                }
                break

                case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = "X"
                    jogador = 1
                }
                break

                case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = "X"
                    jogador = 1
                }
                break

                case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = "X"
                    jogador = 1
                }
                break

                case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = "X"
                    jogador = 1
                }
                break

                case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = "X"
                    jogador = 1
                }
                break

                case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = "X"
                    jogador = 1
                }
                break

                case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = "X"
                    jogador = 1
                }
                break

                case 9:
                if (jogo[2][2] == "") {
                    jogo[2][2] = "X"
                    jogador = 1
                }
                break
        }
        if (jogador == 1) {

        atualizarTabuleiro()
        verificar = verificaVitoria()
             if ((verificar != "") && (verificar != "DEU VELHA")) {
                document.getElementById("jogador").innerHTML = `O vencedor foi o <strong>${verificar}<strong>`
                jogando = false
            }

            else if (verificar == "DEU VELHA!") {
                document.getElementById("jogador").innerHTML = `<strong>${verificar}<strong>`
                jogando = false
            }
        
            jogada++
            computJoga()
        }
    }
}

function iniciar() {
    jogando = true
    jogadaComput = 1
    jogada = 0
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    tabuleiro = [
        [document.getElementById("pos1"),document.getElementById("pos2"),document.getElementById("pos3")],
        [document.getElementById("pos4"), document.getElementById("pos5"), document.getElementById("pos6")],
        [document.getElementById("pos7"), document.getElementById("pos8"), document.getElementById("pos9")]
    ]
    atualizarTabuleiro()

    if (quemComeça == 1) {
    quemComeça = 0
    jogador = quemComeça
    document.getElementById("jogador").innerHTML = `Quem começa o jogo é <strong>você`


    }

    else {
    quemComeça = 1
    jogador = quemComeça
    document.getElementById("jogador").innerHTML = `Quem começa o jogo é o <strong>computador`
    computJoga()
    }
}


function atualizarTabuleiro() {
    for (var l = 0 ; l < 3; l++) {
        for (var c = 0 ; c < 3 ; c++) {
            if (jogo[l][c] == "X") {
                tabuleiro[l][c].innerHTML = "X"
                tabuleiro[l][c].style.cursor = "default"
            }
            else if (jogo[l][c] == "O") {
                tabuleiro[l][c].innerHTML = "O"
                tabuleiro[l][c].style.cursor = "default"
            }
            else {
                tabuleiro[l][c].innerHTML = ""
                tabuleiro[l][c].style.cursor = "pointer"
            }
        }
    }
}


function verificaVitoria(){

    var l, c
    for (l = 0 ; l < 3; l++) {
        if ((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])) {
            return jogo[l][0]
        }
    }

    for (c = 0 ; c < 3 ; c++) {
        if ((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])) {
            return jogo[0][c]
        }
    }

    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {
        return jogo[0][0]
    }

   if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])){
    return jogo[0][2]
   }

   if (jogada == 9) {
    return "DEU VELHA!"
   }

   return ""
}
window.addEventListener("load",iniciar)