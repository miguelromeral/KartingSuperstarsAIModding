import { Color } from "./color.model";

export class DriverSkin {

    constructor(
        public id: string = '',
        public materialId: string = '',
        public color1: Color = new Color(),
        public color2: Color = new Color(),
        public color3: Color = new Color(),
        public color4: Color = new Color()
    ) { }

}
