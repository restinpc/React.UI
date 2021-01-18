/**
 * React.UI - Logo factory function.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import React, { CSSProperties } from 'react';
import Logo from '../../images/logo.svg';

export default ({
    style,
    className,
}: {
    style?: CSSProperties;
    className?: string;
}): React.ReactElement => (
    <Logo className={className} style={style} />
);
