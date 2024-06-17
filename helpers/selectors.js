const getTestDataElement = (page, value) => {
    return page.locator(`[data-test="${value}"]`);
};

module.exports = { getTestDataElement };
