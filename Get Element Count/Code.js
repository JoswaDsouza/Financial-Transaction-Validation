function findElements(element) {
    const xpathExpression = '//*[contains(text(), "PO Number")]';
    const elements = document.evaluate(xpathExpression, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    return elements.snapshotLength;
}
