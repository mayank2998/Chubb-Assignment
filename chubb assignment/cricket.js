var cellNumber = 1;
var totalcellcountvalue = 1;
var sum = 0;
var grandTotal = 0;
var team1Score = 0;
var team2Score = 0;
var timeleft = 60;
var timer;
var momPlayer;
var momTeam;
var momScore = 0;
var scoreBoard = /** @class */ (function () {
    function scoreBoard(num) {
        this.teamNumber = num;
        this.id = num;
        this.scoreBoardElement = document.createElement('div');
        this.scoreBoardElement.className = 'd-flex justify-content-center flex-column col-lg-3';
        this.title = document.createElement('h5');
        this.title.innerHTML = "TEAM " + num + " SCORE";
        this.score = document.createElement('p');
        this.score.setAttribute("id", "sc" + num);
        this.score.innerHTML = '0';
        this.button = document.createElement('button');
        this.button.className = "btn btn-primary";
        this.button.innerHTML = "Hit " + num;
        this.button.setAttribute("id", "hit" + num);
        this.button.addEventListener("click", function () {
            var cellValue = Math.floor(Math.random() * 7);
            sum = sum + cellValue;
            if (sum > momScore) {
                if (cellNumber % 61 == 0) {
                    momPlayer = "PLAYER" + (((Math.trunc(cellNumber / 6)) + 1) % 11).toString();
                }
                else {
                    momPlayer = "PLAYER" + ((Math.trunc(cellNumber / 6)) % 11).toString();
                }
                momTeam = totalcellcountvalue > 10 ? "2" : "1";
                momScore = sum;
            }
            grandTotal = grandTotal + cellValue;
            var cell = document.getElementById(cellNumber.toString());
            cell.innerHTML = "" + cellValue;
            if (cellValue !== 0) {
                cellNumber = cellNumber + 1;
            }
            else {
                if (cellNumber % 6 == 0) {
                    cellNumber = cellNumber + 1;
                }
                else {
                    var rem = cellNumber % 6;
                    cellNumber = cellNumber + (6 - rem + 1);
                }
            }
            if (cellNumber % 6 == 1) {
                document.getElementById("total" + totalcellcountvalue).innerHTML = "" + sum;
                sum = 0;
                // let timerValue = parseInt((document.getElementById("progressBar") as HTMLInputElement).value);
                if (totalcellcountvalue % 10 == 0) {
                    document.getElementById("sc" + totalcellcountvalue / 10).innerHTML = "" + grandTotal;
                    if (totalcellcountvalue / 10 == 1) {
                        team1Score = grandTotal;
                        clearInterval(timer);
                        timers();
                    }
                    else {
                        team2Score = grandTotal;
                        clearInterval(timer);
                    }
                    var element = document.getElementById("hit" + totalcellcountvalue / 10);
                    element.disabled = true;
                    timeleft = 60;
                    document.getElementById("progressBar").innerHTML = "" + timeleft;
                    grandTotal = 0;
                }
                totalcellcountvalue = totalcellcountvalue + 1;
            }
        });
        this.scoreBoardElement.appendChild(this.title);
        this.scoreBoardElement.appendChild(this.score);
        this.scoreBoardElement.appendChild(this.button);
        var game = document.getElementById("scoreboard");
        game.appendChild(this.scoreBoardElement);
    }
    return scoreBoard;
}());
var Timer = /** @class */ (function () {
    function Timer(val) {
        this.value = val;
        this.timerElement = document.createElement('div');
        this.timerElement.className = 'd-flex justify-content-center flex-column col-lg-4';
        this.title = document.createElement('h5');
        this.title.innerHTML = "TIMER";
        this.time = document.createElement('p');
        this.time.setAttribute("id", "progressBar");
        this.time.innerHTML = "" + val;
        this.timerElement.appendChild(this.title);
        this.timerElement.appendChild(this.time);
        var game = document.getElementById("scoreboard");
        game.appendChild(this.timerElement);
    }
    return Timer;
}());
var tdNumber = 1;
var totalCellCount = 1;
var ScoreSheet2 = /** @class */ (function () {
    function ScoreSheet2(num) {
        this.teamNumber = num;
        this.scoreSheetContainer = document.createElement('div');
        this.scoreSheetContainer.className = 'col-lg-4 d-flex flex-column text-center mt-5';
        this.teamName = document.createElement('p');
        this.teamName.innerHTML = "TEAM " + this.teamNumber + " SCOREBOARD";
        this.scoreBoardContainer = document.createElement('div');
        this.scoreBoardContainer.className = 'row';
        this.table = document.createElement('table');
        this.table.className = "table table-bordered table-sm col-lg-12";
        this.thead = document.createElement('thead');
        this.tr = document.createElement('tr');
        for (var i = 0; i < 8; i++) {
            this.th = document.createElement('th');
            this.th.setAttribute("scope", "col");
            if (i == 0) {
                this.th.innerHTML = 'TEAM';
            }
            else if (i == 7) {
                this.th.innerHTML = 'TOTAL';
            }
            else {
                this.th.innerHTML = "B" + i;
            }
            this.tr.appendChild(this.th);
        }
        this.thead.appendChild(this.tr);
        this.table.appendChild(this.thead);
        this.tbody = document.createElement('tbody');
        for (var i = 1; i < 11; i++) {
            this.tr = document.createElement('tr');
            this.th = document.createElement('th');
            this.th.setAttribute("scope", "row");
            this.th.innerHTML = "PLAYER " + i;
            this.total = document.createElement('td');
            this.tr.appendChild(this.th);
            for (var j = 0; j < 6; j++) {
                this.td = document.createElement('td');
                this.td.setAttribute("id", tdNumber.toString());
                tdNumber = tdNumber + 1;
                var value;
                this.td.addEventListener("click", function () {
                    value = Math.floor(Math.random() * 7);
                    this.innerHTML = value;
                });
                this.tr.appendChild(this.td);
            }
            this.total.setAttribute("id", "total" + totalCellCount);
            totalCellCount = totalCellCount + 1;
            this.tr.appendChild(this.total);
            this.tbody.appendChild(this.tr);
        }
        this.table.appendChild(this.tbody);
        this.scoreBoardContainer.appendChild(this.table);
        this.scoreSheetContainer.appendChild(this.teamName);
        this.scoreSheetContainer.appendChild(this.scoreBoardContainer);
        var game = document.getElementById("scoreboard");
        game.appendChild(this.scoreSheetContainer);
    }
    ScoreSheet2.prototype.change = function () {
        var _this = this;
        return function () {
            if (_this.score == undefined) {
                _this.td.innerHTML = '10';
            }
            else {
                console.log(20);
            }
        };
    };
    return ScoreSheet2;
}());
var matchResult = /** @class */ (function () {
    function matchResult() {
        this.conatiner = document.createElement('div');
        this.conatiner.className = 'col-lg-3 d-flex flex-column justify-content-center';
        this.button = document.createElement('button');
        this.button.className = "btn btn-primary";
        this.button.innerHTML = 'GENERATE RESULT';
        this.button.addEventListener("click", function () {
            if (team1Score > team2Score) {
                document.getElementById("result").innerHTML = 'TEAM 1 WON';
            }
            else if (team2Score > team1Score) {
                document.getElementById("result").innerHTML = 'TEAM 2 WON';
            }
            else {
                document.getElementById("result").innerHTML = 'MATCH TIE';
            }
            document.getElementById("momPlayers").innerHTML = "" + momPlayer;
            document.getElementById("momTeams").innerHTML = "TEAM " + momTeam;
            document.getElementById("momScores").innerHTML = "SCORE : " + momScore;
        });
        this.result = document.createElement('p');
        this.result.innerHTML = 'Match Result';
        this.resultValue = document.createElement('p');
        this.resultValue.setAttribute("id", "result");
        this.mom = document.createElement('p');
        this.mom.innerHTML = 'Man Of the Match';
        this.momPlayers = document.createElement('p');
        this.momPlayers.setAttribute("id", "momPlayers");
        this.momTeams = document.createElement('p');
        this.momTeams.setAttribute("id", "momTeams");
        this.momScores = document.createElement('p');
        this.momScores.setAttribute("id", "momScores");
        this.conatiner.appendChild(this.button);
        this.conatiner.appendChild(this.result);
        this.conatiner.appendChild(this.resultValue);
        this.conatiner.appendChild(this.mom);
        this.conatiner.appendChild(this.momPlayers);
        this.conatiner.appendChild(this.momTeams);
        this.conatiner.appendChild(this.momScores);
        var game = document.getElementById("scoreboard");
        game.appendChild(this.conatiner);
    }
    return matchResult;
}());
new scoreBoard(1);
new Timer(60);
new scoreBoard(2);
new ScoreSheet2(1);
new matchResult();
new ScoreSheet2(2);
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//       if(totalcellcountvalue<=10){
//         var element = <HTMLInputElement> document.getElementById("hit1");
//         element.disabled = true;
//         totalcellcountvalue=11;
//         cellNumber=61;
//         timeleft=60;
//        clearInterval(downloadTimer);
//       }
//       else{
//         var element = <HTMLInputElement> document.getElementById("hit2");
//         element.disabled = true;
//       }
//   }
//   document.getElementById("progressBar").innerHTML =`${timeleft}`;
//   timeleft -= 1;
// }, 1000);
function timers() {
    timer = setInterval(function () {
        if (timeleft < 0) {
            if (totalcellcountvalue <= 10) {
                var element = document.getElementById("hit1");
                element.disabled = true;
                totalcellcountvalue = 11;
                cellNumber = 61;
                timeleft = 60;
                team1Score = grandTotal;
                document.getElementById("sc1").innerHTML = "" + grandTotal;
                clearInterval(timer);
                timers();
            }
            else {
                var element = document.getElementById("hit2");
                element.disabled = true;
                team2Score = grandTotal;
                document.getElementById("sc2").innerHTML = "" + grandTotal;
                clearInterval(timer);
            }
        }
        document.getElementById("progressBar").innerHTML = "" + timeleft;
        timeleft--;
    }, 1000);
}
window.onload = function () {
    timers();
};
