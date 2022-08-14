import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "@inertiajs/inertia-react";

Button.PropTypes = {
    type:PropTypes.oneOf(["button","submit","reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary","warning","danger","light-outline","white-outline"]),
    processing:PropTypes.bool,
    children:PropTypes.node
};

export default function Button(
    { type = 'submit', className = '', processing, children, variant="primary" }) {
    return (
        <button
            type={type}
            className={
               `rounded-2xl w-full py-[13px] text-center ${processing && "opacity-30"} btn-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
