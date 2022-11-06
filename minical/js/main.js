// =====================================
//      This is a sample solution.  
//    DO NOT DISTRIBUTE TO STUDENTS!
// =====================================

/*
 *
 * ENG1003 2020-S1 Supplementary Assignment web app
 * 
 * Copyright (c) 2020  Monash University
 *
 * Written by Jonny Low
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
*/


function searchCalendar()
{
    let bodyTextRef = document.getElementById("bodyText").innerHTML.toLowerCase();
    let searchmsg = prompt("Please enter calendar item").toLowerCase();
    let result = bodyTextRef.match(searchmsg);

    if(result != null)
    {
        alert("Calendar item: " + result + " is found");
    }
    else
    {
        alert("Calendar item not found. Please try again");
    }
    
}

// need to work and fix error
function displayCalItem()
{
    let output = "";
    
    // retrieve arraylist from Local Storage
    let localStorageData = getDataLocalStorage();
    calendars.fromData(localStorageData);
    //console.log(calendars[0]._title); not working, have to troubleshoot

    // Loop through each instances in the arrayList
        // extract ._title property value and print output
        output = '<span class="event">' + "club meeting" + '</span>';

    // print to HTML
    document.getElementById("2020-08-01").innerHTML = output;
    
}

displayCalItem();