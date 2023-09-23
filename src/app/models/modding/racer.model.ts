import { Color } from "./color.model";
import { DriverSkin } from "./driver-skin.model";
import { Helmet } from "./helmet.model";
import { Vehicle } from "./vehicle.model";

export class Racer {

    constructor(
        public racerName: string = '',
        public driverSkin: DriverSkin = new DriverSkin(),
        public color1: Color = new Color(),
        public color2: Color = new Color(),
        public color3: Color = new Color(),
        public color4: Color = new Color(),
        public helmet: Helmet = new Helmet(),
        public idleAnimation: string = '',
        public celebrationAnimation: string = '',
        public vehicles = [new Vehicle()]
    ) { 
    }

}
