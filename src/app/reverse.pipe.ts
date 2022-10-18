import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var result="";
    for(var i=result.length-1;i>=0;i--){
      result+=value[i];
    }

    return result ;
  }

}
