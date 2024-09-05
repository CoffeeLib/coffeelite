class CoffeeMath {
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

    /**
     * 
     * @param {number} x1 
     * @param {number} y1 
     * @param {number} x2 
     * @param {number} y2 
     * @returns
     */
    getDistance(x1: number, y1: number, x2: number, y2: number) {
        let distance: number = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    }
}