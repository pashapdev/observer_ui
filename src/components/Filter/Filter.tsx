import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import Stack from '@mui/material/Stack';
import { Paging } from '../Paging';

export function Filter(prop: {
    targetState: any,
    targetSearch: any
    targetNames: any,
    pageCnt: number,
    currentPage: number,
    updateFilter: any,
    updatePage: any,
    updateSearch: any,
    selectedTagsChange: any,
    buttonGroupVisibility: string[],
    refresh: any,
}
) {

    const isActive = (state: string) => {
        if (prop.targetState === state) {
            return "contained";
        }
        return "outlined";
    }

    const optionLabel = (option: any): string => {
        if (option.type && option.title) {
            return `${option.type}:${option.title}`
        }

        let val = '';
        if (option.isEqual) {
            val = `:${option.value}`
        }

        if (option.isRegex) {
            val = `:regexp(${option.value})`;
        }
        return `${option.name}${val}`
    }

    return (
        <Box>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                {prop.buttonGroupVisibility.map((button: string, index: number) => (
                    <Button key={index} variant={isActive(button)} onClick={() => prop.updateFilter(button)} >{button}</Button>
                ))}
            </ButtonGroup>

            <Paging pageCnt={prop.pageCnt} currentPage={prop.currentPage} updatePage={prop.updatePage} />


            <Stack sx={{ marginTop: "20px" }} direction="row">
                <TextField id="outlined-basic" label="Stack ID" variant="outlined" />
                <IconButton color="primary" aria-label="refresh" component="span" size="large" onClick={prop.refresh}>
                    <RefreshIcon sx={{ fontSize: 44 }} />
                </IconButton>
            </Stack>
        </Box>);
}
