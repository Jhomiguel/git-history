import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { SnakeCamelPayload } from './dto/snake-camel.dto';

@Injectable()
export class UtilService {
  fromSnakeToCamel(data: SnakeCamelPayload) {
    if (_.isArray(data)) {
      return _.map(data, (v) => this.fromSnakeToCamel(v));
    }

    if (_.isObject(data)) {
      return _(data)
        .mapKeys((v, k) => _.camelCase(k))
        .mapValues((v, k) => this.fromSnakeToCamel(v))
        .value();
    }

    return data;
  }
}
