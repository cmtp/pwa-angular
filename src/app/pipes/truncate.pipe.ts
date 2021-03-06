import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limitOld: string): string {
    let limit = parseInt(limitOld);
    return value.length > limit ? value.substring(0, limit) + '...': value;
  }

}
