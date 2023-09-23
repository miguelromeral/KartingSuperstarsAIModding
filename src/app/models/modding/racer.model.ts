import { Color } from "./color.model";
import { DriverSkin } from "./driver-skin.model";
import { Helmet } from "./helmet.model";
import { Vehicle } from "./vehicle.model";

export class Racer {

    constructor(
        public racerName: string,
        public driverSkin: DriverSkin,
        public color1: Color,
        public color2: Color,
        public color3: Color,
        public color4: Color,
        public helmet: Helmet,
        public idleAnimation: string,
        public celebrationAnimation: string,
        public vehicles: Vehicle[]
    ) { }

}
