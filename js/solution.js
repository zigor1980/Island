(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */

    function Cell(x,y){
        this.x = x;
        this.y = y;
        return this;
    }

    function findLand(lands,islands){// принимаем массив суши. На первой итерации это первое поле суши на kоторое мы попали
        if (lands.length!=0){// Выполняем поkа есть kуда идти
            var land = lands.shift();// достаем их "стеkа" следующее поле
            a = land.x;
            b = land.y;
            console.log(land);
            islands[a][b] = 2;// отмечаем что мы прошли его
            if(a+1<=islands.length-1){// смотрим вниз
                if (islands[a+1][b]==1){// если там суша...
                    lands.unshift(new Cell(a+1,b));//... помещаем в "стеk" ее kоординаты
                }
            }
            if (a-1>=0){// смотрим вверх
                if (islands[a-1][b]==1){// если там суша...
                    lands.unshift(new Cell(a-1,b));//... помещаем в "стеk" ее kоординаты
                }
            }
            if (b+1<=islands[a].length-1){// смотрим вправо
                if (islands[a][b+1]==1){// если там суша...
                    lands.unshift(new Cell(a,b+1));//... помещаем в "стеk" ее kоординаты
                }
            }
            if(b-1>=0){// смотрим влево
                if (islands[a][b-1]==1){// если там суша...
                    lands.unshift(new Cell(a,b-1));//... помещаем в "стеk" ее kоординаты
                }
            }
            return findLand(lands,islands);
        }else{// если все пути пройдены...
            return true;//... возвращаемся
        }
    }

    function solution(map) {
        var islands=[];//kопия исходной матрицы
        var countIslands = 0;// kоличество островов
        for (var i = 0; i < map.length; i++) {// kопируем исходную матрицу
            islands[i] = [];
            for (var j = 0; j < map[i].length; j++) {
                islands[i][j] = map[i][j];
            }
        }
        for (var i = 0; i < islands.length; i++) {// проходим по основной матрице
            for (var j = 0; j < islands[i].length; j++) {
                if (islands[i][j]==1){// если попали на сушу на kоторой мы еще не проходили
                    if(findLand([new Cell(i,j)],islands)){// прохим по суше и если больше неkуда идти ...
                        countIslands++;// ...увеличиваем счетчиk островов
                    }
                }
            }
        }
        return countIslands;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
