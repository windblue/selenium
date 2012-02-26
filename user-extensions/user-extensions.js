/**
 * Get a HTMLCollection by tag name.
 * @param {String} name of a tag
 * @returns {Object} HTMLCollection
 */ 
function __getElementsByTagName(tagName) {
	return selenium.page().getDocument().getElementsByTagName(tagName);
}

/**
 * Get a HTMLElement by id.
 * @param {String} id
 * @returns {Object} HTMLElement
 */ 
function __getElementById(id) {
	return selenium.page().getDocument().getElementById(id);
}

/**
 * Get a value of a HTMLElement.
 * @param {Object} htmlElement 
 * @returns {Object} HTMLCollection
 */
function __getXmlValue(htmlElement) {
	if (! htmlElement) {
		LOG.warn('__getXmlValue : arg is NOT set');
		return false;
	}
	if (htmlElement.firstChild === null) {
		LOG.info('__getXmlValue : arg.firstChild is NULL');
		return false;
	}
	return htmlElement.firstChild.nodeValue;
}

/**
 * Get a value of an attribute in a HTMLElement by attribute name.
 * @param {String} name of attribute
 * @param {Object} htmlElement 
 * @returns {Object} HTMLCollection
 */ 
function __getXmlAttribute(attrName, htmlElement) {
	if (! htmlElement) {
		LOG.warn('__getXmlAttribute : <second-arg> is NOT set');
		return false;
	}

	if ((htmlElement.getAttribute === undefined)
		|| (typeof(htmlElement.getAttribute) !== 'function')
	) {
		LOG.warn('__getXmlAttribute : <second-arg>.getAttribute is NOT defined');
		return false;
	}
	return htmlElement.getAttribute(attrName);
}
