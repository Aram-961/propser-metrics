import React from 'react'
import { GridComponent, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components';
const Orders = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="page" title="orders" />
            <GridComponent
                id="gridcomp"
                dataSource={ordersData}
                allowPaging
                allowSorting
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />
            </GridComponent>
        </div>
    )
}

export default Orders;