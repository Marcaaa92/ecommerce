import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})


export class FilterArrayPipe implements PipeTransform {

  transform(array: any[], value: string, key: string): any[] {
    if (value === "") 
        return array
    return array.filter( v => v[key] == value)
  }

}
