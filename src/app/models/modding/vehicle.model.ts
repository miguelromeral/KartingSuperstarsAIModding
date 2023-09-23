import { Color } from "./color.model"

export class Vehicle {

  constructor(
    public id: string,
    public materialId: string,
    public liveryColor1: Color,
    public liveryColor2: Color,
    public liveryColor3: Color,
    public liveryColor4: Color,
    public frameColor: Color,
    public metalHighlightsColor: Color,
    public wheelHubColor: Color,
    public steeringWheelColor1: Color,
    public steeringWheelColor2: Color,
    public symbol: number
  ) {}