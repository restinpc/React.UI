/**
 * React.UI - Copyright component
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default ():React.ReactElement => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://10.80.131.9:8080/ui/">
            React.UI
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);
