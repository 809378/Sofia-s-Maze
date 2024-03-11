function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbors = function () {
        var neighbors = [];

        var top = grid[index(i, j - 1)];
        var right = grid[index(i + 1, j)];
        var bottom = grid[index(i, j + 1)];
        var left = grid[index(i - 1, j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            var r = Math.floor(Math.random() * neighbors.length);
            return neighbors[r];
        } else {
            return undefined;
        }
    };

    this.highlight = function () {
        var x = this.i * w;
        var y = this.j * w;
        context.fillStyle = 'rgba(0, 0, 255, 0.1)';
        context.fillRect(x, y, w, w);
    };

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        context.strokeStyle = '#fff';
        context.beginPath();
        if (this.walls[0]) {
            context.moveTo(x, y);
            context.lineTo(x + w, y);
        }
        if (this.walls[1]) {
            context.moveTo(x + w, y);
            context.lineTo(x + w, y + w);
        }
        if (this.walls[2]) {
            context.moveTo(x + w, y + w);
            context.lineTo(x, y + w);
        }
        if (this.walls[3]) {
            context.moveTo(x, y + w);
            context.lineTo(x, y);
        }
        context.stroke();

        if (this.visited) {
            context.fillStyle = 'rgb(173, 216, 230)';
            context.fillRect(x, y, w, w);
        }
    };
}