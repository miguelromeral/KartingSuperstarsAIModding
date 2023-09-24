import { Injectable } from '@angular/core';
import { Color } from '../models/modding/color.model';
import { Subject } from 'rxjs';
import { Racer } from '../models/modding/racer.model';

@Injectable({
    providedIn: 'root'
})
export class JsonConverterService {

    private racerSource = new Subject<Racer>();
    racer$ = this.racerSource.asObservable();

    constructor() { }

    public updateRacer(racer: Racer){
        this.racerSource.next(racer);
    }

    // Función para obtener los valores RGB de un color en formato "rgb(r, g, b)"
    public stringToColor(hexColor: string): Color {
        // Si el valor del color es en formato hexadecimal, conviértelo a RGB decimal
        if (hexColor.startsWith("#") && (hexColor.length === 4 || hexColor.length === 7)) {
            var r, g, b;

            // Elimina el símbolo "#" si está presente
            hexColor = hexColor.replace("#", "");

            // Maneja formatos cortos y largos (#RGB y #RRGGBB)
            if (hexColor.length === 3) {
                r = parseInt(hexColor[0] + hexColor[0], 16);
                g = parseInt(hexColor[1] + hexColor[1], 16);
                b = parseInt(hexColor[2] + hexColor[2], 16);
            } else if (hexColor.length === 6) {
                r = parseInt(hexColor.slice(0, 2), 16);
                g = parseInt(hexColor.slice(2, 4), 16);
                b = parseInt(hexColor.slice(4, 6), 16);
            } else {
                // Valor de color no válido
                r = 0;
                g = 0;
                b = 0;
            }

            return new Color(r, g, b);
        } else {
            // Si el valor no es un formato hexadecimal válido, devuelve null
            return new Color(255, 255, 255);
        }
    }

    public stringToColorHex(rgbString: string): string {
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
}
