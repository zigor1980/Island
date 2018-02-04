(function (root) {
    var SHRI_ISLANDS = {};

    SHRI_ISLANDS.WATER = 0;
    SHRI_ISLANDS.ISLAND = 1;
    SHRI_ISLANDS.VISITED_WATER = 2;
    SHRI_ISLANDS.VISITED_ISLAND = 3;
    SHRI_ISLANDS.FIND_ISLAND = 4;

    SHRI_ISLANDS.MAP = [
        [0, 0, 1, 0],
        [1, 0, 1, 1],
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 0, 0]
    ];

    root.SHRI_ISLANDS = SHRI_ISLANDS;
})(this);
