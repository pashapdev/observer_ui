import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function ButtonsBreadcrumbs(props: { links: Array<string> }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs color="white" aria-label="breadcrumb">
        <Typography sx={{ marginBottom: '5px' }} variant="h4" color="white" component="div">Observer</Typography>
        <StyledBreadcrumb component="a" href="#" label="Actions" />
        <StyledBreadcrumb component="a" href="#" label="Objects" />
      </Breadcrumbs>
    </div>
  );
}
