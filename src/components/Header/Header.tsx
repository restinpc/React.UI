/**
 * React.UI - Header component.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import React, {
    lazy,
    Suspense
} from "react";
import classNames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import styles from "./Header.style";
import { stylesContainer } from './Header.module.less';
//------------------------------------------------------------------------------------------------------------------
// @ts-ignore
const useStyles = makeStyles(styles);
const HeaderPropTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    rightLinks: PropTypes.node,
    leftLinks: PropTypes.node,
    brand: PropTypes.any,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool,
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
};
const Logo = lazy(() => import('../Logo/Logo'));
//------------------------------------------------------------------------------------------------------------------
export default function Header(props:InferProps<typeof HeaderPropTypes>): React.ReactElement {
    document["handler"].log("Header.render()");
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        document["handler"].log("Header.handleDrawerToggle()");
        setMobileOpen(!mobileOpen);
    };
    const {
        rightLinks,
        leftLinks,
        brand,
        fixed,
        absolute
    } = props;
    const color = props.color ? props.color : "primary";
    let appBarClasses = classNames({
        [classes.appBar]: true,
        // @ts-ignore
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed,
    });
    appBarClasses += " ";
    appBarClasses += stylesContainer;
    const brandComponent = (
        <Button className={classes.title} style={{ paddingBottom: "0px" }}>
            <div style={{ fontSize: "16px", color: "#333", display: "table" }}>
                <div style={{ padding: "5px", display: "table-cell" }}>
                    <Suspense fallback={null}>
                        <Logo />
                    </Suspense>
                </div>
                <div style={{
                    padding: "5px",
                    paddingTop: "3px",
                    verticalAlign: "top",
                    display: "table-cell",
                    fontWeight: 400
                }}>
                    {brand}
                </div>
            </div>
        </Button>
    );
    return (
        <AppBar className={appBarClasses}>
            <Toolbar className={classes.container}>
                {leftLinks !== undefined ? brandComponent : null}
                <div className={classes.flex}>
                    {leftLinks !== undefined ? (
                        <Hidden smDown implementation="css">
                            { leftLinks }
                        </Hidden>
                    ) : brandComponent}
                </div>
                <Hidden smDown implementation="css">
                    {rightLinks}
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor={"right"}
                    open={mobileOpen}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={handleDrawerToggle}
                >
                    <div className={classes.appResponsive}>
                        {leftLinks}
                        {rightLinks}
                    </div>
                </Drawer>
            </Hidden>
        </AppBar>
    );
}
//------------------------------------------------------------------------------------------------------------------
Header.defaultProp = {
    color: "white"
};
Header.propTypes = HeaderPropTypes;
