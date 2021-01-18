/**
 * React.UI - Runtime debugger.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import * as React from "react";

class ErrorHandler {
    rootComponent:string;
    errorState:boolean;
    traceStack:string[];
    //------------------------------------------------------------------------------------------------------------------
    constructor(rootComponent:string) {
        this.rootComponent = rootComponent;
        this.errorState = false;
        this.traceStack = [];
    }
    //------------------------------------------------------------------------------------------------------------------
    // eslint-disable-next-line class-methods-use-this
    notFound(): () => React.ReactElement {
        return () => <div>Page not found</div>;
    }
    //------------------------------------------------------------------------------------------------------------------
    log(text:string):void {
        this.traceStack.push(`${new Date().toLocaleString()} $ ${JSON.stringify(text)}`);
        if (process.env.NODE_ENV !== "test") console.log(text);
    }
    //------------------------------------------------------------------------------------------------------------------
    info(text:string):void {
        this.traceStack.push(`${new Date().toLocaleString()} @ ${JSON.stringify(text)}`);
        if (process.env.NODE_ENV !== "test") console.info(text);
    }
    //------------------------------------------------------------------------------------------------------------------
    warn(text:string):void {
        this.traceStack.push(`${new Date().toLocaleString()} ! ${JSON.stringify(text)}`);
        if (process.env.NODE_ENV !== "test") console.warn(text);
    }
    //------------------------------------------------------------------------------------------------------------------
    debug(text:string):void {
        this.traceStack.push(`${new Date().toLocaleString()} ~ ${JSON.stringify(text)}`);
        if (process.env.NODE_ENV !== "test") console.debug(text);
    }
    //------------------------------------------------------------------------------------------------------------------
    error(text:string):void {
        this.traceStack.push(`${new Date().toLocaleString()} # ${JSON.stringify(text)}`);
        if (process.env.NODE_ENV !== "test") console.error(text);
    }
    //------------------------------------------------------------------------------------------------------------------
    throw(text:string):void {
        this.traceStack.push(`${new Date().toLocaleString()} % ${JSON.stringify(text)}`);
        if (process.env.NODE_ENV !== "test") console.error(text);
        const target = document.getElementById(this.rootComponent) as HTMLElement;
        target.style.position = "fixed";
        target.style.top = "0px";
        target.style.left = "0px";
        target.style.right = "0px";
        target.style.bottom = "0px";
        target.style.display = "block";
        target.style.opacity = "1";
        // target.style.backgroundImage = 'url(\'\')';
        target.innerHTML = "&nbsp;";
        target.style.backgroundPosition = "center center";
        target.style.backgroundSize = "cover";
    }
}

export default ErrorHandler;
