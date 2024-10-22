// class apiError extends Error {
//     constructor(statusCode, message, error, stack) {
//         super(message);
//         this.statusCode = statusCode;
//         this.data = null;
//         this.message = message;
//         this.success = false;
//         this.error = error;

//         if (stack) {
//             this.stack = stack;
//         } else {
//             Error.captureStackTrace(this, this.constructor);
//         }
//     }
// }

// export { apiError };

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) =>
            next(err)
        );
    };
};

export { asyncHandler };
