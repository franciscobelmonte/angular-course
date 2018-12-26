import { Pipe, PipeTransform } from '@angular/core';
import { TodoList } from '../../models';

@Pipe({
  name: 'filterCompleted',
  pure: false
})
export class FilterCompletedPipe implements PipeTransform {
  
  transform(lists: TodoList[], isCompleted: boolean) {
    return lists.filter(list => {
      return list.completed === isCompleted;
    });
  }

}
