/**
 * React.UI - Application loader.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

export default class AppLoader {
    load_state: number;
    target_state: number;
    root_opacity: number;
    load_interval: number | null;
    timeout: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor() {
        document["handler"].log("AppLoader.constructor()");
        this.load_state = 0;
        this.target_state = 1;
        this.root_opacity = 0.0;
        this.load_interval = null;
        this.timeout = window.setTimeout(() => {
            document["handler"].error("AppLoader.constructor() -> Connection timeout");
            document["handler"].throw("timeout");
        }, 10000);
    }
    //------------------------------------------------------------------------------------------------------------------
    load(sender:string): void {
        document["handler"].log(`AppLoader.load(${sender})`);
        try {
            if (this.load_state < this.target_state) {
                this.load_state += 1;
                if (this.load_state === this.target_state) {
                    window.clearTimeout(this.timeout);
                    this.load_interval = window.setInterval(() => {
                        this.root_opacity = 1;
                        const root = document.getElementById("root");
                        if (root) {
                            root.style.opacity = (this.root_opacity).toString();
                            if (this.root_opacity >= 1) {
                                if (root.childNodes.length > 0
                                    // @ts-ignore
                                    && root.childNodes[0].className === "wrapper") {
                                    document.body.style.background = "#fff";
                                    root.style.background = "#fff";
                                }
                                // @ts-ignore
                                window.clearInterval(this.load_interval);
                            }
                        }
                    }, 1);
                }
            }
        } catch (e) { /* ... */ }
    }
}
