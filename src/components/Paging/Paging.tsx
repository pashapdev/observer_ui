import * as React from 'react';
import Button from '@mui/material/Button';

export function Paging(prop: { pageCnt: number, currentPage: number, updatePage: any }) {
    const pages = (pageCnt: number): number[] => {
        if (prop.currentPage === 0 || prop.currentPage === 1) {
            return [1, 2, 3]
        }

        if (prop.currentPage === (pageCnt - 1) || prop.currentPage === pageCnt || prop.currentPage === (pageCnt - 2)) {
            return [pageCnt - 4, pageCnt - 3, pageCnt - 2]
        }

        return [prop.currentPage - 1, prop.currentPage, prop.currentPage + 1]
    }

    const isActivePage = (page: number) => {
        if (prop.currentPage === page) {
            return "contained";
        }
        return "outlined";
    }

    return (
        <React.Fragment>
            {
                prop.pageCnt > 1 && prop.pageCnt < 4 &&
                Array.from({ length: prop.pageCnt }, (_, i) =>
                    (<Button key={i} style={{ marginLeft: '2px', marginRight: '2px', borderRadius: '20px' }} variant={isActivePage(i)} onClick={(event) => prop.updatePage(i)}>{i + 1}</Button>)
                )
            }

            {
                prop.pageCnt >= 4
                && (
                    <>
                        <Button style={{ marginLeft: '5px', borderRadius: '20px' }} variant={isActivePage(0)} key={0} onClick={(event) => prop.updatePage(0)}>{1}</Button>


                        <span style={{ marginLeft: '15px', marginRight: '15px' }}>
                            {pages(prop.pageCnt).map((page: number, index: number) =>
                                (<Button variant={isActivePage(page)} style={{ marginLeft: '2px', marginRight: '2px', borderRadius: '20px' }} key={index} onClick={(event) => prop.updatePage(page)}>{page + 1}</Button>)
                            )}
                        </span>

                        <Button style={{ borderRadius: '20px' }} variant={isActivePage(prop.pageCnt - 1)} key={prop.pageCnt} onClick={(event) => prop.updatePage(prop.pageCnt - 1)}>{prop.pageCnt}</Button>
                    </>
                )
            }
        </React.Fragment>
    );
}
