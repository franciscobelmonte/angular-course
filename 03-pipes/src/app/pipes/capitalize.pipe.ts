import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, all: boolean = true): string {
        value = value.toLowerCase();
        const parts = value.split(' ');
        if (all) {
            for (let i = 0; i < parts.length; i++) {
                parts[i] = parts[i][0].toUpperCase() + parts[i].substr(1);
            }
        } else {
            parts[0] = parts[0][0].toUpperCase() + parts[0].substr(1);
        }
        return parts.join(' ');
    }
}
