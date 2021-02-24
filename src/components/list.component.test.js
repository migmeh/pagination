import React, { Component } from "react";
import TutorialsList from "./list.component";


describe('list componet',()=>{

    it('render', ()=>{
        const wrapper = <TutorialsList/>;
        expect(wrapper).toMatchSnapshot();
    });

   /* it('render cero', ()=>{
        const page = TutorialsList('justo at tincidunt rhoncus', 1, 5);
        expect(page).toEqual(JSON);
    });*/
   /* it('render uno', ()=>{
        const wrapper = <retrieveTutorials/>;
        expect(wrapper).toMatchSnapshot();
    });*/

  /*  it('render dos', ()=>{
        const wrapper = <handlePageChange/>;
        expect(wrapper).toMatchSnapshot();
    });*/

   /* it('render tres', ()=>{
        const wrapper = <handlePageSizeChange/>;
        expect(wrapper).toMatchSnapshot();
    });*/

});

