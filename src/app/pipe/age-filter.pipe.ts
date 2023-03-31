import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user';

@Pipe({
  name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {

  transform(users: User[], ageLimit: number): User[] {
    return users.filter((user) => user.age >= ageLimit);
  }

}
