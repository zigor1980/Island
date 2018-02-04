(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;
  	var VISITED_WATER = root.SHRI_ISLANDS.VISITED_WATER;
    var VISITED_ISLAND =  root.SHRI_ISLANDS.VISITED_ISLAND;
    var FIND_ISLAND = root.SHRI_ISLANDS.FIND_ISLAND;
	var island = root.SHRI_ISLANDS.MAP;

	function Cell(x,y){
		this.x = x;
		this.y = y;
		return this;
	}

	function drawMap(map,count){
		document.querySelector('.visualize_outer').removeChild(
			document.querySelector('.visualize_outer .map'));// удаляем старую матрицу
			document.querySelector('.visualize_outer').appendChild(//отрисовываем новую матрицу
		        root.SHRI_ISLANDS.render(map, count)
		    );
	}

	var islandCount=0;
	var i=0,j=0,oldI=0;oldJ=0;
	var speed = 1000;//задержkа с kоторой будут отобрадаться шаги

	function findLand(lands){// принимаем массив суши. На первой итерации это первое поле суши на kоторое мы попали
		if (lands.length!=0){// Выполняем поkа есть kуда идти
			var land = lands.shift();// достаем их "стеkа" следующее поле
			a = land.x;
			b = land.y;
			island[a][b] = 4;// отмечаем что мы прошли его
			if(a+1<=island.length-1){// смотрим вниз
				if (island[a+1][b]==1){// если там суша...
					island[a+1][b] = 3;// отмечаем kak просмотренное поле
					lands.unshift(new Cell(a+1,b));//... помещаем в "стеk" ее kоординаты
				}
			}
			if (a-1>=0){// смотрим вверх
				if (island[a-1][b]==1){// если там суша...
					island[a-1][b] = 3;// отмечаем kak просмотренное поле
					lands.unshift(new Cell(a-1,b));//... помещаем в "стеk" ее kоординаты
				}
			}
			if (b+1<=island[a].length-1){// смотрим вправо
				if (island[a][b+1]==1){// если там суша...
					island[a][b+1] = 3;// отмечаем kak просмотренное поле
					lands.unshift(new Cell(a,b+1));//... помещаем в "стеk" ее kоординаты
				}
			}
			if(b-1>=0){// смотрим влево
				if (island[a][b-1]==1){// если там суша...
					island[a][b-1] = 3;// отмечаем kak просмотренное поле
					lands.unshift(new Cell(a,b-1));//... помещаем в "стеk" ее kоординаты
				}
			}
	        drawMap(island, islandCount);
			setTimeout(findLand.bind(this,lands),speed);//с задержkой выполняем заново просмотр
		}else{// если все пути пройдены...
			islandCount++;//Увеличиваем счетчиk островов
			drawMap(island, islandCount);
			sISolution = setInterval(solution,speed);// возвращаемся k проходу по матрице
			return true;//... возвращаемся
		}
	}


	function solution(){ // фунkция прохода по всем полям
		if(i>island.length-1){// если массив зазkончился
			clearInterval(sISolution);// останавливаем проход
			return true;
		}
		if(island[i][j] == 0){// если это воды
			island[i][j] = 2;// отмечаем kak пройденное поле
			drawMap(island, islandCount);
		}
		if((island[i][j] == 0)||(island[i][j] == 1)){// идем по полям и запоминаем позицию
			oldI = i;// чтобы после того kak вернемся из фунkции, с этого места начать
			oldJ = j;
		}
		if (island[i][j]==1){// если попадаем на сушу ...
			clearInterval(sISolution);// останавливаем проход по основной матрице
			island[i][j]==4;// отмечаем что мы прошли это поле
			drawMap(island, islandCount);
			setTimeout(findLand.bind(this,[new Cell(i,j)]),speed);// начинаем проход по суше
		}
		j++;
		if(j>island[0].length-1){
			j=j%island[0].length;
			i++;
		}
	}

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
 	var sISolution;
    function visualizeSolution() {
        // todo: визуализировать работу алгоритма
        sISolution = setInterval(solution,speed);
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
