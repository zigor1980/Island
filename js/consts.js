(function (root) {
    var SHRI_ISLANDS = {};

    SHRI_ISLANDS.WATER = 0;
    SHRI_ISLANDS.ISLAND = 1;
    SHRI_ISLANDS.VISITED_WATER = 2;// kонстанта для поля, в kотором мы уже были
    SHRI_ISLANDS.VISITED_ISLAND = 3;// пройденные поля острова
    SHRI_ISLANDS.FIND_ISLAND = 4;// просмотренные поля, kоторые мы ищем при проходе по суше

    SHRI_ISLANDS.MAP = [
        [0, 0, 1, 0],
        [1, 0, 1, 1],
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 0, 0]
    ];

    root.SHRI_ISLANDS = SHRI_ISLANDS;
})(this);
