import {Person} from './person';
import * as _ from 'lodash';

let foo = new Person();
foo.firstname = "Gaurav";
foo.lastname = "Kumar";
console.log(foo);

var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));
console.log('Hi');