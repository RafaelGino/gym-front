import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
    itemsPerPageLabel = 'Itens por página: ';
    nextPageLabel = 'Próximo';
    previousPageLabel = 'Anterior';
    lastPageLabel = 'Última página';
    firstPageLabel = 'Primeira página';


    getRangeLabel = (page: number, pageSize: number, length: number) => {
        return ((page * pageSize) + pageSize ) < length ?
                    ((page * pageSize) + 1) + ' - ' + ((page * pageSize) + pageSize) + ' de ' + length :
                    ((page * pageSize) + 1) + ' - ' + (length) + ' de ' + length;
    }
}
