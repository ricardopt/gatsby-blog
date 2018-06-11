import React from 'react';
import propTypes from 'prop-types';
import { default as GatsbyLink } from 'gatsby-link';

/**
 * A Link component that can accept an external url or internal path.
 *
 * Will return a Gatsby <Link> if the path is internal or a regular
 * <a href=""> if the path is external.
 *
 * @param {JSX} children The children passed into the component.
 * @param {string} className The class names passed into the component.
 * @param {bool} disabled Whether or not the link is disabled.
 * @param {func} onClick A click handler function.
 * @param {string} to A path or url.
 * @returns {JSX} A <Link> or <a href="">
 */
const Link = ({ children, className, disabled, onClick, to }) => {
	// If the `to` prop has no protocol,
	// return a Gatsby <GatsbyLink> component.
	if (to && to.indexOf('http') === -1) {
		return (
			<GatsbyLink onClick={onClick} disabled={disabled || false} className={className} to={to}>
				{children}
			</GatsbyLink>
		);
	} else if (to && to.indexOf('http') !== -1) {
		// If the `to` property exists and has a protocol,
		// return an HTML <a href="">.
		return (
			<a disabled={disabled || false} className={className} href={to} onClick={onClick}>
				{children}
			</a>
		);
	}

	return null;
};

Link.propTypes = {
	children: propTypes.node,
	className: propTypes.string,
	disabled: propTypes.bool,
	onClick: propTypes.func,
	to: propTypes.string.isRequired
};

export default Link;
