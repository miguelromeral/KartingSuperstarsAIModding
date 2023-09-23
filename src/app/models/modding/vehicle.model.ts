import { Color } from "./color.model"

export class Vehicle {

  constructor(
    public id: string = '',
    public materialId: string = '',
    public liveryColor1: Color = new Color(),
    public liveryColor2: Color = new Color(),
    public liveryColor3: Color = new Color(),
    public liveryColor4: Color = new Color(),
    public frameColor: Color = new Color(),
    public metalHighlightsColor: Color = new Color(),
    public wheelHubColor: Color = new Color(),
    public steeringWheelColor1: Color = new Color(),
    public steeringWheelColor2: Color = new Color(),
    public symbol: number = 0
  ) {}
}