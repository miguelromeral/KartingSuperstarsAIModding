export class Color {
  public r: number;
  public g: number;
  public b: number;

  constructor(r: number = Color.MAX_VALUE, g: number = Color.MAX_VALUE, b: number = Color.MAX_VALUE) {
    this.r = r;
    this.g = g;
    this.b = b
  }

  public toString(): string {
    return `rgb(${this.r},${this.g},${this.b})`;
  }

  
  public static MIN_VALUE = 0;
  public static MAX_VALUE = 255;
}
