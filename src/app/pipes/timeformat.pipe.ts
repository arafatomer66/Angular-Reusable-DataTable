import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeformat'
})
export class TimeformatPipe implements PipeTransform {

  transform(time: any) {

    if (time != null) {

      let hour = (time.split(':'))[0]
      let min = (time.split(':'))[1]
      let part = hour > 12 ? 'PM' : 'AM';
      min = (min + '').length == 1 ? `0${min}` : min;
      hour = hour > 12 ? `0${hour - 12}` : hour;
      hour = (hour + '').length == 1 ? `0${hour}` : hour;
      return `${hour}:${min} ${part}`
    }

  }

}
