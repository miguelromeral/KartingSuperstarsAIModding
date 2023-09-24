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

  public toStringHex(): string {
    const rgbString = this.toString();
    // Verifica si la cadena tiene el formato correcto "rgb(r, g, b)"
    const match = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  
    if (!match) {
      throw new Error("Formato RGB no válido");
    }
  
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
  
    // Convierte los componentes RGB a valores hexadecimales
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
  
    // Combina los valores hexadecimales para formar el color hexadecimal
    const hexColor = `#${hexR}${hexG}${hexB}`;
  
    return hexColor;
  }
  
  public static MIN_VALUE = 0;
  public static MAX_VALUE = 255;
}
