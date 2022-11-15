import * as React from 'react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Object, Filter } from './../../components';

import { filteredObjectsAtom } from '../../_state/objects';
import { useObjectsAction } from '../../_actions/objects';
import { history } from '../../_helpers';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import moment from 'moment';

export function Objects(prop: { }) {
    return (
        <React.Fragment>
          <Filter
            targetState={null}
            targetSearch={""}
            pageCnt={0}
            currentPage={0}
            targetNames={[]}
            updateFilter={null}
            updatePage={() => { }}
            updateSearch={null}
            selectedTagsChange={null}
            buttonGroupVisibility={["RUNNING", "STARTING", "ERROR"]}
            refresh={null}/>
    
    
            <Object
              key={1}/>
        </React.Fragment>
      );
}
