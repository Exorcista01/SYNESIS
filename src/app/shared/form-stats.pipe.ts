import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formStats'
})
export class FormStatsPipe implements PipeTransform {

  transform(value: string | number): string {
    const numValue = Number(value);

    if(numValue === 0){
      return '00'
    }

    if( numValue > 0 && numValue < 10){
      return `0${numValue}+`
    }

    return  `${numValue}+`
  }

}
