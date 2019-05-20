import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlstring'
})
export class HtmlstringPipe implements PipeTransform {
  transform(htmlString: string): any {
    return htmlString.replace(/\n/g, '<br>');
  }
}
