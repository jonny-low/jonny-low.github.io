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

// collect information from inputs
function saveCalendar()
{
    let calTypeRef = document.getElementById("calType").value;
    let titleRef = document.getElementById("addTitle").value;
    let dateRef = document.getElementById("date").value;
    let timeRef = document.getElementById("time").value;
    let descRef = document.getElementById("description").value;

    // create calendar instance
    let calItem = new Calendar(calTypeRef,titleRef,dateRef,timeRef,descRef);
    // add to calendarList
    calendars.addCalendar(calItem);
    //update localStorage
    updateLocalStorage(calendars);
    // clear input
    location.reload();

    window.location = "index.html";
}
