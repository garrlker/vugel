import { Container } from "../Container";
import { Shader as Tree2dShader } from "tree2d";
import { Constructor } from "tree2d/lib/util/types";

export class Shader extends Container {
    set type(v: Constructor<Tree2dShader>) {
        this.el.shader = new v(this.stage.context);
    }

    set options(v: Record<string, any>) {
        const keys = Object.keys(v);
        keys.forEach((key: string) => {
            (this.el.shader as any)[key] = v[key];
        });
    }
}