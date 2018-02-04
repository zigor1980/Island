(function (root) {
    var map = root.SHRI_ISLANDS.MAP;
    var count = root.SHRI_ISLANDS.solution(map);

    document.querySelector('.outer').appendChild(
        root.SHRI_ISLANDS.render(map, count)
    );
    document.querySelector('.visualize_outer').appendChild(
        root.SHRI_ISLANDS.render(map, 0)
    );
    var vis = root.SHRI_ISLANDS.visualizeSolution();
})(this);
