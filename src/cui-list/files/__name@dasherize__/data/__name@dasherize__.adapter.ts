import {SearchConditionFilterType, SearchRequestBodyDto} from '@platform-ui/common/api';
import {Example} from '../core/models/example';
import {<%= classify(name) %>Request} from '../core/models/<%= dasherize(name) %>-request-data';

export class <%= classify(name) %>Adapter {
  // TODO: data types
  static toModel(dto: any): Example {
    return {
      id: dto.id,
      // TODO: implement
    };
  }

  static toRequestDto(model: <%= classify(name) %>Request): SearchRequestBodyDto {
    const request: SearchRequestBodyDto = {
      conditions: [],
      orderByField: model.sort?.field ?? '',
      orderDirection: model.sort?.direction ?? 'ASC',
    };

    if (model.search) {
      request.conditions.push({
        field: 'name',
        filterType: SearchConditionFilterType.StringContains,
        substring: model.search,
      });
    }

    return request;
  }
}
