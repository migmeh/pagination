import React, { Component } from "react";
import { shallow } from 'enzyme';
import TutorialsList from "./list.component";


describe('list componet',()=>{

    it('render', ()=>{
        const wrapper = <TutorialsList/>;
        expect(wrapper).toMatchSnapshot();
    });



});

