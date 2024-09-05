var CoffeeBrew = /** @class */ (function () {
    /**
     *
     * @param {number} width
     * @param {number} height
     */
    function CoffeeBrew(width, height) {
        // Window properties
        this.resolutionScale = 1;
        this.window = document.createElement('canvas');
        this.ctx = this.window.getContext('2d');
        this.window.width = width;
        this.window.height = height;
        document.body.appendChild(this.window);
        this.window.style.backgroundColor = 'black';
        this.window.style.margin = 'auto';
        this.window.style.padding = '0';
        this.window.style.display = 'block';
        this.window.style.position = 'absolute';
        this.window.style.left = '0';
        this.window.style.right = '0';
        this.window.style.top = '0';
        this.window.style.bottom = '0';
        this.window.style.border = '12px solid #404040';
        this.window.style.borderRadius = '12px';
        this.window.style.height = '90%';
        this.window.style.imageRendering = 'auto';
        this.window.style.imageRendering = 'crisp-edges';
        this.window.style.imageRendering = 'pixelated';
        // Text Properties
        this.font = "32px Arial";
    }
    /**
     *
     * @param {string} color
     */
    CoffeeBrew.prototype.fill = function (color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.window.width * this.resolutionScale, this.window.height * this.resolutionScale);
    };
    /**
     *
     * @param {string} color
     * @param {number} width
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     */
    CoffeeBrew.prototype.line = function (color, x1, y1, x2, y2, width) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width * this.resolutionScale;
        this.ctx.moveTo(x1 * this.resolutionScale, y1 * this.resolutionScale);
        this.ctx.lineTo(x2 * this.resolutionScale, y2 * this.resolutionScale);
        this.ctx.stroke();
    };
    /**
     *
     * @param {string} color
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    CoffeeBrew.prototype.rect = function (color, x, y, width, height) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.resolutionScale, y * this.resolutionScale, width * this.resolutionScale, height * this.resolutionScale);
    };
    /**
     *
     * @param {string} color
     * @param {number} x
     * @param {number} y
     */
    CoffeeBrew.prototype.pixel = function (color, x, y) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.resolutionScale, y * this.resolutionScale, 1 * this.resolutionScale, 1 * this.resolutionScale);
    };
    /**
     *
     * @param {string} color
     * @param {number} x
     * @param {number} y
     * @param {number} r
     */
    CoffeeBrew.prototype.circle = function (color, x, y, r) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x * this.resolutionScale, y * this.resolutionScale, r * this.resolutionScale, 0, 2 * Math.PI);
        this.ctx.fill();
    };
    /**
     *
     * @param {string} color
     * @param {number} x
     * @param {number} y
     * @param {number} r
     * @param {number} start_a
     * @param {number} end_a
     * @param {number} width
     */
    CoffeeBrew.prototype.arc = function (color, x, y, r, start_a, end_a, width) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width * this.resolutionScale;
        this.ctx.beginPath();
        this.ctx.arc(x * this.resolutionScale, y * this.resolutionScale, r * this.resolutionScale, start_a, end_a);
        this.ctx.stroke();
    };
    /**
     *
     * @param {string} color
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     */
    CoffeeBrew.prototype.triangle = function (color, x1, y1, x2, y2, x3, y3) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.closePath();
        this.ctx.fill();
    };
    CoffeeBrew.prototype.text = function (color, x, y, text) {
        this.ctx.fillStyle = color;
        this.ctx.font = this.font;
        this.ctx.fillText(text, x, y);
    };
    return CoffeeBrew;
}());
var CoffeeInput = /** @class */ (function () {
    function CoffeeInput() {
    }
    /**
     *
     * @param {string} positive_key
     * @param {string} negative_key
     */
    CoffeeInput.prototype.getAxis = function (positive_key, negative_key) {
        var axis_value = 0;
        if (CoffeeKeys[positive_key] == true && CoffeeKeys[negative_key] == true) {
            axis_value = 0;
        }
        else if (CoffeeKeys[positive_key] == true) {
            axis_value = 1;
        }
        else if (CoffeeKeys[negative_key] == true) {
            axis_value = -1;
        }
        else if (CoffeeKeys[positive_key] == false && CoffeeKeys[negative_key] == false) {
            axis_value = 0;
        }
        return axis_value;
    };
    /**
     *
     * @param {string} positive_x
     * @param {string} negative_x
     * @param {string} positive_y
     * @param {string} negative_y
     */
    CoffeeInput.prototype.getVector = function (positive_x, negative_x, positive_y, negative_y) {
        var vector = {};
        var axis_x = this.getAxis(positive_x, negative_x);
        var axis_y = this.getAxis(positive_y, negative_y);
        vector = {
            x: axis_x,
            y: axis_y,
        };
        return vector;
    };
    return CoffeeInput;
}());
var CoffeeKeys = {};
document.addEventListener('keydown', function (event) {
    CoffeeKeys[event.key] = true;
});
document.addEventListener('keyup', function (event) {
    CoffeeKeys[event.key] = false;
});
var CoffeeMath = /** @class */ (function () {
    function CoffeeMath() {
    }
    /**
     *
     * @param {number} min
     * @param {number} max
     * @returns
     */
    CoffeeMath.prototype.randRange = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    /**
     *
     * @param {number} x
     * @param {number} y
     * @returns
     */
    CoffeeMath.prototype.normalize = function (mag_x, mag_y) {
        var length = Math.sqrt(Math.pow(mag_x, 2) + Math.pow(mag_y, 2));
        var new_vector = {
            x: mag_x / length,
            y: mag_y / length,
        };
        return new_vector;
    };
    /**
     *
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @returns
     */
    CoffeeMath.prototype.getDistance = function (x1, y1, x2, y2) {
        var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    };
    return CoffeeMath;
}());
var CoffeeSprite = /** @class */ (function () {
    /**
     *
     * @param {string} path
     * @param {number} width
     * @param {number} height
     */
    function CoffeeSprite(path, width, height) {
        this.width = width;
        this.height = height;
        this.image = new Image(this.width, this.height);
        this.image.src = path;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x
     * @param {number} y
     */
    CoffeeSprite.prototype.draw = function (ctx, x, y) {
        ctx.drawImage(this.image, x, y);
    };
    return CoffeeSprite;
}());

//Devpz :)
