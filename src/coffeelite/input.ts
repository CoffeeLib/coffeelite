class CoffeeInput {
    /**
     *
     * @param {string} positive_key
     * @param {string} negative_key
     */
    getAxis(positive_key: string, negative_key: string) {
        let axis_value: number = 0;

        if (CoffeeKeys[positive_key] == true && CoffeeKeys[negative_key] == true) {
            axis_value = 0;
        } else if (CoffeeKeys[positive_key] == true) {
            axis_value = 1;
        } else if (CoffeeKeys[negative_key] == true) {
            axis_value = -1;
        } else if (CoffeeKeys[positive_key] == false && CoffeeKeys[negative_key] == false) {
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
}

let CoffeeKeys: Object = {};

document.addEventListener('keydown', function (event) {
    CoffeeKeys[event.key] = true;
});

document.addEventListener('keyup', function (event) {
    CoffeeKeys[event.key] = false;
});