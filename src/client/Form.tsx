import React from 'react'
import { useState } from 'react'
import Style from 'styled-components'
import { Center } from './styles'

export default function Form({ submit, setStates }) {


    return (
        <div className="p-0">
            <form action="post" style={{ border: '2px solid black', borderRadius: '3px' }} className="my-2 p-2">

                <div className="my-1">
                    <label className="me-2" htmlFor="eventname">Event Name</label>
                    <input onChange={(e) => setStates.name(e.target.value)} id="eventname" type="text" />
                </div>

                <div className="my-1">
                    <label className="me-2" htmlFor="eventdescription">Event Description</label>
                    <textarea onChange={(e) => setStates.description(e.target.value)} id="eventdescription"></textarea>
                </div>

                <div className="my-1">
                    <label className="me-2" htmlFor="eventdate">Event Date</label>
                    <input onChange={(e) => setStates.date(e.target.value)} id="eventdate" type="date" />
                </div>
                <Center>
                    <button className="btn btn-primary" type="submit" onClick={submit}> Submit</button>
                </Center>
            </form>
        </div>
    )
}
