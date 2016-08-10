"use strict";

/**
internal factory
@param {string} - the error message that will be caught by API gateway regex
@param {number} - html error code
@return {function}
*/

function errorFactory (error, status) {
	/**
	exported function
	This function optionnally injects and object into the error response
	@param {Object}
	@return {string}
	*/
	return function error (obj) {
		return JSON.stringify(Object.assign({
			error: error,
			status: status
		}, obj));
	};
}

module.exports = {
	badRequest: errorFactory("Bad Request", 400),
	unauthorized: errorFactory("Unauthorized", 401),
	forbidden: errorFactory("Forbidden", 403),
	notFound: errorFactory("Not Found", 404),
	internal: errorFactory("Internal Server Error", 500)
}