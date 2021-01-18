/**
 * React.UI - Application stylesheets.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

const drawerWidth = 260;

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
const container = {
    ...conatinerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    },
    "@media (min-width: 1400px)": {
        maxWidth: "1340px"
    }
};

const boxShadow = {
    boxShadow:
        "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const card = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
};

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
};

const primaryColor = "#008040";
const warningColor = "#3bc6ca";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#5fb4c9";
const roseColor = "#e91e63";

const title = {
    color: "#fff",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Open Sans", "Times New Roman", serif`
};

export {
    drawerWidth,
    transition,
    container,
    conatinerFluid,
    boxShadow,
    card,
    defaultFont,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    title,
};
