import React, { Component } from 'react';
import './creator.css'

import CreatorInput from './creator'
import DECRYPT from '../decrypt/decrypt'



class Creator_tabs extends Component {
    constructor() {
        super();

        this.state = {
            tab1: true,
            tab2: false

        }
    }
    changeTab(){
        this.setState({
            tab1: !this.state.tab1,
            tab2: !this.state.tab2
        })
    }

    render() {
        return (
            <div>
                <div className='creator-tabs-nav-container'>
                    <div className='header-app-explanation'>To get started, type the message that you want to encrypt below, then click the encrypt button. If you received an encrypted message, type the message in the Decryptor tab.</div>
                    <div className='selector-tabs-cont'>
                        <div className={this.state.tab1 ? 'creator-tabs-nav-item-true' : 'creator-tabs-nav-item-false'} onClick={() => { this.changeTab() }}>Encrypt</div>
                        <div className='creator-tabs-nav-spacer'></div>
                        <div className={this.state.tab2 ? 'creator-tabs-nav-item-true' : 'creator-tabs-nav-item-false'} onClick={() => { this.changeTab() }}>Decrypt</div>
                    </div>
                </div>
                {this.state.tab1
                    ? <CreatorInput />
                    : <DECRYPT />
                }


            </div>
        )
    }
}

export default Creator_tabs;