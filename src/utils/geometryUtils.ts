// Geometry utility functions for calculations and transformations

/**
 * Calculates the area of a rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} The area of the rectangle.
 */
function calculateRectangleArea(width, height) {
    return width * height;
}

/**
 * Translates a point by a given offset.
 * @param {Object} point - The original point.
 * @param {number} offsetX - The offset in the x direction.
 * @param {number} offsetY - The offset in the y direction.
 * @returns {Object} The new point after translation.
 */
function translatePoint(point, offsetX, offsetY) {
    return {
        x: point.x + offsetX,
        y: point.y + offsetY
    };
}

/**
 * Rotates a point around the origin by a specified angle.
 * @param {Object} point - The point to rotate.
 * @param {number} angle - The angle in degrees.
 * @returns {Object} The new point after rotation.
 */
function rotatePoint(point, angle) {
    const radians = (Math.PI / 180) * angle;
    return {
        x: point.x * Math.cos(radians) - point.y * Math.sin(radians),
        y: point.x * Math.sin(radians) + point.y * Math.cos(radians)
    };
}

// Exporting functions for use in other modules
module.exports = {
    calculateRectangleArea,
    translatePoint,
    rotatePoint
};