// class to create a custom error object

class CustomError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;

    }
}

module.exports = CustomError;