import React, { Component } from "react";
import { shallow } from 'enzyme';
import TutorialsList from "./list.component";


describe('list componet',()=>{

    it('TutorialsList', ()=>{
        const wrapper = <TutorialsList/>;
        expect(wrapper).toMatchSnapshot();
    });


    it('TutorialsList shallow', ()=>{
        const wrapper = shallow(<TutorialsList/>);
        expect(wrapper).toMatchSnapshot();
    });

});

