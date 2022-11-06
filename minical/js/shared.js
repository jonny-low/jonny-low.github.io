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

function updateLocalStorage(data)
{
	let dataJSON = JSON.stringify(data);
	localStorage.setItem(CALENDAR_DATA_KEY, dataJSON);
}

function getDataLocalStorage()
{
	let dataJSON = localStorage.getItem(CALENDAR_DATA_KEY);
	let data = JSON.parse(dataJSON);
	return data;
}

function checkIfDataExistsLocalStorage()
{
	let data = localStorage.getItem(CALENDAR_DATA_KEY);
	if (data && data !== null && data !== undefined && data !== "")
	{
		return true;
	}
	return false;
}

// calendar class
class Calendar
{
    constructor(newCalType,newCalTitle,newCalDate,newCalTime,newCalDescription)
    {
        this._calType = newCalType;
        this._title = newCalTitle;
        this._date = newCalDate;
        this._time = newCalTime;
        this._description = newCalDescription;
    }

    get calType(){return this._calType};
    get title(){return this._title};
    get date(){return this._date};
    get time(){return this._time};
    get description(){return this._description};

    set calType(text){this._calType = text};
    set title(text){this._title = text};
    set date(date){this._date = date};
    set time(time){this._time = time};
    set description(description){this._description = description};

    fromData(data)
    {
        this._calType = data._calType;
        this._title = data._title;
        this._date = data._date;
        this._time = data._time;
        this._description = data._description;
    }

}



class CalendarList
{
    constructor()
    {
        this._calendars = [];
    }

    get calendars(){return this._calendars};

    addCalendar(cal)
    {
        this._calendars.push(cal);
    }
    
    fromData(data)
	{
		this._calendars = [];
		
		let calendars = data._calendars;
		for (let i = 0; i < calendars.length; i++)
		{
			let calendar = new Calendar();
			calendar.fromData(calendars[i]);
			this._calendars.push(calendar);
		}
	}
}

// on load
const CALENDAR_DATA_KEY = "ENG1003-CalendarList";
let calendars = new CalendarList();

if (checkIfDataExistsLocalStorage())
{
	let localStorageData = getDataLocalStorage();
	calendars.fromData(localStorageData);
}
else
{
	updateLocalStorage(calendars);
}

