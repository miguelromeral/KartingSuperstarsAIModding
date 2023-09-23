import { Color } from "./color.model"

export class Helmet {

    constructor(
        public id: string,
        public materialId: string,
        public visorId: string,
        public color1: Color,
        public color2: Color,
        public color3: Color,
        public color4: Color
    ) {
    }

}