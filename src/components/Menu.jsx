import React, { useState } from 'react';
import PageSection from './PageSection';
import { Button } from 'react-scroll';
import pdf from '../assets/SEMTMENU.pdf';


function Menu() {
    const openPdfInNewTab = () => {
        window.open({pdf});
    };

    return (
        <PageSection
            name="MENU"
        >
            <button
            onClick={openPdfInNewTab}>BURAYA TIKLA</button>
        </PageSection >

    )
}


export default Menu;