import {Sort} from '@platform-ui/table-kit';

export interface <%= classify(name) %>Request {
  page: number;
  itemsPerPage: number;
  search?: string;
  sort?: Sort;
}
