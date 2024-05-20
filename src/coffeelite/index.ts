class Brew {
    public window: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public resolutionScale: number;

    /**
     *
     * @param {number} width
     * @param {number} height
     */
    constructor(width: number, height: number) {
        this.resolutionScale = 1;

        this.window = document.createElement('canvas') as HTMLCanvasElement;
        this.ctx = this.window.getContext('2d')! as CanvasRenderingContext2D;

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
    }

    /**
     *
     * @param {string} color
     */
    fill(color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            0,
            0,
            this.window.width * this.resolutionScale,
            this.window.height * this.resolutionScale
        );
    }

    /**
     *
     * @param {string} color
     * @param {number} width
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     */
    line(
        color: string,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        width?: number
    ) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width * this.resolutionScale;

        this.ctx.moveTo(x1 * this.resolutionScale, y1 * this.resolutionScale);
        this.ctx.lineTo(x2 * this.resolutionScale, y2 * this.resolutionScale);

        this.ctx.stroke();
    }

    /**
     *
     * @param {string} color
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    rect(color: string, x: number, y: number, width: number, height: number) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            x * this.resolutionScale,
            y * this.resolutionScale,
            width * this.resolutionScale,
            height * this.resolutionScale
        );
    }

    /**
     *
     * @param {string} color
     * @param {number} x
     * @param {number} y
     */
    pixel(color: string, x: number, y: number) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            x * this.resolutionScale,
            y * this.resolutionScale,
            1 * this.resolutionScale,
            1 * this.resolutionScale
        );
    }
    /**
     *
     * @param {string} positive_key
     * @param {string} negative_key
     */
    getAxis(positive_key: string, negative_key: string) {
        let axis_value: number = 0;

        if (Keys[positive_key] == true && Keys[negative_key] == true) {
            axis_value = 0;
        } else if (Keys[positive_key] == true) {
            axis_value = 1;
        } else if (Keys[negative_key] == true) {
            axis_value = -1;
        } else if (Keys[positive_key] == false && Keys[negative_key] == false) {
            axis_value = 0;
        }

        return axis_value;
    }

    /**
     *
     * @param {string} positive_x
     * @param {string} negative_x
     * @param {string} positive_y
     * @param {string} negative_y
     */
    getVector(
        positive_x: string,
        negative_x: string,
        positive_y: string,
        negative_y: string
    ) {
        let vector: Object = {};

        let axis_x: number = this.getAxis(positive_x, negative_x);
        let axis_y: number = this.getAxis(positive_y, negative_y);

        vector = {
            x: axis_x,
            y: axis_y,
        };

        return vector;
    }

    /**
     *
     * @param {string} color
     * @param {number} x
     * @param {number} y
     * @param {number} r
     */
    circle(color: string, x: number, y: number, r: number) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(
            x * this.resolutionScale,
            y * this.resolutionScale,
            r * this.resolutionScale,
            0,
            2 * Math.PI
        );
        this.ctx.fill();
    }

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
    arc(
        color: string,
        x: number,
        y: number,
        r: number,
        start_a: number,
        end_a: number,
        width?: number
    ) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width * this.resolutionScale;

        this.ctx.beginPath();
        this.ctx.arc(
            x * this.resolutionScale,
            y * this.resolutionScale,
            r * this.resolutionScale,
            start_a,
            end_a
        );
        this.ctx.stroke();
    }
}

class Sprite {
    public image: HTMLImageElement;
    public width: number;
    public height: number;

    /**
     *
     * @param {string} path
     * @param {number} width
     * @param {number} height
     */
    constructor(path: string, width: number, height: number) {
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
    draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.drawImage(this.image, x, y);
    }
}

class MathE {
    /**
     *
     * @param {number} min
     * @param {number} max
     * @returns
     */
    randRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     * @returns
     */
    normalize(mag_x: number, mag_y: number) {
        let length: number = Math.sqrt(mag_x ** 2 + mag_y ** 2);
        let new_vector: Object = {
            x: mag_x / length,
            y: mag_y / length,
        };

        return new_vector;
    }
}

let Keys: Object = {};

document.addEventListener('keydown', function (event) {
    Keys[event.key] = true;
});

document.addEventListener('keyup', function (event) {
    Keys[event.key] = false;
});
