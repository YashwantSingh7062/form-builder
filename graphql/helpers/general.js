exports.asyncWrapper = (f) => {
    return async function () {
        try {
            return await f.apply(this, arguments);
        } catch (e) {
            throw new Error(e.message)
        }
    }
}