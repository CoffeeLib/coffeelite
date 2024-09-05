class CoffeeSprite {
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