class CoffeeBrew {
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
    triangle(color: string, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.closePath();
        this.ctx.fill();
    }
}