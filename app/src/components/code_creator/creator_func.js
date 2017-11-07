import React from 'react'
import './creator.css'
import CodeCreator from './creator'
import CreatorTabs from './creator_tabs'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

export default function(){
    return(
        <div>
            <CreatorTabs />

        </div>
    )
}