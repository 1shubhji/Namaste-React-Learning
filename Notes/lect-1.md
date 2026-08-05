            Episode-1 Notes

homework :- 

1. what is cdn ?
2. what is crossOrigin => 

    crossorigin basically browser ko bolta hai:
    "Is external resource ko cross-origin rules ke saath handle karo."

=> React = UI banane ki library ya create krne ki library bhi kh skte hia

=> ReactDOM = UI ko browser DOM mein render karne ki library

=> CDN = React ki files ko internet se directly load karne ka tareeka


**** Methods to get react into the program ? ****

 1. By cdn links just copy them 
 
 
# React.createElement(type, props, children) =>  And it will return an js Object

    ex :- React.createElement(
        "h1",
        {id:'kuchBhi'},
        "Hello World"
    );

  -> It mean ki Ye browser ka actual <h1> directly create nahi karta. Ye React ko ek    description/object deta hai ki:

             "Mujhe ek h1 chahiye, jiske andar Hello World ho." 

             Balki ek object return krta which look something like this :-

                                {
                        type: "h1",
                        props: {
                            children: "Hello World"
                        }
                    }

# If you want to create nested elements then :- 

    const parent = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},React.createElement('h1',{},'Hii nested elements using react here guys!')));

    SO basically this create something like this :-

    <div id="parent">
        <div id="child">
            <h1>Hii nested elements using react here guys!</h1>
        </div>
    </div>

# So now if you want to create sibling in this html, then how can you do with react ?
     
    -> so that's like this :- 

    -> const x = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},'Hii nested elements using react here guys!'),React.createElement('h2',{},'Hii Sibling elements using react here guys!')]));

    -> Mean if you want to create a siblings inside an element, mean multiple sibling elements inside a elements, then you have to use array, which is shown in above example.

    -> and that code will look like this :- 

    <div id="root">
        <div id="parent">
            <div id="child">
                <h1>Hii nested elements using react here guys!</h1>
                <h2>Hii Sibling elements using react here guys!</h2>
            </div>
        </div>
    </div>

# SO another complex example is here :- 

        -> const y = React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child1"},[React.createElement('h1',{},'Hii nested elements using react here guys of parent child1!'),React.createElement('h2',{},'Hii Sibling elements using react here guys of parent child1!')])],[React.createElement('div',{id:"child2"},[React.createElement('h1',{},'Hii nested elements using react here guys of parent child2!'),React.createElement('h2',{},'Hii Sibling elements using react here guys! of parent child2')])]);

       -> And this will look like this :-

        <div id="parent">
            <div id="child1">
                <h1>Hii nested elements using react here guys of parent child1!</h1>
                <h2>Hii Sibling elements using react here guys of parent child1!</h2>
            </div>
            <div id="child2">
                <h1>Hii nested elements using react here guys of parent child2!</h1>
                <h2>Hii Sibling elements using react here guys! of parent child2</h2>
            </div>
        </div>

       -> SO this is the output so if you have to create something like this then you have to write that upper react code. But don't woory we are going to use jsx later on and then we say goodbye to React.createElement .

=> and one thing the react cdn links will always on top of app.js , because this react.js will use this react files, that's why it should be declare before.


=> so whenever we write "root.render(x)" then what happens , so basically what is does is , it puts that "x" under the div with id="root" which is present in index.html .

  -> so next counter question is what happen when something is already written under this div with id="root", then this root.render(x) will actually "replaced" not "appended" note that "replaced" that particular piece of code which is previously written there.

  => so at the end order of files matter a lot.


        